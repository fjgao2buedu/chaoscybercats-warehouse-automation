if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  var baseUrl = "http://localhost:7071/api"
} else {
  var baseUrl = "https://coordinator.proudhill-a9115a2b.eastus.azurecontainerapps.io/api"
}

const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline
} = require('@azure/storage-blob');

const fetch = require('node-fetch')
const express = require('express');
const router = express.Router();
const containerName1 = 'imgpdfs';
const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image');
const getStream = require('./getstream');
// const containerName2 = 'images';
const ONE_MEGABYTE = 1024 * 1024;
const uploadOptions = { bufferSize: 4 * ONE_MEGABYTE, maxBuffers: 20 };
const ONE_MINUTE = 60 * 1000;

const sharedKeyCredential = new StorageSharedKeyCredential(
  process.env.AZURE_STORAGE_ACCOUNT_NAME,
  process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY);
const pipeline = newPipeline(sharedKeyCredential);

const blobServiceClient = new BlobServiceClient(
  `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
  pipeline
);

const getBlobName = originalName => {
  // Use a random number to generate a unique file name, 
  // removing "0." from the start of the string.
  const identifier = Math.random().toString().replace(/0\./, '');
  return `${identifier}-${originalName}`;
};

const functionUrl = "/JobQueuePush"
const GET_MEDIA_ADDRESS_URL = (imgurl) => {
  return baseUrl + functionUrl + "?imgurl=" + imgurl;
}

router.get('/', async (req, res, next) => {

  let viewData;

  try {
    const containerClient = blobServiceClient.getContainerClient(containerName1);
    const listBlobsResponse = await containerClient.listBlobFlatSegment();

    for await (const blob of listBlobsResponse.segment.blobItems) {
      console.log(`Blob: ${blob.name}`);
    }

    viewData = {
      title: 'Home',
      viewName: 'index',
      accountName: process.env.AZURE_STORAGE_ACCOUNT_NAME,
      containerName: containerName1
    };

    if (listBlobsResponse.segment.blobItems.length) {
      viewData.thumbnails = listBlobsResponse.segment.blobItems;
    }
  } catch (err) {
    viewData = {
      title: 'Error',
      viewName: 'error',
      message: 'There was an error contacting the blob storage container.',
      error: err
    };
    res.status(500);
  } finally {
    res.render(viewData.viewName, viewData);
  }
});

router.post('/', uploadStrategy, async (req, res) => {
  const blobName = getBlobName(req.file.originalname);
  const stream = await getStream(req.file.buffer);
  const containerClient = blobServiceClient.getContainerClient(containerName1);;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    const isPdf = blobName.endsWith('.pdf');
    await blockBlobClient.uploadStream(stream,
      uploadOptions.bufferSize, uploadOptions.maxBuffers,
      { blobHTTPHeaders: { blobContentType: (isPdf ? "application/pdf" : "image/jpeg") } });
    // insert into queue
    var imgurl = "https://assignment4warehousa285.blob.core.windows.net/imgpdfs/" + blobName
    
    const url = GET_MEDIA_ADDRESS_URL(imgurl)
    await fetch(url);
    res.render('success', { message: 'File uploaded to Azure Blob storage.', filename: blobName, isPdf: isPdf, imgurl: imgurl });
  } catch (err) {
    res.render('error', { message: err.message });
  }
});

module.exports = router;