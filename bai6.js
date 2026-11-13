// Bài 6: Thay thế dầu - bằng dấu _

let arr = ["a", "-", "b", "-", "c", "2", "6"];

// Duyệt từng phần tử trong mảng
for (let i = 0; i < arr.length; i++) {
  // Nếu phần tử hiện tại là dấu -
  if (arr[i] === "-") {
    // Thay thế bằng dấu _
    arr[i] = "_";
  }
}

console.log("Mảng sau khi thay thế:");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
