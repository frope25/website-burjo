// Hamburger-menu button 
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});


// Serach button
const navbarSrc = document.querySelector(".search-form")
const navbarSrcBox = document.querySelector("#search-box")

document.querySelector("#search-btn").onclick = (e) => {
  navbarSrc.classList.toggle('active')
  navbarSrcBox.focus()
  e.preventDefault()
}


const search = document.querySelector('#search-btn')

document.addEventListener('click', function (e) {
  if (!search.contains(e.target) && !navbarSrc.contains(e.target)) {
    navbarSrc.classList.remove('active')
  }
})


// Shopping Cart
const navbarShop = document.querySelector('.shopping-cart')

document.querySelector('#shopping-cart-btn').onclick = (e) => {
  navbarShop.classList.toggle('active')
  e.preventDefault()
}

const shopping = document.querySelector('#shopping-cart-btn')

document.addEventListener('click', function (e) {
  if (!shopping.contains(e.target) && !navbarShop.contains(e.target)) {
    navbarShop.classList.remove('active')
  }
})


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal')
const itemDetailBtns = document.querySelectorAll('.item-detail-btn')

itemDetailBtns.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex'
    e.preventDefault()
  }

})


// modal box Close
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none'
  e.preventDefault()
}

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none'
  }
}