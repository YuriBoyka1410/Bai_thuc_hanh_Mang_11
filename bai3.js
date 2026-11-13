// Bài 3: Đếm số ký tự số trong mảng
// Yêu cầu: Đếm các ký tự số từ 0 đến 9
let arr = ["a", "1", "b", "2", "3", "x", "9", "10"];
let count = 0;
//Duyệt từng phần tử trong mảng
for (let i = 0; i < arr.length; i++) {
  // Kiểm tra phần tử có phải ký tự số hay không
  if (arr[i] >= "0" && arr[i] <= "9") {
    count++;
  }
}
console.log("Số ký tự số trong mảng: " + count);
