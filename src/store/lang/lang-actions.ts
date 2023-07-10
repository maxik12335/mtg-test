import { SELECT_LANG } from "./lang-constants"

export const updateLang = (lang: string) => ({
  type: SELECT_LANG,
  lang: lang
})