


// carrito
'use strict';

$(document).ready(function () {

    
    $('#carrito').smartCart({
        cartItemTemplate: '<div class="d-flex"><div><img class="img-fluid" src="{product_image}" /></div><div><h4 class="list-group-item-heading">{product_name}</h4></div></div>'
    });

});







//Plugin Carrusel
$(document).ready(function () {

  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    responsive: {
      stagePadding: 40,
      items: 1, //vista de celular uno solo
      doots: false
    },
    768: {
      items: 2
    },
    992: {
      items: 3,
      doots: true
    },
    1200: {
      items: 5
    }
  });

});


//plugin Whatsapp
$(function () {
  $('.floating-wpp').floatingWhatsApp({
    phone: '1123894930',
    popupMessage: 'Mandanos un WhatsApp',
    showPopup: true,
    message: 'Hola, me gustaria comunicarme con ustedes',
    headerTitle: 'la ola'
  });
});




 // validacion del formulario 
(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')


  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()




