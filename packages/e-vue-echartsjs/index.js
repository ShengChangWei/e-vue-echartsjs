import EVueEchartsjs from './e-vue-echartsjs.vue'


EVueEchartsjs.install = function(vue) {
    Vue.component(EVueEchartsjs.name, EVueEchartsjs)
}

export default EVueEchartsjs;