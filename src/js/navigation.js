import $ from 'jquery';
import scrollTo from 'jquery.scrollto';

var targets = $('.nav a').on('click', function (e) {
  e.preventDefault();
  var target = $($(this).attr('href'));
  scrollTo(target, 300);
});
