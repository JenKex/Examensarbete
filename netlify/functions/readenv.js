// import { get } from "axios";

// // exports.handler = async function (event, context) {
// //   return {
// //     statusCode: 200,
// //     body: `public key: ${process.env.REACT_APP_API_KEY}`
// //   }
// // };

// export async function handler (event, context) {
//   try {
//     const { id } = event.queryStringParameters;
//     const response = await get(`${process.env.REACT_APP_API_KEY}/${id}`);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ title: response.data.title }),
//     };
//   } catch (err) {
//     return {
//       statusCode: 404,
//       body: err.toString(),
//     };
//   }
// }
