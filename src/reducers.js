const initialState = {
  search: ''
}

export const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SEARCH':
      return Object.assign({},state,{search: action.payload})
    default:
      return state
  }
}


