"use strict";

(function (factory) {
  typeof define === 'function' && define.amd ? define('app', factory) : factory();
})(function () {
  'use strict';

  document.addEventListener("DOMContentLoaded", function () {
    menuHandler();
    $('.carousel').slick();
  }); // menu handler

  var menuHandler = function menuHandler() {
    var menuButton = document.querySelector('.mob-button');
    var menu = document.querySelector('nav ul');
    menuButton.addEventListener('click', function () {
      menuButton.classList.toggle('open');
      menu.classList.toggle('open');
    });
  };
});