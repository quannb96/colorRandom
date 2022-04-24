const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const color = document.getElementById("color");
const btnColor = document.getElementById("btnColor");

btnColor.onclick = () => {
  let colorChange = "#";
  for (let index = 0; index < 6; index++) {
    let i = Math.floor(Math.random() * colors.length);
    colorChange += colors[i];
  }

  color.innerText = colorChange;
  document.body.style.backgroundColor = colorChange;
};
