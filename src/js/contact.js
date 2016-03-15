import $ from 'jquery';

export const $form = $('.contact-form-container form');

var $formSubjectField = $('#contact-select-subject');
var $formMessageField = $('#contact-textarea-message');
var $formRegistrationNumberField = $('#contact-input-register');

export function fillContactForm (subjectIndex, message) {
  $formMessageField.val(message);
  $formSubjectField.val(subjectIndex).change();
}

$formSubjectField.on('change', function () {
  var selectedOption = $formSubjectField.find(':selected').text();

  if(selectedOption === 'Business') {
    $formRegistrationNumberField.parent().hide();
  } else {
    $formRegistrationNumberField.parent().show();
  }

});
