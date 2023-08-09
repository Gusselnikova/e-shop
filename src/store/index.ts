import Vue from "vue";
import {createPinia, Pinia, PiniaVuePlugin} from "pinia"

Vue.use(PiniaVuePlugin)

const pinia: Pinia = createPinia()

export default pinia
