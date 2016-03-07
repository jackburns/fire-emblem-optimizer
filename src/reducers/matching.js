const initialState = {
  displayMatching: false
};

export function matching(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_MATCHING':
      return {
        displayMatching: !state.displayMatching
      };
    default:
      return state;
  }
}
