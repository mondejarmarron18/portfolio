const cursorSize = 20; //Pixel
const cursorAnimationSpeed = 15; //Milliseconds

//Animate cursor position
const animateCursor = (
  cursors: NodeListOf<HTMLDivElement>,
  x: number,
  y: number,
) => {
  cursors.forEach((cursor, index) => {
    setTimeout(() => {
      requestAnimationFrame(() => {
        cursor.style.transform = `translate(${x}px, ${y}px)`;
      });
    }, index * cursorAnimationSpeed);
  });
};

//Set cursor size and default styles
const initCursor = (cursors: NodeListOf<HTMLDivElement>) => {
  //Disable cursor on touch devices
  if ("ontouchstart" in window) return;

  cursors.forEach((cursor, index) => {
    const size = `${cursorSize - index * 2}px`;

    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.height = size;
    cursor.style.width = size;
  });
};

//Show cursor
const showCusor = (cursors: NodeListOf<HTMLDivElement>) => {
  cursors.forEach((cursor) => {
    cursor.style.display = "block";
  });
};

//Hide cursor
const hideCusor = (cursors: NodeListOf<HTMLDivElement>) => {
  cursors.forEach((cursor) => {
    cursor.style.display = "none";
  });
};

const cursor = () => {
  const cursors = document.querySelectorAll<HTMLDivElement>(".cursor");

  initCursor(cursors);

  //Event listeners for mouse
  document.addEventListener("mousemove", (e) =>
    animateCursor(cursors, e.clientX, e.clientY),
  );
  document.addEventListener("mouseover", () => showCusor(cursors));
  document.addEventListener("mouseleave", () => hideCusor(cursors));

  //Event listeners for touch
  //Uncomment to enable cursor's touch support
  // document.addEventListener("touchmove", (e) =>
  //   animateCursor(cursors, e.touches[0].clientX, e.touches[0].clientY),
  // );
  //document.addEventListener("touchstart", () => hideCusor(cursors));
  // document.addEventListener("touchend", () => hideCusor(cursors));
};

export default cursor;
