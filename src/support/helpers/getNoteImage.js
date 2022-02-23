import i18next from 'i18next';
import { notesImages_es } from '../constants/supportConcepts_es';
import { notesImages_en } from '../constants/supportConcepts_en';

export const getNoteImage = index => {
  const images = i18next.language === 'en' ? notesImages_en : notesImages_es;
  const noteObject = images.filter(note => index === note.index);

  return noteObject[0].src;
};
