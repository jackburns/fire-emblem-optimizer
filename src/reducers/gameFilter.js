const initialState = {
  gameFilter: 'relevation'
};

export function gameFilter(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_GAME':
      return {
        ...state, {
          gameFilter: action.text
        }
      };

    default:
      return {
        state
      }
  }
}
