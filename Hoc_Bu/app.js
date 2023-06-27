/*
Đề bài: In ra số chẵn từ 1 đến 10.
 */

// let i = 1;
// while (i <= 10) {
//   if (i % 2 == 0) {
//     console.log(i); //
//   }
//   i = i + 1;
// }



// let i = 1;
// do {
//   console.log(i);
//   i = i + 1;
// }
// while (i <= 10);



// for (let i = 1; i <= 10; i = i + 1) {
//   /// kiểm tra số lẻ
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }


///////// Array: Danh sách (mảng dữ liệu trong đó có thể lưu được các KDL khác nhau)
//// Cú pháp khai báo mảng: 
// C1:
// let arr = []; // KDL là Array

// // C2: 
// let arr1 = new Array(); // KDL là Array


// /// Kiểm tra kiểu dữ liệu biến; 
// console.log(typeof arr); /// KDL: Object => SAI, để kiểm tra KDL Array ta viết như sau: 
// console.log(
//   Array.isArray(arr)
// ); /// Kết quả ra gì? 



// let arr = [123, 'Hello', true];
// /////////// 0       1       2

// //// Phương thức kiểm tra số phần tử mảng: .length
// console.log(
//   arr.length
// );// ?

// /// Thêm phần tử vào cuối mảng: .push(); C
// arr.push("hi", 0);
// console.log(arr);

// /// In ra từng phần tử mảng: R
// //// Duyệt mảng với vòng lặp For
// for (let i = 0; i < arr.length; i++) { // thay cho i = i + 1
//   console.log(
//     arr[i]
//   );
// }


// ////// U: update chỉ cần biết vị trí phần tử trong mảng để update là được
// //// Đề bài: thay đổi "Hello" => "Hola"
// arr[1] = "Hola";
// console.log(
//   arr[1]
// );

// ////D: Delete phần tử cần biết vị trí phần tử trong mảng
// ////// Đề bài: Xóa phần tử có giá trị 123 trong mảng
// /// sử dụng hàm: arr.splice();
// arr.splice(0,1);
// console.log(arr);///?







