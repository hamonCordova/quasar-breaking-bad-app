import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { CharactersState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const charactersModule: Module<CharactersState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default charactersModule;
