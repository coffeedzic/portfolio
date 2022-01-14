import { createStore } from 'redux'

export const setActiveMenu = menu => (
  {
    type: 'SET_ACTIVE_MENU',
    payload: menu
  }
)

const initialState = {
  activeMenu: 'home'
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_MENU':
      return {
        ...state,
        activeMenu: action.payload
      }
    default:
      return state
  }
}

const store = createStore(settings)

export default store