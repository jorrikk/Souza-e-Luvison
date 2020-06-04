(function (){
    

    




      var $circulos = document.getElementById('circulos')
      var $circulo = document.querySelectorAll('.circulo')
      var $circulo1 = document.getElementById('1')
      var $btnPrev = document.querySelector('.next')
      var $btnNext = document.querySelector('.prev')

        var _currentSlide = 0 
      
      
      function initi(){
          $circulo1.classList.add('current')

          
      }

      function addListeners() {
        $btnNext.addEventListener('click', showNextSlide)
        $btnPrev.addEventListener('click', showPrevSlide)
    }

    addListeners()

      function showNextSlide() {
        _currentSlide++
        showSlide()
    }

    function showPrevSlide() {
        _currentSlide--
        showSlide()
    }
    
    
    function showSlide() {

        var qtd = 3
        var slide = _currentSlide % qtd
        slide = Math.abs(slide)


        $circulos.querySelector('.current').classList.remove('current')

        $circulo[slide].classList.add('current')

      
    }

    initi()
      



    

})()