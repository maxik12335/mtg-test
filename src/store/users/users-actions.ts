import { USERS_LANG } from "./users-constants"

export const updateUsers = (lang: string) => ({
  type: USERS_LANG,
  lang: lang
})