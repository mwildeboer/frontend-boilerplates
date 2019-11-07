import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Title from "../components/Title";

Vue.component("v-title", Title);

storiesOf('Title', module)
  .add('Base', () => ({
    template: `<v-title>Hello World</v-title>`
  }))