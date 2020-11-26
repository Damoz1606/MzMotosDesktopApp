<template>
  <transition name="modal-fade">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" :style="{width: containerWidth || '300px'}">
          <div class="modal-header">
            <slot name="header">
              <h3>Header Title</h3>
            </slot>
            <a id="btnBox" href="" :style="{color: color || '#000'}"
              v-on:click.stop.prevent="$emit('close')"
              @mouseover="$event.currentTarget.style.color = colorhover || 'gray'"
              @mouseleave="$event.currentTarget.style.color = color || '#000'" ><font-awesome-icon icon="times"/></a>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: ['color', 'colorhover', 'containerWidth']
};
</script>

<style>
@import "../styles/modal.css";

</style>