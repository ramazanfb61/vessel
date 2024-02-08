import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  tr: {
    message: {
      hello: 'Merhaba'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'tr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,
})