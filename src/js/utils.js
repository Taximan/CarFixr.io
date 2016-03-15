import $ from 'jquery';
import scrollTo from 'jquery.scrollto';

export function navifiy (selector) {
  $(selector).on('click', function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    scrollTo(target, 300, {offset: -50});
  });
}