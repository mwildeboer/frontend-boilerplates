import Vue from 'vue';
import Title from "../components/Title";

Vue.component("v-title", Title);

export default {
  title: 'Title',
  component: Title
};

export const base = () => (
  `<v-title>Hello World</v-title>`
)