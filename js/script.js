const btn = document.querySelector(".btn");
let x, y;
let isBlockActive = false;

btn.onmousedown = function (event) {
  btn.innerHTML = `${event.type} ${event.clientX} ${event.clientY}`;

  x = event.clientX;
  y = event.clientY;

  isBlockActive = true;
};

document.onmouseup = function (event) {
  btn.innerHTML = `${event.type} ${event.clientX} ${event.clientY}`;
  if (isBlockActive) {
    const x_ = event.clientX;
    const y_ = event.clientY;

    const diff_x = x_ - x;
    const diff_y = y_ - y;

    btn.style.left =
      btn.style.left === ""
        ? diff_x + "px"
        : parseInt(btn.style.left) + diff_x + "px";
    btn.style.top =
      btn.style.top === ""
        ? diff_y + "px"
        : parseInt(btn.style.top) + diff_y + "px";

    isBlockActive = false;
  }
};

btn.onmousemove = function (event) {
  btn.innerHTML = `${event.type} ${event.clientX} ${event.clientY}`;
  if (isBlockActive) {
    const x_ = event.clientX;
    const y_ = event.clientY;

    const diff_x = x_ - x;
    const diff_y = y_ - y;

    btn.style.left =
      btn.style.left === ""
        ? diff_x + "px"
        : parseInt(btn.style.left) + diff_x + "px";
    btn.style.top =
      btn.style.top === ""
        ? diff_y + "px"
        : parseInt(btn.style.top) + diff_y + "px";

    x = x_;
    y = y_;
  }
};
