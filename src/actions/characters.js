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
