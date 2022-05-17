let day = date.getDay();

if (day == 1 || day == 2) {
    let banner = document.querySelector('.banner');
    banner.style.display = 'block';

    document.querySelector(".banner-button").addEventListener("click", function () {
        this.closest(".banner").style.display = "none";
      });
} else {
    let banner = document.querySelector('.banner');
    banner.style.display = 'none';
}

