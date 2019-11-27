"use strict";

(function (factory) {
  typeof define === 'function' && define.amd ? define('app', factory) : factory();
})(function () {
  'use strict';

  document.addEventListener("DOMContentLoaded", function () {
    menuHandler();
    $('.carousel').slick();
    submittedForm();
  }); // menu handler

  var menuHandler = function menuHandler() {
    var menuButton = document.querySelector('.mob-button');
    var menu = document.querySelector('nav ul');
    menuButton.addEventListener('click', function () {
      menuButton.classList.toggle('open');
      menu.classList.toggle('open');
    });
  };

  var submittedForm = function submittedForm() {
    var data = {};
    var formAlert = document.querySelector('.form-alert');
    var formInputs = document.querySelectorAll('.row input');
    var submitted = document.querySelector('.submit');
    submitted.addEventListener('click', function () {
      formInputs.forEach(function (input) {
        var name = input.name;
        var value = input.value;

        if (value !== '') {
          data[name] = value;
          input.classList.remove('invalid');
          formAlert.style = "background: #2ecc71";
          formAlert.innerHTML = "<span>Successful send!</span>";
        } else {
          input.classList.add('invalid');
          formAlert.style = "background: #e74c3c";
          formAlert.innerHTML = "<span>Invalid values!</span>";
        }
      });
      console.log(data);
      formAlert.classList.add('splash');
      setTimeout(function () {
        return formAlert.classList.remove('splash');
      }, 3000);
    });
  };
});