var music = [

    'Alone Again by The Weekend',
        'Cherry Wine by grentperez',
        'untitled by King Green',
        'Hollywood by Kota the Friend ',
        'Kiss U Right Now by Duckwrth',
        'Mystery Lady by Masego & Don Toliver',
        'Honeymoon by Rob Curly',
        'Sometimes by Katori Walker & Elijah James'  
  
]

function newMusic(){
var randomNumber = Math.floor(Math.random() * (music.length));
document.getElementById('musicDisplay').innerHTML = music[randomNumber];
}

// slideshow stuff 

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

 function check(){
    var repImage = '<iframe src="';
     var testInput = document.getElementById('ans').value
 
     if(testInput == "rap")
     {
             document.getElementById('playlist').innerHTML = repImage += 'https://open.spotify.com/embed/playlist/2ZYrDQHMQxzoYavtCW1Yxz" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"">'
     }
     else if(testInput == "rnb")
     {
             document.getElementById('playlist').innerHTML = repImage += 'https://open.spotify.com/embed/playlist/05NMSdzULAtTBpcUa3Dduu" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"">';
     }
     else if(testInput == "hiphop")
     {
             document.getElementById('playlist').innerHTML = repImage += 'https://open.spotify.com/embed/playlist/2wbBsvrO7eRgVTpSYGxzx8" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"">';
             
     }
 
 }