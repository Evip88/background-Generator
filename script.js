let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gredient");
let colorRandom = document.getElementById("random");

// body.style.background = "red"; this is how we grab the color or modiefiy the color from the body

setGradient = () => {
  body.style.background = _linearGradient();
  css.textContent = `${body.style.background};`;
};

_linearGradient = () => {
  return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

// you could also do it in HTML the input <input oninput="setgradient()" class="color1" type="color" name="color1" value ="#00ff00">
// just use the function that we created for  DRY(dont repeat your self) and write that in the html like so
// then you could delete color2.addEventListener("input", setGradient); 2 ways to do it, but firt is more recomended

//Random color generator
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = "#" + randomColor;
  textColor.innerHTML = "#" + randomColor;
};

function randomColors() {
  // Generate two random colors
  const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Set the input values to the generated colors
  color1.value = randomColor1;
  color2.value = randomColor2;

  // Apply the gradient with the new colors
  setGradient();
}

// Add event listener to the button
colorRandom.addEventListener("click", randomColors, setBg);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
