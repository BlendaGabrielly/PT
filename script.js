var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true, // Cambio de 'loopFillGroupwithBlank' a 'loopFillGroupWithBlank'
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
function Enviar() {
    (function () {
        emailjs.init("6z5sBPVmDCXrqxT21");
    })();
    var serviceID = "service_ghcog6a";
    var templateID = "template_ga78fb9";
  
    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('Obrigado, ' + params['sendername'] + '! Sua mensagem foi enviada.');
        })
        .catch(err => {
            console.error('Erro ao enviar e-mail:', err);
        });
  }


  