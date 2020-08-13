import { ActionContext } from 'vuex';
import { CharactersState } from 'src/store/characters/state';
import { axiosInstance } from 'boot/axios';

export default {
  fetchCharacters(store: ActionContext<CharactersState, any>) {
    return axiosInstance.get('/characters').then(res => {
      if (res && res.data) {
        console.warn(res.data);
        store.commit('setCharacters', res.data);
      }
    });
  }
};
