// Exercise 01:
// B1: Tạo ra 1 đối tượng information(id, name, phone, address);
// let information = {
//   id: "",
//   name: "",
//   phone: "",
//   address: "",
// };

// // B2: Cho người dùng nhập các thông tin trên thông qua prompt
// let id = prompt("Please input id");
// let name = prompt("Please input name");
// let phone = prompt("Please input phone number");
// let address = prompt("Please input address");

// // B3: Cập nhật lại value dành cho các properties nằm trong information

// information.id = id;
// information.name = name;
// information.phone = phone;
// information.address = address;

// // B4: In đối tượng này ra màn hình console
// console.log("Information", information);

// B2:

// // B1: Tạo ra đối tượng information
// let information = {
//   id: 1,
//   name: "Rikkei Academy",
//   phone: "0973812598",
//   address: "36 Mễ Trì, Nam Từ Liêm, Hà Nội",
// };

// // B2: Tiến hành xoá property address
// delete information.address;

// // B3: Thêm property email
// information.email = "rikkei@gmail.com";

// // B4: In đối tượng đó ra màn hình console
// console.log("Information", information);

// Ex3:

// B1: Tạo ra 1 danh sách sinh viên
// let studentList = [];

// // B2: Nhập vào số lượng sinh viên
// let number = +prompt("Please input students number");

// // B3: Sử dụng vòng lặp (number lần) để lặp đi lặp lại
// // quá trình tạo mới 1 đối tượng sinh viên(id, name) và
// // thêm sv đó vào studentList

// for (let i = 1; i <= number; i = i + 1) {
//   // C1:
//   //   let student = {};
//   //   let id = prompt("Please input student id");
//   //   let name = prompt("Please input student name");

//   //   student.id = id;
//   //   student.name = name;

//   //   C2:
//   let id = prompt("Please input student id");
//   let name = prompt("Please input student name");

//   //   let student = {
//   //     id: id,
//   //     name: name,
//   //   };

//   // ES6 shorthand
//   let student = {
//     id,
//     name,
//   };

//   // {id, name}
//   studentList.push(student);
// }

// // B4: In ra danh sách sinh viên đó
// console.log("Danh sách sinh viên", studentList);

// Ex04:
// Ex05:

// B1: Tạo ra danh sách "SÁCH"
// const bookList = [
//   {
//     author: "Nguyễn Nhật Ánh",
//     name: "Tôi thấy hoa vàng trên cỏ xanh",
//   },
//   {
//     author: "J.K Rowling",
//     name: "Harry Potter",
//   },
//   {
//     author: "Robert Kiyosaki",
//     name: "Rich dad, poor dad",
//   },
// ];

// B2: Cho người dùng nhập vào từ khoá tìm kiếm (tên tác giả/author)
// let author = prompt("Please input author name");

// B3: Duyệt qua danh sách bookList
// Hoàn toàn sử dụng vòng lặp for...IN để duyệt qua 1 mảng

// Tạo ra 1 biến cờ (flag), switch (công tắc)
//
// let findIndex = -1;
// for (let index in bookList) {
//   // B4: Tại mỗi 1 lần lặp, lấy ra được 1 đối tượng book trong bookList
//   // Tiến hành so sánh thuộc tính author của đối book đó === author người dùng
//   // nhập vào hay không
//   if (bookList[index].author === author) {
//     findIndex = index;
//   }
// }

// // findIndex : -1 (Công tắc tắt)
// // findIndex : vị trí của phần tử tìm thấy ứng với điều kiện của bài toán

// if (findIndex === -1) {
//   console.log("Không tìm thấy quyển sách nào cả");
// } else {
//   console.log("Sách tìm thấy đây thằng kia", bookList[findIndex]);
// }

// Ex06

// Xây dựng hàm

// function sortProductList(productList) {
//   // Sắp xếp mảng productList
//   // Visualgo
//   // .sort()
//   productList.sort(function (a, b) {
//     return a.price - b.price;
//   });

//   // Output: productList đã được sắp xếp
//   return productList;
// }

// let products = [
//   {
//     id: 1,
//     name: "Iphone 15",
//     price: 25000,
//   },
//   {
//     id: 2,
//     name: "Iphone 14 Pro",
//     price: 22000,
//   },
//   {
//     id: 3,
//     name: "Iphone 15 ProMax",
//     price: 32000,
//   },
// ];

// let sortArr = sortProductList(products); // Output [{id: 2}, {id: 1}, {id: 3}]
// console.log(sortArr);

// Ex07:

// B1: Cho người dùng nhập vào các giá tị id, email, userName, password
let users = [];

let id = prompt("Please input id");
let userName = prompt("Please input username");
let email = prompt("Please input email");
let password = prompt("Please input password");

// B2: Dựa vào yêu cầu của bài toán
// Lần lượt kiểm tra tính hợp lệ (validate) của các trường dữ liệu
// username, email, password

let isUsernameValid = userName === "" || userName.length < 3;
if (isUsernameValid) {
  console.log("username không hợp lệ");
}

// regular expression (RegEx)
// Giống như một template mẫu (bản mẫu blueprint), bản quy tắc dành cho chuỗi ký tự
// Email phải có @, domain name trong đó ==> regEx

let emailRegEx =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

let isEmailValid = email === "" || !emailRegEx.test(email);
if (isEmailValid) {
  console.log("email không hợp lệ");
}

let isPasswordValid = password === "" || password.length < 8;
if (isPasswordValid) {
  console.log("password không hợp lệ");
}

if (!isUsernameValid && !isEmailValid && !isPasswordValid) {
  let user = {
    id,
    userName,
    email,
    password,
  };

  users.push(user);
  console.log(users);
}
