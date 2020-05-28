(function (){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var $btnMenu = document.querySelector('.btn-js')

    var $btnMenu2 = document.querySelector('.btn-js2')
    
    var $menu_js = document.querySelector('.menu-showed')


    var $menu = document.querySelector('.menu')


    var $hmbgr_menu = document.querySelector('.menu-js')
    
    
    
    $btnMenu.addEventListener('click', function(e){
        togglehidden(e.target)

        
        
        
    })

    function togglehidden(){
        $menu_js.classList.toggle('hidden')
    }
    

    
    window.addEventListener('scroll', function(){
      scrollcheck()  
    })
    
    function scrollcheck(){
       var windowTop = window.pageYOffset 
       if (windowTop < 200) {
           $hmbgr_menu.classList.add('js-hidden')
           $menu_js.classList.add('hidden')
        }   else {
               $hmbgr_menu.classList.remove('js-hidden')
           }
       
    }


    var caroulImgs = new Carousel ({
        container: '.especialidades',
        itens: '.card',
        btnPrev: '.prev',
        btnNext: '.next'

    })





    


    

})()