// const images = document.getElementsByClassName("image");

// let globalIndex = 0,
//     last = { x: 0, y: 0 };

// const activate = (image, x, y) => {
//   image.style.left = `${x}px`;
//   image.style.top = `${y}px`;
//   image.style.zIndex = globalIndex;

//   image.dataset.status = "active";

//   last = { x, y };
// }

// const distanceFromLast = (x, y) => {
//   return Math.hypot(x - last.x, y - last.y);
// }

// const handleOnMove = e => {
//   if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
//     const lead = images[globalIndex % images.length],
//           tail = images[(globalIndex - 5) % images.length];

//     activate(lead, e.clientX, e.clientY);

//     if(tail) tail.dataset.status = "inactive";

//     globalIndex++;
//   }
// }

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);

// images hover effect endd

//* Disbleing  right click
// document.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
// });
//* end

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".name").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 8;
  }, 30);
};
