(function (){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    menujs()


  

    var carouselImgs = new Carousel ({
        container: '.especialidades',
        itens: '.card',
        btnPrev: '.prev',
        btnNext: '.next'

    })



    var especAtuação = new Carousel ({
        container: '.areas',
        itens: '.card2',
        btnNext: '.prev2',
        btnPrev: '.next2'
    })


    var escopo = new Carousel ({
        container: '.escopo',
        itens: '.card3',
        btnNext: '.prev3',
        btnPrev: '.next3'
    })





   

    





    


    

})()