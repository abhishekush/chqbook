import { SAVE_EVENT } from "../actions/types";

const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_EVENT:
      return { ...state, list: [...action.payload] };
    default:
      return state;
  }
};
