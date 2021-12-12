let map;

function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.addEventListener('scroll', ()=>{
  if (window.scrollY>150){
    document.getElementById('navbar').style.opacity='0.9';
  }
  else{
    document.getElementById('navbar').style.opacity='1';
  }
});



$(document).ready(() =>{
  $('#navbar a, .btn').on('click', function(event){
    if (this.hash !== ''){
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top-100
      },800);
    }
  });
});
