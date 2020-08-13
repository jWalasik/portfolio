import React from 'react'
import i18n from 'i18next'
import { I18nextProvider } from 'react-i18next'

import translationEN from './locales/en/translation.json'
import translationPL from './locales/pl/translation.json'
import aboutEN from './locales/en/about.json'
import aboutPL from './locales/pl/about.json'
import navEN from './locales/en/nav.json'
import navPL from './locales/pl/nav.json'
import contactEN from './locales/en/contact.json'
import contactPL from './locales/pl/contact.json'
import projectsEN from './locales/en/projects.json'
import projectsPL from './locales/pl/projects.json'
import stackEN from './locales/en/stack.json'
import stackPL from './locales/pl/stack.json'


const resources = {
  en: {
    translation: translationEN,
    about: aboutEN,
    contact: contactEN,
    nav: navEN,
    projects: projectsEN,
    stack: stackEN
  },
  pl: {
    translation: translationPL,
    about: aboutPL,
    contact: contactPL,
    nav: navPL,
    projects: projectsPL,
    stack: stackPL
  }
}
  
i18n.init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
})

export const i18nProvider = ({children}: {children: React.ReactNode}) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
)