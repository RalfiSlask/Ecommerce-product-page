const thumbnails = document.querySelectorAll(".thumbnail");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const numberofitems = document.querySelector(".numberofitems");
const cartsection = document.querySelector(".cart-section");
const cartlogo = document.querySelector(".cart");
const addtocart = document.querySelector(".addtocart-text");
const numberincartlogo = document.querySelector(".numberincart-logo");
const modal_section = document.querySelector(".modal-section");
const close_modal_button = document.querySelector(".modal-close");
const lightbox = document.querySelector(".lightbox");
const buttons = document.querySelectorAll(".round-selector");
const slides = document.querySelectorAll(".slide");
const large_image = document.querySelector(".large-image img")

let shoesToAdd = 0;
let numberInCart = 0;
let slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
    numberofitems.innerHTML = `${shoesToAdd}`;
    openingModal();
    closingModal();
    modalCarousel();
    clickingOnAddToCart();
    setInterval(updateCartLogo, 0);
    clickingThumbnail();
    setInterval(isCartContentEmpty, 500);
    setInterval(updateNumberOfItems, 0);
    clickingPlusMinus();
    clickingOnCartLogo();
})

const clickingThumbnail = () => {
   thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", (e) => {
        thumbnails.forEach(thumb => {
            thumb.classList.remove("active-1");
            thumb.classList.remove("active-2");
            thumb.classList.remove("active-3");
            thumb.classList.remove("active-4");
        });  
        if(e.target.classList.contains("thumbnail-1")) {
            e.target.classList.add("active-1")
            large_image.src = "./images/image-product-1.jpg";
        } else if(e.target.classList.contains("thumbnail-2")) {
            e.target.classList.add("active-2")
            large_image.src = "./images/image-product-2.jpg";
        } else if(e.target.classList.contains("thumbnail-3")) {
            e.target.classList.add("active-3")
            large_image.src = "./images/image-product-3.jpg";
        } else if(e.target.classList.contains("thumbnail-4")) {
            e.target.classList.add("active-4")
            large_image.src = "./images/image-product-4.jpg";
        }
    }) 
   })
} 

/* Modal JS */

const openingModal = () => {
    large_image.onclick = () => {
        modal_section.classList.remove("nodisplay");
        lightbox.classList.remove("hidden");
        slides.forEach(slide => {
            slide.src = large_image.src
        })
    }
}

const closingModal = () => {
    close_modal_button.onclick = () => {
        modal_section.classList.add("nodisplay");
        lightbox.classList.add("hidden");
    }
}

const modalCarousel = () => {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = () => {
            if(buttons[i].classList.contains("previous")) {
                slideIndex--
            } else if(buttons[i].classList.contains("next")) {
                slideIndex++
            }
            if(slideIndex > slides.length) {
                slideIndex = 1;
            }
            if(slideIndex < 1) {
                slideIndex = slides.length;
            }
            for(let y = 0; y < slides.length; y++) {
                slides[y].classList.remove("active")
            }
            slides[slideIndex-1].classList.add("active");
        }
    }
}

const clickingPlusMinus = () => {
    minus.onclick = () => {
        if(shoesToAdd > 0) {
            shoesToAdd--;
        }
    }
    plus.onclick = () => {
        if(shoesToAdd < 8) {
            shoesToAdd++;
        }
    }
}

const clickingOnAddToCart = () => {
    addtocart.onclick = () => {
        if(shoesToAdd > 0) {
            numberInCart += shoesToAdd;
        }
    }
}

const updateCartLogo = () => {
    numberincartlogo.innerHTML = `${numberInCart}`;
    if(numberInCart == 0) {
        numberincartlogo.classList.add("hidden");
    } else {
        numberincartlogo.classList.remove("hidden");
    }
}

const isCartContentEmpty = () => {
    let totalprice = 125 * numberInCart;
    if(numberInCart == 0) {
        cartsection.innerHTML = 
        `<div class="cart-text">Cart</div>
        <div class="line"></div>
            <div class="cartempty">Your cart is empty</div>
        `
    } else if(numberInCart > 0) {
        cartsection.innerHTML = 
        ` <div class="cart-text">Cart</div>
        <div class="line"></div>
        <div class="cartpanel">
          <div class="cart-thumbnail"></div>
          <div class="cart-description-panel">
            <div class="cart-description-text">Fall Limited Edition Sneakers</div>
            <div class="prices-panel">
              <div class="numberandprice">$125.00 * ${numberInCart}</div>
              <div class="finalprice">$${totalprice}.00</div>
            </div>
          </div>
          <svg width="14" height="16" class="trashbin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
        </div>
        <button class="checkout">Checkout</button>`
    }
    let trash = document.querySelector(".trashbin");
    trash.onclick = () => {
        numberInCart = 0;
    }
} 

const updateNumberOfItems = () => {
    numberofitems.innerHTML = `${shoesToAdd}`
}

const clickingOnCartLogo = () => {
    cartlogo.onclick = () => {
        cartsection.classList.toggle("hidden");
    }
}

/* Mobile JS */

const sidebarlogo = document.querySelector(".sidebar-logo");
const sidebar = document.querySelector(".sidebar");
const closebutton = document.querySelector(".close");
const mainsection = document.querySelector(".main")
const mobile_cartlogo = document.querySelector(".mobile-cart");
const previous_mobile = document.querySelector(".previous-mobile");
const next_mobile = document.querySelector(".next-mobile");
const buttons_mobile = document.querySelectorAll(".round-selector-mobile");
const slides_mobile = document.querySelectorAll(".slide-m");

let slideIndexM = 1;

const clickingSidebarlogo = () => {
    sidebarlogo.onclick = () => {
        sidebar.classList.toggle("hidden");
        lightbox.classList.remove("hidden");
    }
   
}

const closingSidebar = () => {
    closebutton.onclick = () => {
        sidebar.classList.toggle("hidden");
        lightbox.classList.add("hidden");
    }
}

const clickingOnCartLogoMobile = () => {
    mobile_cartlogo.onclick = () => {
        cartsection.classList.toggle("hidden");
    }
}

const imageCarousel = () => {
    for(let i = 0; i < buttons_mobile.length; i++) {
        buttons_mobile[i].onclick = () => {
            if(buttons_mobile[i].classList.contains("previous-mobile")) {
                slideIndexM--
            } else if(buttons_mobile[i].classList.contains("next-mobile")) {
                slideIndexM++
            }
            if(slideIndexM > slides.length) {
                slideIndexM = 1;
            }
            if(slideIndexM < 1) {
                slideIndexM = slides.length;
            }
            console.log(slideIndexM)
            for(let y = 0; y < slides_mobile.length; y++) {
                console.log(slides_mobile[y])
                slides_mobile[y].classList.remove("active")
            }
            slides_mobile[slideIndexM-1].classList.add("active"); 
        }
    }
}

imageCarousel();
clickingOnCartLogoMobile();
clickingSidebarlogo();
closingSidebar();