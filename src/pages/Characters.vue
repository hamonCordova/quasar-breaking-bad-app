<template>
  <section class="c-characters">
    <div class="row" v-if="!charactersList">
      <div class="col-12 col-sm-6 col-md-3 q-mt-lg q-pa-md">
        <q-card flat>
          <q-skeleton height="350px" square />
          <q-card-section>
            <q-skeleton type="text" class="text-subtitle1" />
            <q-skeleton type="text" width="50%" class="text-subtitle1" />
            <q-skeleton type="text" class="text-caption" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6 col-md-3 q-mt-lg q-pa-md">
        <q-card flat>
          <q-skeleton height="350px" square />
          <q-card-section>
            <q-skeleton type="text" class="text-subtitle1" />
            <q-skeleton type="text" width="50%" class="text-subtitle1" />
            <q-skeleton type="text" class="text-caption" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6 col-md-3 q-mt-lg q-pa-md">
        <q-card flat>
          <q-skeleton height="350px" square />
          <q-card-section>
            <q-skeleton type="text" class="text-subtitle1" />
            <q-skeleton type="text" width="50%" class="text-subtitle1" />
            <q-skeleton type="text" class="text-caption" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6 col-md-3 q-mt-lg q-pa-md">
        <q-card flat>
          <q-skeleton height="350px" square />
          <q-card-section>
            <q-skeleton type="text" class="text-subtitle1" />
            <q-skeleton type="text" width="50%" class="text-subtitle1" />
            <q-skeleton type="text" class="text-caption" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row" v-if="charactersList">
      <div
        v-for="character of charactersList"
        class="col-12 col-sm-6 col-md-3 q-mt-lg q-pa-md"
      >
        <app-character-card :character="character"></app-character-card>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AppCharacterCard from 'components/AppCharacterCard.vue';
import { Vue, Component } from 'vue-property-decorator';
import { Action, State } from 'app/node_modules/vuex-class';
import Character from 'src/models/character';

const namespace = 'charactersModule';

@Component({
  components: {
    AppCharacterCard
  }
})
export default class Characters extends Vue {
  @Action('fetchCharacters', { namespace }) fetchCharacters: any;

  @State('charactersList', { namespace }) charactersList:
    | Character[]
    | undefined;

  mounted() {
    if (!this.charactersList || this.charactersList.length === 0) {
      this.fetchCharacters();
    } else {
    }
  }
}
</script>

<style scoped lang="scss">
$component-name: 'c-characters';

.#{$component-name} {
}
</style>
