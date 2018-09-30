// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VuePersianDatatimePicker from 'vue-persian-datetime-picker'
import Vuelidate from 'vuelidate'
Vue.config.productionTip = false;
/* eslint-disable no-new */

Vue.component('date-picker',VuePersianDatatimePicker);
Vue.use(Vuelidate)
Vue.use(VuePersianDatatimePicker,{
  name: 'custom-date-picker',
  props:{
    inputFormat: 'YYYY-MM-DD HH:mm',
    format: 'jYYYY-jMM-jDD HH:mm',
    editable: false,
    inputClass: 'form-control my-custom-class-name',
    placeholder: 'Please select a date',
    altFormat: 'YYYY-MM-DD HH:mm',
    color: '#00acc1',
    autoSubmit: false,
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
