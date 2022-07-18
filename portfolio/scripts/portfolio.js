const requestURL =
  "https://raw.githubusercontent.com/ianashby/WDD230/main/portfolio/portfolio_images.json";

let column1 = document.querySelector(".column1");
let column2 = document.querySelector(".column2");
let column3 = document.querySelector(".column3");
let allPhotos = document.querySelector("#all");
let landscapePhotos = document.querySelector("#landscapes");
let portraitPhotos = document.querySelector("#portraits");

async function getData(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const data = await response.json();

    const photos = data["images"];
    let num = 0;

    photos.forEach((photo) => {
      if (num < 3) {
        num++;
      } else {
        num = 1;
      }
      displayPhotos(photo, num);
    });

    allPhotos.addEventListener("click", () => {
      column1.innerHTML = "";
      column2.innerHTML = "";
      column3.innerHTML = "";
      photos.forEach((photo) => {
        if (num < 3) {
          num++;
        } else {
          num = 1;
        }
        displayPhotos(photo, num);
      });
    });

    landscapePhotos.addEventListener("click", () => {
      column1.innerHTML = "";
      column2.innerHTML = "";
      column3.innerHTML = "";
      photos.forEach((photo) => {
        if (photo.type === "Landscape") {
          if (num < 3) {
            num++;
          } else {
            num = 1;
          }
          displayPhotos(photo, num);
        }
      });
    });

    portraitPhotos.addEventListener("click", () => {
      column1.innerHTML = "";
      column2.innerHTML = "";
      column3.innerHTML = "";
      photos.forEach((photo) => {
        if (photo.type === "Portrait") {
          if (num < 3) {
            num++;
          } else {
            num = 1;
          }
          displayPhotos(photo, num);
        }
      });
    });
  }
}

getData(requestURL);

function displayPhotos(photo, num) {
  let card = document.createElement("picture");
  // let largePhoto = document.createElement('source');
  // largePhoto.setAttribute('media', '(min-width: 650px)');
  let smallPhoto = document.createElement("img");

  // Large Image
  // largePhoto.setAttribute('srcset', photo.large_img);
  // card.appendChild(largePhoto);

  // Small Image
  smallPhoto.setAttribute("src", photo.small_img);
  smallPhoto.setAttribute("alt", `${photo.name + " " + photo.desc}`);
  card.appendChild(smallPhoto);

  document.querySelector(`.column${num}`).appendChild(card);
}
