// js code for hero image change

 const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    function showSlide(index) {
      
      slides.forEach(slide => slide.style.display = 'none');

      
      slides[index].style.display = 'block';
    }

    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    }

    
    showSlide(currentSlideIndex);

    
    setInterval(nextSlide, 5000);


// js code for Dna section slider

var currentImageIndex = 1;
    var totalImages = 3; 

    function changeImage(step) {
        currentImageIndex += step;

        
        if (currentImageIndex < 1) {
            currentImageIndex = totalImages;
        } else if (currentImageIndex > totalImages) {
            currentImageIndex = 1;
        }

        var imageElement = document.getElementById('slider-image');
        imageElement.src = 'images/DNA ' + currentImageIndex + '.jpg';
        imageElement.alt = 'Images/DNA ' + currentImageIndex;
    }

    

    document.querySelector('.menu-icon').addEventListener('click', function () {
      var navList = document.querySelector('ul');
      navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'block' : 'none';
    });

    
  