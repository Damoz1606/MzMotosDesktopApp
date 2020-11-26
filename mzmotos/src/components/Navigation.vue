<template>
<div id="nav" class="nav nav-side nav-fx btn-pos-center"
:style="{background: background || '#333', 
        boxShadow: boxShadow || '0px 0px 0px 0px #000',
        borderRadius: borderRadius || '0px'}">
    <ul>
        <li v-for="(link, index) in navLinks" :key ="index">
                <a href="" :id="link.name" :class ="link.class" v-on:click="changeActive($event)">
                    <router-link :to="link.path"><font-awesome-icon :icon="link.icon" class="icon alt"/></router-link>
                </a>
        </li>
    </ul>
</div>
</template>

<script scoped>
export default {
    props: ['navLinks', 'background', 'boxShadow', 'borderRadius'],
    methods: {
        changeActive: (event) => {
            var active = document.getElementsByClassName('active');
            for(var i = 0; i < active.length; i++){
                active[i].className = "";
            }
            document.getElementById(event.currentTarget.id).setAttribute('class','active');
            changeNavColor(event.currentTarget.id);
        }
    }
}

function changeNavColor(id){
    if(id != 'home'){
        document.getElementById("nav").style.background = "rgb(255, 66, 66, 0.75)";
    } else {
        document.getElementById("nav").style.background = "rgb(255, 66, 66, 0.1)";
    }
}

</script>

<style scoped language="css">
@import '../styles/nav.css';
</style>