$('#submit-form').submit(function (e) {
  e.preventDefault();
  var form = $('#submit-form')[0]
  if (form.promoCode.value === "PROSQUAT") {
    alert_and_email(form.name.value, form.email.value);
  } else {
      if (form.promoCode.value !== "") {
        alert("ERROR: BAD PROMO CODE PROVIDED.\nDROP TABLE SQUATS;\n<TERMINATING SESSION>");
      } else {
        alert("ERROR: NO PROMO CODE PROVIDED.\nDROP TABLE SQUATS;\n<TERMINATING SESSION>");
      }
        window.location = "../error/index.html";
  }

  return false;
});


function alert_and_email (name, email) {
  var firstName = name.split(' ')[0]
  $('#response').text("Welcome to Gary's 6-week Prosquat course, " + firstName + "! You'll be recieving more information via email very soon.");
  return false;
}
