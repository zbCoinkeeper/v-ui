import  Vue from "vue"
import Demo from "./demo.vue"

Vue.config.productionTip=false

new Vue({
    el:"#app",
    render:h=>h(Demo)
})

