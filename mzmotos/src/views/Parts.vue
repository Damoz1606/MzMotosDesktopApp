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
import axios from '../../node_modules/axios'

let db = require('../config/dbPartConnection.js');

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
        items: [],
        item: {
            id: null,
            part: '',
            pvp: '',
            pvd: '',
            pvm: ''
        }
    }),
    methods: {
        show() {
            const connection = db();
            axios.get('/', (req, res) => {
                if(req){
                    throw req;
                }
                console.log(res);
                var sql = 'SELECT * FROM parts';
                connection.query(sql, (req, res) => {
                    if(req){
                        throw req;
                    }
                    this.items = res;
                });
            });
        }
    },
    created: function () {
        this.show();
    },
}
</script>

<style lang="css" scoped>
@import '../styles/main.css';
</style>