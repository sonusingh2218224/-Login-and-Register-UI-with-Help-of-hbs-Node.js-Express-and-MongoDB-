import jwt from "jsonwebtoken";
const secret = "abce1234";

// const token = jwt.sign(
//   {
//     id: 2398,
//     name: "sonu singh",
//     email: "sonusingh2218224@gmail.com",
//   },
//   secret
// );

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM5OCwibmFtZSI6InNvbnUgc2luZ2giLCJlbWFpbCI6InNvbnVzaW5naDIyMTgyMjRAZ21haWwuY29tIiwiaWF0IjoxNjUxMDI4MjI0fQ.T-BcbdB3PNkC40VL04SX2Oj_friHC1mS9010mIx3XhE";

let result = jwt.verify(token, secret);
console.log(result);
