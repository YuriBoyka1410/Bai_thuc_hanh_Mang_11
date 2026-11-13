// Bài 4: Điếm số từ trong một chuỗi
let str = "Hoc JavaScript moi ngay";
let count = 0;
let isInsideWord = false;

// Duyệt từng ký tự trong chuỗi
for (let i = 0; i < str.length; i++) {
  //Nếu ký tự hiện tại không phải dấu cách
  if (str[i] !== " " && str[i] !== "\t" && str[i] !== "\n") {
    //Nếu trước đó chưa ở trong một từ
    if (isInsideWord === false) {
      count++;
      isInsideWord = true;
    }
  } else {
    // Gặp dấu cách thì kết thức từ hiện tại
    isInsideWord = false;
  }
}
console.log("Số từ trong chuỗi: " + count);
