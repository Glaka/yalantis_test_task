import { combineReducers } from "redux";
import pictureReducer from "../reducers/pictures/reducer";

export const rootReducer = combineReducers({
    pictureReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
