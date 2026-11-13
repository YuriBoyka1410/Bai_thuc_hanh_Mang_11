// Bài 1: In các phần tử của mảng hai chiều
// Yêu cầu: Sử dụng vòng lặp for lồng nhau

// Khởi tạo mảng hai chiều
let a = [
  [1, 2, 3, 1],
  [5, 45, 22, 12],
  [7, 8, 5, 23],
  [6, 78, 43, 21],
];
// Duyệt từng hàng trong mảng
for (let i = 0; i < a.length; i++) {
  console.log("row " + i);
  // Duyệt từng phẩn tử trong hàng hiện tại
  for (let j = 0; j < a[i].length; j++) {
    console.log(" " + a[i][j]);
  }
}
