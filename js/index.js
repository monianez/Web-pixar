'use strict'

//Cuando hago CLICK en Header-btn hace una function
    //Header-nav le toggle la clase isActive

    const headerBtn = document.querySelector(`.Header-btn`)
    const headerNav = document.querySelector(`.Header-nav`)
    
    console.log( headerBtn )
    console.log( headerNav )

    headerBtn.addEventListener( `click` , ()=>

        headerNav.classList.toggle(`isActive`)

    )