function Carousel (config) {
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container

    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens

    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev

    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext
 
    var _this = this
    var _currentSlide = 0

    init()

    function init(){
        var _show = _this.container.querySelectorAll('.show')
        
        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')


            

        })


        

        
        
         _this.itens[0].classList.add('show')
         _this.btnNext.removeAttribute('style')
         _this.btnPrev.removeAttribute('style')

         addListeners()

    }

    function addListeners() {
        _this.btnNext.addEventListener('click', showNextSlide)
        _this.btnPrev.addEventListener('click', showPrevSlide)
    }

    function showNextSlide() {
        _currentSlide++
        showSlide()
    }

    function showPrevSlide() {
        _currentSlide--
        showSlide()
    }

    function showSlide() {

        var qtd = _this.itens.length
        var slide = _currentSlide % qtd
        slide = Math.abs(slide)


        _this.container.querySelector('.show').classList.remove('show')

        _this.itens[slide].classList.add('show')



   
        
        
    }

    showSlide()
    var $empresarial1 = document.getElementById('empresarial1')
    var $tributario1 = document.getElementById('tributario1')
    var $trabalhista1 = document.getElementById('trabalhista1')
    var $comercial1 = document.getElementById('comercial1')   
    var $societario1 = document.getElementById('societario1')
    var $penal1 = document.getElementById('penal1')
    




    var $empresarial = document.getElementById('empresarial')
    var $empresarial2 = document.getElementById('empresarial2')
    
    var $tributario = document.getElementById('tributario')
    var $tributario2 = document.getElementById('tributario2')

    var $trabalhista = document.getElementById('trabalhista')
    var $trabalhista2 = document.getElementById('trabalhista2')

    var $comercial = document.getElementById('comercial')
    var $comercial2 = document.getElementById('comercial2')

    var $societario = document.getElementById('societario')
    var $societario2 = document.getElementById('societario2')

    var $penal = document.getElementById('penal')
    var $penal2 = document.getElementById('penal2')

    var $consumerista = document.getElementById('consumerista')
    var $consumerista2 = document.getElementById('consumerista2')

    var $civil = document.getElementById('civil')
    var $civil2 = document.getElementById('civil2')

    var $bancario = document.getElementById('bancario')
    var $bancario2 = document.getElementById('bancario2')

    var $contratual = document.getElementById('contratual')
    var $contratual2 = document.getElementById('contratual2')
    

    var $areas = document.getElementById('areas')


    function resetSlide(){
        var _show = $areas.querySelector('.show')
        _show.classList.remove('show')
        
        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('.show')
        })
    }
    
    function skrll () {
        if (screen.width<1024)
        window.scrollTo(0, 885)
        else {
            window.scrollTo(0, 250)
        }
    }
    
    
    
    
    
    $tributario.addEventListener('click', function(){
        
   
        resetSlide()

        $tributario2.classList.add('show')


        skrll()


    })


    $empresarial.addEventListener('click', function(){
        resetSlide()
        
        $empresarial2.classList.add('show')

        skrll()

    })

    $trabalhista.addEventListener('click', function(){
        resetSlide()

        $trabalhista2.classList.add('show')

        skrll()  
    })


    $comercial.addEventListener('click', function(){
        resetSlide()

        $comercial2.classList.add('show')

        skrll() 
    })


    $comercial.addEventListener('click', function(){
        resetSlide()

        $comercial2.classList.add('show')

        skrll()  
    })


    $societario.addEventListener('click', function(){
        resetSlide()

        $societario2.classList.add('show')

        skrll() 
    })


    $penal.addEventListener('click', function(){
        resetSlide()

        $penal2.classList.add('show')

        skrll()  
    })


    $consumerista.addEventListener('click', function(){
        resetSlide()

        $consumerista2.classList.add('show')

        skrll()  
    })


    $civil.addEventListener('click', function(){
        resetSlide()

        $civil2.classList.add('show')

        skrll()  
    })

    $bancario.addEventListener('click', function(){
        resetSlide()

        $bancario2.classList.add('show')

        skrll()  
    })

    $contratual.addEventListener('click', function(){
        resetSlide()

        $contratual2.classList.add('show')

        skrll()  
    })
  


  

    
    
    

    

    

    
}