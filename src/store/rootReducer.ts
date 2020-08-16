import { combineReducers } from "redux";
import pictureReducer from "../reducers/pictures/reducer";
import userReducer from "../reducers/users/reducer";

export const rootReducer = combineReducers({
    pictureReducer,
    userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
