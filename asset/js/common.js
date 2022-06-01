
// Owl carusel

$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      stagePadding: 50,
      autoWidth: true,
   });

});

// forms

const input = document.querySelector(".form-label");
const output = document.querySelector(".for-error");

input.addEventListener("click", () => {

});

input.addEventListener("input", (e) => {
   const condition = e.target.value.length = 0 ? "Это обязательное поле" : "";
   output.textContent = condition;
});


// show/hide password

const controller = document.querySelectorAll('.password-control');

controller.forEach(control => {

   control.addEventListener('click', () => {

      const input = document.querySelector('.password-input');

      if (input.getAttribute('type') == 'password') {
         input.setAttribute('type', 'text');
         control.classList.add('view');

      } else {
         input.setAttribute('type', 'password');
         control.classList.remove('view');
      }
      return false;
                 
   });

});



// products__like 

const heart = document.querySelectorAll('.products__like svg');

heart.forEach(item => {
   item.addEventListener('click', () => {
      item.classList.toggle('active');
   });
});

