<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>

    <button id="show-modal" @click="showModal = true">Show Modal</button>

    <!-- use the modal component, pass in the prop -->
    <confirm-modal v-if="showModal" @close="showModal = false">
      <h2 slot="header">hoge</h2>
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">custom header</h3>

      <div slot="footer">
        <span>custom footer</span>
        <button class="modal-default-button" @click="hello('hoge')">
          OK
        </button>
      </div>
    </confirm-modal>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Modal from './components/modal/Modal'
import ConfirmModal from './components/modal/ConfirmModal'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Modal,
    ConfirmModal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    hello(name) {
      alert(`Hello, ${name}`)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
