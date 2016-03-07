const initialState = {
  gameFilter: 'revelation'
};

export function gameFilter(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_GAME':
      return {
        gameFilter: action.text
      };

    default:
      return {
        state
      }
  }
}
