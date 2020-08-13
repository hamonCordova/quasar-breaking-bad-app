import { CharactersState } from 'src/store/characters/state';
import Character from 'src/models/character';

export default {
  getCharacters(state: CharactersState): Character[] | null {
    return state.charactersList;
  },
  getSelectedCharacter(state: CharactersState) {
    return state.selectedCharacter;
  }
};
