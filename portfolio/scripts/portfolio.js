const requestURL = 'https://raw.githubusercontent.com/ianashby/WDD230/main/portfolio/portfolio_images.json';

async function getData(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
      const data = await response.json();

      const photos = data['images'];

      photos.forEach(photo => {
          displayPhotos(photo);
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

function displayPhotos(photo) {
    let card = document.createElement('picture');
    let largePhoto = document.createElement('source');
    largePhoto.setAttribute('media', '(min-width: 650px)');
  
    let smallPhoto = document.createElement('img');

    // Large Image
    largePhoto.setAttribute('srcset', photo.large_img);
    card.appendChild(largePhoto);

    // Small Image
    smallPhoto.setAttribute('src', photo.small_img);
    smallPhoto.setAttribute('alt', `${photo.name + ' ' + photo.desc}`);
    card.appendChild(smallPhoto);
    
    // // Business Name
    // let h2 = document.createElement('h2');
    // h2.textContent = business.name;
    // card.appendChild(h2);

    // // Business Type
    // let type = document.createElement('p');
    // type.textContent = business.type;
    // card.appendChild(type);

    // // Business Address
    // let address = document.createElement('p');
    // address.textContent = business.location.address1 + ' ' + ' ' + business.location.city + ', ' + business.location.state + ' ' + business.location.zip_code;
    // card.appendChild(address);

    // // Business Phone
    // let phone = document.createElement('p');
    // phone.textContent = business.phone;
    // card.appendChild(phone);

    // // Business Website
    // let website = document.createElement('a');
    // website.setAttribute('href', business.website);
    // website.textContent = 'Website';
    // card.appendChild(website);

    // Append card to the DOM (the prophet list).
    document.querySelector('div.cards').appendChild(card);
}