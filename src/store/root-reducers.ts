import { combineReducers } from "redux"

import { users } from "./users/users-reducer"
import { lang } from "./lang/lang-reducer"

export const rootReducer = combineReducers({
  users: users,
  lang: lang
})