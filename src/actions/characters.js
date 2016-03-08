export function selectCharacter(id) {
  return {
    type: 'SELECT_CHARACTER',
    id,
  };
}

export function loadCharacters(characters) {
  return {
    type: 'LOAD_CHARACTERS',
    characters,
  };
}

export function resetSelected(item) {
  return {
    type: 'RESET_SELECTED',
    item
  };
}
