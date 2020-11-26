<template>
    <div class="mainContainer">
        <div class="banner">
            <Table 
            :header="header"
            :item="item">
                <Detail slot="modalbody"></Detail>
            </Table>
            <FloatBtn>
                <Add slot="modalbody"></Add>
            </FloatBtn>
        </div>
    </div>
</template>

<script>
import Table from '../components/Table.vue' 
import FloatBtn from '../components/FloatButton.vue'
import Detail from './DetailPart.vue'
import Add from '../views/AddParts.vue'

export default {
    name: 'Parts',
    components: {
        Table, FloatBtn, Detail, Add
    },
    data: () => ({
        header: [
            {
                text: "Header 1"
            },
            {
                text: "Header 2"
            },
            {
                text: "Header 3"
            },
            {
                text: "Header 4"
            }
        ],
        item:
        [
            [
                {
                    text: "Example 1 H1"
                },
                {
                    text: "Example 1 H2"
                },
                {
                    text: "Example 1 H3"
                },
                {
                    text: "Example 1 H4"
                }
            ]
        ]
    })
}
</script>

<style lang="css" scoped>
@import '../styles/main.css';
</style>