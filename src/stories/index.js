import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import VueInfoAddon from 'storybook-addon-vue-info'

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import Button from "../components/Button.vue";

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

storiesOf('Usage Button2', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    components: { Button },
    template: `<Button text="default" />`
  }))

storiesOf('Button2', module)
  .add('default', () => ({
    components: { Button },
    template: `<Button text="default" />`
  }))
  .add('color', () => ({
    components: { Button },
    template: `
      <div style="display: flex;">
        <Button text='primary' kind='primary'/>
        <Button text='default' kind='default'/>
        <Button text='success' kind='success'/>
        <Button text='info' kind='info'/>
        <Button text='warning' kind='warning'/>
        <Button text='danger' kind='danger'/>
        <Button text='dark' kind='dark'/>
      </div>
    `
  }))
  .add('size', () => ({
    components: { Button },
    template: `
      <div>
        <div style="display: flex;">
          <Button text='minimum' kind='primary' size="minimum"/>
          <Button text='small' kind='primary' size="small"/>
          <Button text='normal' kind='primary' size="normal"/>
          <Button text='large' kind='primary' size="large"/>
        </div>
        <div style="display:flex;"><Button text='full' kind='primary' size="full"/></div>
      </div>
      `
  }))
