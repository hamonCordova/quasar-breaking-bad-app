import Character from 'src/models/character';

export interface CharactersState {
  charactersList: Character[] | null;
  selectedCharacter: Character | null;
}

const state: CharactersState = {
  charactersList: null,
  selectedCharacter: null
};

export default state;
