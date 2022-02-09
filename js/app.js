//AD TEXT TO THE ELEMENT
//element
  const aboutUs = document.querySelector('.about-text-p');
//Events
  document.addEventListener('DOMContentLoaded',getAboutUs)
//function

function getAboutUs() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET','data/About Us.txt',true);

  xhr.onload = function() {
    if (this.status === 200) {
      aboutUs.textContent = this.responseText;
    }
  }

  xhr.send();
}