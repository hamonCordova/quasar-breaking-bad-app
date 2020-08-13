<template>
  <q-layout view="lHh Lpr lFf">
    <q-ajax-bar
      ref="bar"
      position="top"
      color="accent"
      size="10px"
      skip-hijack
    />

    <div>
      <div class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>Breaking Bad - App</q-toolbar-title>
        </q-toolbar>
        <q-toolbar class="no-margin no-padding bg-secondary shadow-2" inset>
          <q-tabs
            v-model="tabSelected"
            inline-label
            class="bg-secondary text-white full-width"
          >
            <q-route-tab
              name="characters"
              icon="face"
              label="characters"
              to="/characters"
              exact
            />
            <q-route-tab
              disabled="true"
              name="quote"
              icon="format_quote"
              label="quote"
              to="/quotes"
              exact
            />
            <q-route-tab
              disabled="true"
              name="episodes"
              icon="movie"
              label="episodes"
              to="/episodes"
            />
          </q-tabs>
        </q-toolbar>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class MainLayout extends Vue {
  tabSelected: string = 'mails';
}
</script>
