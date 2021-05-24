// let animado = document.querySelectorAll(".animado");



// function mostrarScroll() {

//     let scrollTop = document.documentElement.scrollTop
    


//     for(let i = 0; i < animado.length; i++ ){

//     console.log(scrollTop)


//         let altura = animado[i].offsetTop

//         console.log(altura)

//         if(altura - 200 < scrollTop){

//             animado[i].style.opacity = 1

//         }

//     }

// }

// window.addEventListener('scroll', mostrarScroll());



jQuery(document).ready(function(){


    setInterval(function() {
      if(jQuery('.s1').hasClass('fp-completely')){   
        console.log(1)

    }
      if(jQuery('.s2').hasClass('fp-completely')){
        console.log(2)
         
        let anim = document.querySelectorAll("#uno")
      
        for(let i = 0; i < anim.length; i++){
            anim[i].style.opacity = 1
            anim[i].classList.add("mostrarArriba")
        }


    let animado = document.querySelectorAll("#uno-dos")
      
      for(let i = 0; i < animado.length; i++){
          animado[i].style.opacity = 1
          animado[i].classList.add("mostrarAbajo")
      }

    let titulo = document.getElementById("titulo")  

        titulo.style.opacity = 1
        titulo.classList.add("mostarTitulo")

      }
      if(jQuery('.s3').hasClass('fp-completely')){
        
        let titulo = document.getElementById("titulo2")  
        titulo.style.opacity = 1
        titulo.classList.add("mostarTitulo")

        let anim = document.querySelectorAll("#card")
      
      for(let i = 0; i < anim.length; i++){
          anim[i].classList.add("mostraCard")
      }


      }

      if(jQuery('.s4').hasClass('fp-completely')){
        
        let titulo = document.getElementById("titulo3")  
        titulo.style.opacity = 1
        titulo.classList.add("mostarTitulo")

        let tit = document.getElementById("titulo3-1")  
        tit.style.opacity = 1
        tit.classList.add("mostrarSub")


        
        let anim = document.querySelectorAll("#card-items1")
      
      for(let i = 0; i < anim.length; i++){
          anim[i].classList.add("mostraCard")
      }

        

      }

      if(jQuery('.s5').hasClass('fp-completely')){


        let tit = document.getElementById("titulo4")  
        tit.style.opacity = 1
        tit.classList.add("mostrarSub")

        let anim = document.querySelectorAll("#card-items2")
      
      for(let i = 0; i < anim.length; i++){
          anim[i].classList.add("mostraCard")
      }
      }

      if(jQuery('.s6').hasClass('fp-completely')){
        

        let tit = document.getElementById("titulo5")  
        tit.style.opacity = 1
        tit.classList.add("mostrarSub")

        let anim = document.querySelectorAll("#card-items3")
      
      for(let i = 0; i < anim.length; i++){
          anim[i].style.opacity = 1
          anim[i].classList.add("mostrarArriba")
      }


      }

      if(jQuery('.s7').hasClass('fp-completely')){
        

        let titulo = document.getElementById("tituloContact")  
        titulo.style.opacity = 1
        titulo.classList.add("mostarTitulo")

        let tit = document.getElementById("tituloCon")  
        tit.style.opacity = 1
        tit.classList.add("mostrarSub")


        let top = document.getElementById("topConctact")  
        top.style.opacity = 1
        top.classList.add("mostrarAbajo")

        let bottom = document.getElementById("bottomContact")  
        bottom.style.opacity = 1
        bottom.classList.add("mostrarArriba")

      }
    }, 500);
});


window.onload = function(){

    setTimeout(() => {
        var contenedor = document.getElementById('contendor_carga')
        
        contenedor.style.visibility = 'hidden'
        contenedor.style.opacity = '0'

    }, 3000)



}