import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { CurrentUser } from "@/redux/currentUser/currentUserState"

export const updateCurrentUserReducer: CaseReducer<
  CurrentUser,
  PayloadAction<CurrentUser>
> = (state, action) => {
  state = action.payload
  return state
}
