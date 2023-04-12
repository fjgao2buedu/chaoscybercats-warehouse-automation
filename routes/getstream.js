module.exports = async function getstream(input) {
    const {default: intoStream} = await import('into-stream');
    return intoStream(input);
  };