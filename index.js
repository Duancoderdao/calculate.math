const input = document.querySelector(".input");
const items = document.querySelectorAll(".item");

items.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (input.innerHTML == "0") {
      input.innerHTML = "";
    }
    if (btn.innerHTML == "AC") {
      input.innerHTML = "0";
    } else if (btn.innerHTML == "DEL") {
      //tạo mảng mới lấy số phần tử dựa trên màn hình
      var newArr = Array.from(input.innerHTML);

      // xóa phần tử cuối cùng
      newArr.splice(newArr.length - 1, 1); // splice(position, howmany phần tử)

      if (newArr.length != 0) {
        input.innerHTML = newArr.join("");
      } else {
        input.innerHTML = "0";
      }
    } else if (btn.innerHTML == "=") {
      input.innerHTML = Math.round(eval(input.innerHTML));
    } else {
      input.innerHTML += btn.innerHTML;
    }
  });
});
