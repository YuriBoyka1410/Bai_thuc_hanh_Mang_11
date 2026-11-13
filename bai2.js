// Bài 2: Đảo ngược mảng ký tự
let arr = ["c", "s", "c", "2", "6", "1"];
let result = "";
// Duyệt mảng từ phần tử cuối về đầu
for (let i = arr.length - 1; i >= 0; i--) {
  result += arr[i];
}
console.log("Kết quả đảo ngược: " + result);
