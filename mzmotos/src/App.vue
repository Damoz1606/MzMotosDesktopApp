<template>
  <div id="wrapper">
    <Navigation 
    :navLinks="navLinks" 
    :background="navbackground"
    :boxShadow="boxShadow"
    :borderRadius="borderRadius"
    />
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'
import { faHome, faTools, faMotorcycle, faPlus, faTimes } from '../node_modules/@fortawesome/free-solid-svg-icons'

library.add(faHome)
library.add(faTools)
library.add(faMotorcycle)
library.add(faPlus);
library.add(faTimes);

export default {
  name: 'App',
  components: {
    Navigation
  },
  data: () => ({
    navLinks: [
      {
        text: "Home",
        path: "/",
        icon: "home",
        class: "active",
        name:"home"
      },
      {
        text: "Parts",
        path: "/partlist",
        icon: "tools",
        class: "",
        name:"parts"
      },
      {
        text: "Motorcycle",
        path: "/motorcycle",
        icon: "motorcycle",
        class: "",
        name:"motorbike"
      }
    ],
    navbackground: "rgb(255, 66, 66, 0.1)",
    boxShadow: "0px 0px 16px 0px #000",
    borderRadius: "0 20px 20px 0"
  })
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  text-decoration: none;
  list-style: none;
  transition: all 0.3s ease;
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
    transition: all .3s ease;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(211, 26, 43);
}

*,
*after,
*before {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

#wrapper {
    width: 100%;
}
</style>