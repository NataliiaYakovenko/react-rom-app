import CONSTANTS from "../constants"

const {ACTIONS} = CONSTANTS


function registrationReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INPUT_CHENGE: {
      const {payload:{value,name}} = action
      return {
        ...state,
        [name]: value
      }
    }
    default: return state
  }
}

export default registrationReducer