import { createAction, handleActions } from 'redux-actions';

const CHANGENUMBER = 'test/change_number';
const CHECKSERVER = 'test/check_server';

export const change_number = createAction(CHANGENUMBER);
export const check_server = createAction(CHECKSERVER);

const initialState = {
   num : 0,
   server : ""
};

export default handleActions({
   [CHANGENUMBER] : (state, data) => {
      let num = state.num;

      if(data.payload.bool === true) {
         num = num + 1;

      } else if(data.payload.bool === false) {
         num = num - 1;
      }

      return {
        ...state,
        num : num
      };
    },

    [CHECKSERVER] : (state, data) => {
      let server = ""

      if(data.payload.status !== false) {
         server = data.payload.status
      }

      return {
        ...state,
        server : server
      };
    },

}, initialState);