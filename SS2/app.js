///// Loop

/*
Viết chương trình in ra các số từ 1 -> 10 trên màn hình console.log
*/

/*
while(điều kiện lặp){
/// lệnh
}
*/

// let i = 1;
// while (i <= 10) {
//   console.log(i); // 1, 
//   i = i + 1; // Tăng 1 đơn vị sau mỗi lần lặp
// }

/*
do{
  /// Lệnh
}
while(điều kiện);
*/
// do {
//   console.log(i);
//   i++; // i = i + 1;
// }
// while (i <= 10);


/*
for(box1;box2;box3 ){
// Lệnh
}

box1: Chạy lần đầu tiên và duy nhất trong vòng lặp
box2: Kiểm tra điều kiện lặp
box3: Câu lệnh chạy sau cùng của mỗi lần lặp

*/
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }





////////////// Array
/////// Khai báo Array
//// C1:
// let arr = []; //// Thường dùng

//// C2: 
// let arr1 = new Array(); /// ít dùng


/////// Kiểm tra kiểu dữ liệu?
// let a = "Hello"; ///String
// let b = 123; /// Number
// console.log(typeof a); //// String
// console.log(typeof b); //// Number
// console.log(
//   Array.isArray(arr)
// ); ////  Đúng

// let b = 123

// /////// Thêm 3 phần tử vào mảng
// arr.push("máy tính", b, 9, 8);

// ///// In ra mảng
// console.log(arr); /// 


// ////// Số phần tử trong mảng
// console.log(
//   arr.length
// ); ////


// ////// Xóa phần tử ở vị trí cuối mảng
// arr.pop();
// console.log(arr);


// ////// Xóa phần tử ở vị trí đầu mảng
// arr.shift();
// console.log(arr);


// ///// Update phần tử mảng: [123,9]
// //// Vị trí phần tử mảng: bắt đầu từ vị trí số 0
// arr[0] = 321
// console.log(arr); ///

// let arr1 = [123, 321, "hi", "hello", true, false];
// ///// hello => thank you
// //////// Tìm vị trí của hello trong mảng
// let vitriHello = arr1.indexOf("hello")
// console.log("vitriHello: ", vitriHello);//// 
// arr1[vitriHello] = "thank you"
// console.log(arr1);

// ///// Xóa phần tử trong mảng trên: "true"
// let vitriTrue = arr1.indexOf(true);
// console.log("vitriTrue: ", vitriTrue);
// /*
// arr.splice(box1, box2, box3, ...);
// box1: Vị trí phần tử trong mảng
// box2: Số lượng phần tử muốn xóa tại vị trí box1
// box3: Thêm phần tử vào vị trí box1
// */
// arr1.splice(vitriTrue, 1);
// console.log(arr1); ////



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/// In ra các số chẵn trong mảng lên màn hình console;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}





