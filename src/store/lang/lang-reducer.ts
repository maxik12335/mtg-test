import { SELECT_LANG } from "./lang-constants"

interface ILangAction {
  type: string
  lang: string
}

export const lang = (state = "ru", action: ILangAction) => {
  switch (action.type) {
    case SELECT_LANG: {
      return action.lang === "ru" ? "en" : "ru"
    }

    default: {
      return state
    }
  }
}