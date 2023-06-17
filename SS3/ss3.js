// let fruits = [
//   ["grapes", 15],
//   ["watermelon", 100],
//   ["Banana", 3]
// ];

///// Sử dụng console.log để in ra từng số lượng quả như vd sau:
// // 'I Have 15 Grapes';

// for (let i = 0; i < fruits.length; i++) {
//   console.log(
//     "I have " + fruits[i][1] + " " + fruits[i][0]
//   );
// }


///////////// Giới thiệu về kiểu dữ liệu Object: 
//// Cú pháp khai báo 1 đối tượng
// let obj = {
//   /// Thuộc tính
//   name: "Hieu",
//   age: 26,
//   hobbies: "Coding",


//   // phương thức
//   move() {
//     alert("Go to School");
//   },

//   sit() {

//   }
// }


// let myDog = {
//   name: "Ngáo",
//   "legs": 4,
//   "friends": ["everything!"]
// };

// ////// Đổi tên "Ngáo" => "Husky"
// myDog.name = "Husky"
// // console.log(myDog);// ?

// /// Tạo ra 1 thuộc tính/phương thức mới.
// myDog.bark = function () {
//   alert("Gâu gâu");
// }

// /// Chạy phương thức
// myDog.bark();


// ///// Xóa 1 phương thức/thuộc tính object
// delete myDog.bark; /// ?
// console.log(myDog);



///////// Kiến thức buổi 3
// let chuoi = "Hello World";
// ///// Đếm ký tự chuỗi
// console.log(chuoi.length);

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i in arr) {
//   console.log(i); // i đại diện cho vị trí của phần tử trong mảng
// }

// for (let j of arr) {
//   console.log(j); // j đại diện cho phần tử trong mảng
// }

///// Duyệt chuỗi hello world
// let str = "";
// for (let k of chuoi) {
//   // console.log(k); /// 
//   if (k != "d") {
//     str = str + k;
//   }
// }
// console.log(str);

///// Xóa chữ d bên trong chuoi vừa rồi và in ra chuoi moi đó


//////// Lưu trữ dữ liệu cục bộ trên trình duyệt.
// let a = "Hi";

/////// Cú pháp lưu trữ dữ liệu cục bộ LocalStorage trên trình duyệt
let str = "Hello World";
let arr = [1, 2, 3, 4, "HI", true, false];
let obj = {
  name: "John",
  age: 25,
}

///// C1: setItem
localStorage.setItem("str", str);
localStorage.setItem("arr",
  // ép kiểu dữ liệu thành String
  JSON.stringify(arr)
);


/////// Lấy dữ liệu từ LocalStorage và in ra màn hình console
let getItem = localStorage.getItem("str");
console.log("str: ", getItem); ///?

let getItemArr = JSON.parse(
  localStorage.getItem("arr")
);
console.log("getItemArr: ", getItemArr);///?
