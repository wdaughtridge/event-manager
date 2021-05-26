import { error } from './notifications';
const isValidDate = dateObj => !Number.isNaN(Date.parse(dateObj));

export const isEmptyObject = obj => Object.keys(obj).length === 0;

export const handleAjaxError = (err) => {
  error('Something went wrong');
  console.warn(err);
};

export const validateEvent = (event) => {
  const errors = {};

  if (event.event_type === '') {
    errors.event_type = 'You must enter an event type';
  }

  if (event.event_date === '') {
    errors.event_date = 'You must enter a valid date';
  }

  if (event.title === '') {
    errors.title = 'You must enter a title';
  }

  if (event.speaker === '') {
    errors.speaker = 'You must enter at least one speaker';
  }

  if (event.host === '') {
    errors.host = 'You must enter at least one host';
  }

  if (!isValidDate(event.event_date)) {
    errors.event_date = 'You must enter a valid date';
  }

  return errors;
}