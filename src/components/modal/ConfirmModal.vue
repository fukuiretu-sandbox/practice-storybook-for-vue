<template>
  <modal>
    <div slot="footer">
      <button class="modal-default-button" @click="ok">
        OK
      </button>
      <button class="modal-default-button" @click="$emit('close')">
        close
      </button>
    </div>
  </modal>
</template>

<script>
import Modal from "./Modal";

export default {
  components: {
    Modal
  },
  methods: {
    ok() {
      alert('OK');
    }
  }
}
</script>
