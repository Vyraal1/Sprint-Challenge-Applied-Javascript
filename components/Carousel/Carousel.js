/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  leftButton.textContent = "<";

  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  rightButton.textContent = ">";

  // * How would I get all of them dynamically in the folder?
  const images = {
    img1: "./assets/carousel/mountains.jpeg",
    img2: "./assets/carousel/computer.jpeg",
    img3: "./assets/carousel/trees.jpeg",
    img4: "./assets/carousel/turntable.jpeg"
  };

  // Append left button before appending the images
  carousel.appendChild(leftButton);

  for (img in images) {
    let newImg = document.createElement("img");
    newImg.classList.add(`${img}`);
    newImg.src = images[img];
    carousel.appendChild(newImg);
  }

  carousel.appendChild(rightButton);

  // button functionality
  leftButton.addEventListener("click", e => {
    document.querySelector(
      `.carousel .img${currentImg.toString()}`
    ).style.display = "none";

    currentImg--;
    let wrapAround = currentImg < 1;
    if (wrapAround) currentImg = 4;

    document.querySelector(
      `.carousel .img${currentImg.toString()}`
    ).style.display = "block";
  });

  rightButton.addEventListener("click", e => {
    document.querySelector(
      `.carousel .img${currentImg.toString()}`
    ).style.display = "none";

    currentImg++;
    let wrapAround = currentImg > Object.keys(images).length;
    if (wrapAround) currentImg = 1;
    document.querySelector(
      `.carousel .img${currentImg.toString()}`
    ).style.display = "block";
  });

  document.querySelector(".carousel-container").appendChild(carousel);

  //initial state
  let currentImg = 1;
  document.querySelector(
    `.carousel .img${currentImg.toString()}`
  ).style.display = "block";
}

Carousel();
