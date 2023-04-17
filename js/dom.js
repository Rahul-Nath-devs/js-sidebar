let menu = document.querySelector(`.menu_btn`)
let sidebar= document.querySelector(`.sidebar`)

function openSidebar(){
    console.log(sidebar.classList.add(`active`));
}

menu.addEventListener(`click`, openSidebar)
// open sidebar section ends



// Close sidebar section

let cancel= document.querySelector(`.cancel_btn`)

function closeSidebar(){
    console.log(sidebar.classList.remove(`active`));
}

cancel.addEventListener(`click` , closeSidebar)