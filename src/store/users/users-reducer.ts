import { USERS_LANG } from "./users-constants"
import dataJson from "../../data.json"

interface IUsersAction {
  type: string
  lang: string
}

export const users = (state = [], action: IUsersAction) => {
  switch (action.type) {
    case USERS_LANG: {
      if(action.lang === "ru") {
        return Object.values(dataJson.ru)
      }
    
      if(action.lang === "en") {
        return Object.values(dataJson.en)
      }
    }

    default: {
      return state
    }
  }
}