$(document).ready(function () {

  // Side mini panel
  $('span.hamburger_menu').click(function () {
    $('.superversion_layout').toggleClass('halfversion');
  });

  //notification
  $('span.notification').click(function () {
    $('.notification_wrapper').addClass('panelactive');
    $('body').addClass('bodypanelactive');
  });
  $('.notifi_osff').click(function () {
    $('.notification_wrapper').removeClass('panelactive');
    $('body').removeClass('bodypanelactive');
  });

  //sideSubmenu
  $('.multi_submenu a').click(function () {
    $('ul.submenu_bar').slideToggle();
    $('.multi_submenu').toggleClass('openActive');
  });

  //PasswordToggle
  $('.passwordtogglefun').click(function () {
    $(this).toggleClass('openpass_panel');
    $('.atlas_passwordform').slideToggle();
  });

  //additional information
  $('.addtional_injs').click(function () {
    $('.addtional_dailog').addClass('dialog_open');
  });
  $('.addtional_dailog span').click(function () {
    $('.addtional_dailog').removeClass('dialog_open');
  });

  //Mob_menu
  $('.mob_burger').click(function () {
    $('.myaside').addClass('mob_dialog_open');
  });
  $('.mob_hamburger_close').click(function () {
    $('.myaside').removeClass('mob_dialog_open');
  });


  //Patient accordion
  $('.atlas_acoordion_head').click(function () {
    $(this).closest('.atlas_accordion_panel_wrapper').toggleClass('open_panel');
  });

  // datapicker
  $('.input-group.date').datepicker({ format: "mm/dd/yyyy" });
});

function boosterFollow() {
  var booster1 = document.getElementById("booster1");
  var booster2 = document.getElementById("booster2");
  var boostermain = document.getElementById("boosterup");
  if (boostermain.value === 'followbooster') {
    document.getElementById("booster1").style.display = "block";
    document.getElementById("booster2").style.display = "none";
    document.getElementById("focus_2").style.display = "block";
    document.getElementById("focus_1").style.display = "none";
  }
  else if (boostermain.value === 'tripnew') {
    document.getElementById("booster2").style.display = "block";
    document.getElementById("booster1").style.display = "none";
    document.getElementById("focus_1").style.display = "block";
    document.getElementById("focus_2").style.display = "none";
  }
}

function conpasswordFunction() {
  var x = document.getElementById("conPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function crepasswordFunction() {
  var x = document.getElementById("crePassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function oldpasswordFunction() {
  var x = document.getElementById("oldPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// super admin dashboard start 

$('.multi_submenu1 a').click(function () {
$('ul.submenu_bar1').slideToggle();
$('.multi_submenu1').toggleClass('openActive');
});

$('.multi_submenu2 a').click(function () {
$('ul.submenu_bar2').slideToggle();
$('.multi_submenu2').toggleClass('openActive');
});


$('.multi_submenu3 a').click(function () {
$('ul.submenu_bar3').slideToggle();
$('.multi_submenu3').toggleClass('openActive');
});

$('.multi_submenu4 a').click(function () {
$('ul.submenu_bar4').slideToggle();
$('.multi_submenu4').toggleClass('openActive');
});


$('.multi_submenu5 a').click(function () {
$('ul.submenu_bar5').slideToggle();
$('.multi_submenu5').toggleClass('openActive');
});

// super admin dashboard end
