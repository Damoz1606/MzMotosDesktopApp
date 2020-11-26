<template>
    <div class="container">
        <table>
            <thead>
                <tr id="header">
                    <th v-for="(link, index) in header" :key="index">{{link.text}}</th>
                </tr>
            </thead>
            <tbody>
                <tr id="tableBody" v-for="(link, index) in item" :key="index"
                    @click.prevent="showModal = true">
                    <td v-for="(subitem, aux) in link" :key="aux">{{subitem.text}}</td>
                </tr>
            </tbody>
        </table>
        <Modal v-if="showModal" @close="showModal = false"
        :containerWidth="modalWidth">
            <slot slot="body" name="modalbody"></slot>
        </Modal>
    </div>
</template>

<script>
import Modal from './Modal-ex.vue'

export default {
    name: 'Table',
    components: {
        Modal
    },
    props: ['header', 'item'],
    data: () => ({
        showModal: false,
        modalWidth: '70%'
    })
}
</script>

<style lang="css" scoped>
@import '../styles/main.css';
@import '../styles/table.css';

.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: auto;
}
</style>