import $ from 'jquery';
import scrollTo from 'jquery.scrollto';

var callToActionButton = $('.app-header .btn-lg.btn-primary');

callToActionButton.on('click', () => scrollTo($('#about'), 300, {offset: -50}));