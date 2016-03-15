import $ from 'jquery';
import {fillContactForm, $form} from './contact';
import scrollTo from 'jquery.scrollto';


var $firstButton = $('.app-offer .first');
var $secondButton = $('.app-offer .second');
var $thirdButton = $('.app-offer .third');

const genClickHandler = ({index, message}) => {
  return function (e) {
    e.preventDefault();
    fillContactForm(index, message);
    setTimeout(() => {
      scrollTo($form, 300, {offset: -150});
      $form.find('input').first().focus();
    }, 150);
  };
}; 

$firstButton.on('click', genClickHandler({
  index: 1,
  message: `Hello,
I would like to order the diagnostics from the top offers for my rusty golf 3!
  `
}));

$secondButton.on('click', genClickHandler({
  index: 4,
  message: `Hello,
I would like to order a tire swap from the top offers for my rusty golf 3!
  `
}));

$thirdButton.on('click', genClickHandler({
  index: 4,
  message: `Hello,
I would like to order a gearbox echange from the top offers for my rusty golf 3!
  `
}));

