const dD = document.querySelector(".d-d")
const dDArrow = document.querySelector(".d-d-arrow")
const wrapper3Drop = document.querySelector(".wrapper3-drop")
const getInvolved = document.querySelector(".get-involved")
const logoWrapper3 = document.querySelector(".logo-wrapper3")
const wrapper31 = document.querySelector(".wrapper3-menu-content") 
const closeAll = document.querySelector(".close-all")

dD.addEventListener("click",()=>{
    dDArrow.classList.toggle("show")
})

getInvolved.addEventListener("click",()=>{
    wrapper3Drop.classList.toggle("wrapper3-show") 
    // wrapper3Drop.forEach(item=>{
    //     item.classList.toggle('wrapper3-show')
    // })
})

// logoWrapper3.addEventListener("click",()=>{
//     logoWrapper3.classList.toggle("menu-show")
// })

logoWrapper3.addEventListener("click",()=>{
    logoWrapper3.classList.toggle("menu-show")
    wrapper31.classList.toggle("wrapper3-menu-content-show")
})
closeAll.addEventListener('click',()=>{
    logoWrapper3.classList.toggle("menu-show")
    wrapper31.classList.toggle("wrapper3-menu-content-show")
})