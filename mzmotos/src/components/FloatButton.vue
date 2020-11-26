<template>
<div>
  <a href="" class="float" id="floatBtn" @click.prevent="showModal = true">
      <font-awesome-icon class="my-float" icon="plus"/>
  </a>
  <Modal v-if="showModal" @close="showModal = false"
    :containerWidth="modalWidth">
    <slot slot="body" name="modalbody"></slot>
  </Modal>
</div>
</template>

<script>
import Modal from './Modal-ex.vue'

export default {
  name:'float-button',
  components: {
    Modal
  },
  data: () => ({
    showModal: false,
    modalWidth: '70%'
  })
}
</script>

<style scoped>
@import '../styles/floatButton.css';
</style>