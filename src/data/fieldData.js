import { IconPhone, IconUser, IconLock } from 'styles/icons';

export const fieldData = {
  name: {
    title:
      'First and last name(optional) must contain only letters and be at least 2 characters long',
    pattern:
      '^\\s*[A-ZА-Я\\u0406ЇЄa-zа-яіїє]{2,}(\\s+[A-ZА-Я\\u0406ЇЄa-zа-яіїє]{2,})?\\s*$',
    icon: IconUser,
  },

  number: {
    title: 'Must be 10 digits long and may contain spaces and hyphens',
    pattern: '^([\\s-]*\\d[\\s-]*){10}$',
    icon: IconPhone,
  },

  password: {
    title: 'Must be at least 7 characters long',
    pattern: '^.{7,}$',
    icon: IconLock,
  },
};
