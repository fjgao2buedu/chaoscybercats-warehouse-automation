// /**
//  * This file contains some function stubs(ie incomplete functions) that
//  * you MUST use to begin the work for calculating the grades.
//  *
//  * You may need more functions than are currently here...we highly encourage you to define more.
//  *
//  * Anything that has a type of "undefined" you will need to replace with something.
//  */
// import { APPEND_BU_ID, BASE_API_URL, URL_EXTENSION_CLASS_LIST_STUDENTS, GET_DEFAULT_HEADERS, URL_EXTENSION_STUDENT_LIST_GRADES, URL_EXTENSION_CLASS_LIST_ASSIGNMENTS, URL_EXTENSION_CLASS_GET_BY_ID } from "../globals";

// /**
//  * This function might help you write the function below.
//  * It retrieves the final grade for a single student based on the passed params.
//  * 
//  * If you are reading here and you haven't read the top of the file...go back.
//  */
// export async function calculateStudentFinalGrade(
//   studentID: string,
//   classAssignments: IAssignment[],
//   klass: IUniversityClass
// ): Promise<IGradeTableEntry> {



//   const studentGrade: IStudentGrades = await fetchStudentGrade(studentID, klass.classId);

//   const StudentFinalGrade = {
//     studentId: studentID,
//     studentName: studentGrade.name,
//     classId: klass.classId,
//     className: klass.title,
//     semester: klass.semester,
//     // iterate over props
//     finalGrade: +Object.entries(studentGrade.grades[0])
//       // sum up the grades
//       .reduce<number>((cv, [key, value]) => {
//         // find weight by assignmentid
//         return (classAssignments.find(({ assignmentId: id }) => id === key)?.weight || 0) / 100 * +value + cv
//       }, 0).toFixed(2)
//   }
//   return new Promise(function (resolve, reject) { resolve(StudentFinalGrade); });
// }

// /**
//  * You need to write this function! You might want to write more functions to make the code easier to read as well.
//  * 
//  *  If you are reading here and you haven't read the top of the file...go back.
//  * 
//  * @param classID The ID of the class for which we want to calculate the final grades
//  * @returns Some data structure that has a list of each student and their final grade.
//  */
// export async function calcAllFinalGrade(classID: string): Promise<IGradeTableEntry[]> {

//   // conditional if passed in value
//   if (classID) {
//     const studentList: string[] = await fetchStudentList(classID);
//     const assignmentList: IAssignment[] = await fetchClassAssignments(classID);
//     const klass: IUniversityClass = await fetchClass(classID);
//     const finalGrade: IGradeTableEntry[] = await Promise.all(studentList.map(student => {
//       return calculateStudentFinalGrade(student, assignmentList, klass)
//     }))
//     return finalGrade
//   }
//   else {
//     return Promise.resolve([]);
//   }
// }

// // fetch student grade
// const fetchStudentGrade = async (studentID: string, classID: string) => {
//   var url = APPEND_BU_ID(BASE_API_URL + URL_EXTENSION_STUDENT_LIST_GRADES + studentID + '/' + classID)
//   return await fetch(url, {
//     method: "GET",
//     headers: GET_DEFAULT_HEADERS()
//   })
//     .then(res => res.json())
// }

// // fetch student list
// const fetchStudentList = async (classID: string) => {
//   var url = APPEND_BU_ID(BASE_API_URL + URL_EXTENSION_CLASS_LIST_STUDENTS + classID)
//   return await fetch(url, {
//     method: "GET",
//     headers: GET_DEFAULT_HEADERS()
//   })
//     .then(res => res.json())
// }

// // fetch class assignment
// const fetchClassAssignments = async (classID: string) => {
//   var url = APPEND_BU_ID(BASE_API_URL + URL_EXTENSION_CLASS_LIST_ASSIGNMENTS + classID)
//   return await fetch(url, {
//     method: "GET",
//     headers: GET_DEFAULT_HEADERS()
//   })
//     .then(res => res.json())
// }

// // fetch class information
// const fetchClass = async (classID: string) => {
//   var url = APPEND_BU_ID(BASE_API_URL + URL_EXTENSION_CLASS_GET_BY_ID + classID)
//   return await fetch(url, {
//     method: "GET",
//     headers: GET_DEFAULT_HEADERS()
//   })
//     .then(res => res.json())
// }
export {}