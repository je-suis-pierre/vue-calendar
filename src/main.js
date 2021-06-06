import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCV_kmS1X_MmNv9ApTZdUEuzFyFS9IPoWw",
  authDomain: "vue-calendar-61249.firebaseapp.com",
  projectId: "vue-calendar-61249",
  storageBucket: "vue-calendar-61249.appspot.com",
  messagingSenderId: "451186299076",
  appId: "1:451186299076:web:6f67bf6798bb994a967991"
});
export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
