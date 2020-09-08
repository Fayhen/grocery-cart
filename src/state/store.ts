import Vue from "vue";
import Cart from "../assets/classes";

const state = Vue.observable(new Cart());

export { state as default };
