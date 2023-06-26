// tinh tien luong
var luong1Ngay = 100000;
var ngayLam = 30;
var tongLuong = luong1Ngay * 30;
console.log("🚀 ~ file: index.js:5 ~ tongLuong:", tongLuong)

// tinh trung binh
var so1 = 30;
var so2 = 50;
var so3 = 70;
var so4 = 90;
var so5 = 100;
var sum = so1 + so2 + so3 + so4 + so5;
var trungBinh = sum / 5;
console.log("🚀 ~ file: index.js:15 ~ trungBinh:", trungBinh)

// chuyen doi tien te
// khong biet em test cai nay co duoc khong a :v
const exchangeRate = 23500;
const usdAmount = prompt("Nhập số tiền USD");
const vndAmount = usdAmount * exchangeRate; alert(`Số tiền tương ứng VND là: ${vndAmount}`);

//dien tich chu vi

var chieuDai = 5;
var chieuRong = 3;
var chuVi = (chieuDai + chieuRong) * 2;
console.log("🚀 ~ file: index.js:28 ~ chuVi:", chuVi)
var dienTich = chieuDai * chieuRong;
console.log("🚀 ~ file: index.js:30 ~ dienTich:", dienTich)

//tong 2 ky so

var so1 = 20;
var so_hang_dv = so1 % 10;
var so_hang_chuc = so1 / 10;
var sum = so_hang_dv + so_hang_chuc;
console.log("🚀 ~ file: index.js:38 ~ sum:", sum)
