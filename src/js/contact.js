import $ from 'jquery';

export const $form = $('.contact-form-container form');

var $formSubjectField = $('#contact-select-subject');
var $formMessageField = $('#contact-textarea-message');

export function fillContactForm (subjectIndex, message) {
  $formMessageField.val(message);
  $formSubjectField.val(subjectIndex).change();
}