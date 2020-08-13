<template>
  <q-card class="c-character-card">
    <img class="c-character-card__image" :src="character.img" />
    <q-card-section>
      <div class="text-h5 q-ml-xs">
        {{ character.name }} ({{ character.nickname }})
      </div>
      <div class="c-character-card__common-badges">
        <q-badge color="blue q-ml-xs" text-color="black">
          <q-icon name="cake" size="14px" class="" />
          {{ character.birthday }}
        </q-badge>
        <q-badge color="blue q-ml-xs" text-color="black">
          <q-icon name="psychology" size="14px" class="" />
          {{ character.status }}
        </q-badge>
        <q-badge color="blue q-ml-xs" text-color="black">
          <q-icon name="emoji_people" size="14px" class="" />
          {{ character.portrayed }}
        </q-badge>
        <q-badge color="blue q-ml-xs" text-color="black">
          <q-icon name="movie_creation" size="14px" class="" />
          {{ character.category }}
        </q-badge>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <!--Occupations-->
      <div
        class="c-character-card__occupation "
        v-if="character.occupation && character.occupation.length > 0"
      >
        <span class="text-bold block q-ml-xs">Occupations</span>
        <q-badge
          v-for="(occupation, index) in character.occupation"
          :key="index"
          color="orange"
          text-color="black"
          :label="occupation"
          class="q-ml-xs"
        />
      </div>

      <!--Breaking Bad Appearance-->
      <div
        class="c-character-card__occupation q-mt-sm"
        v-if="character.appearance && character.appearance.length > 0"
      >
        <span class="text-bold block q-ml-xs">Breaking Bad Appearance</span>
        <q-badge
          v-for="(appearance, index) in character.appearance"
          :key="index"
          color="orange"
          text-color="black"
          :label="appearance"
          class="q-ml-xs"
        />
      </div>

      <!--Better Call Saul Appearance-->
      <div
        class="c-character-card__occupation q-mt-sm"
        v-if="
          character.better_call_saul_appearance &&
            character.better_call_saul_appearance.length > 0
        "
      >
        <span class="text-bold block q-ml-xs">Better Call Saul Appearance</span>
        <q-badge
          v-for="(appearance, index) in character.better_call_saul_appearance"
          :key="index"
          color="orange"
          text-color="black"
          :label="appearance"
          class="q-ml-xs"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Character from 'src/models/character';

@Component
export default class CharacterCard extends Vue {
  @Prop({ required: true })
  public character: Character | undefined;
}
</script>

<style scoped lang="scss">
$component-name: 'c-character-card';

.#{$component-name} {
  height: 100%;
  &__image {
    max-height: 583px;
    object-fit: cover;
  }
}
</style>
