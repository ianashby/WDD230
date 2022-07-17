const requestURL = 'https://raw.githubusercontent.com/ianashby/WDD230/main/portfolio/portfolio_images.json';

async function getData(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
      const data = await response.json();

      const photos = data['images'];
      let num = 0;

      photos.forEach(photo => {
          if (num < 3) {
              num++;
          } else {
              num = 1;
          }
          displayPhotos(photo, num);
      });
  }
}

getData(requestURL);

{/* 
<picture>
  <source media="(min-width: 1500px)" srcset="images/seattle_large.webp">
  <source media="(min-width: 1200px)" srcset="images/seattle_medium.webp">
  <source media="(min-width: 840px)" srcset="images/seattle_medium_wide.webp">
  <source media="(min-width: 700px)" srcset="images/seattle_medium.webp">
  <img src="images/seattle_small.webp" alt="Seattle Chamber of Commerce Hero Image">
</picture> 
*/}

function displayPhotos(photo, num) {
    let card = document.createElement('picture');
    let largePhoto = document.createElement('source');
    // largePhoto.setAttribute('media', '(min-width: 650px)');
  
    let smallPhoto = document.createElement('img');

    // Large Image
    largePhoto.setAttribute('srcset', photo.large_img);
    // card.appendChild(largePhoto);

    // Small Image
    smallPhoto.setAttribute('src', photo.small_img);
    smallPhoto.setAttribute('alt', `${photo.name + ' ' + photo.desc}`);
    card.appendChild(smallPhoto);
    
    document.querySelector(`.column${num}`).appendChild(card);
}