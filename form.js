document.getElementById("register").addEventListener("submit", function(event) {
  event.preventDefault();
      const form = this;  
     emailjs.sendForm("service_l4236zm", "template_nd5ygvy", form)
    .then(function() {
      return emailjs.sendForm("service_l4236zm", "template_v205gxp", form);
    })
    .then(function() {
       Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your data has been submitted successfully Please Check Your Email',
          confirmButtonText: 'OK',
          confirmButtonColor: '#1D4358',
          allowOutsideClick: false,
          allowEscapeKey: false,
         customClass: {
          popup: 'small-swal'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });
    })
});
