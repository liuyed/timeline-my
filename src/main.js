import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import myTimeline from './lib/timeline'

// console.log(myTimeline);
// import myTimeline from 'timeline-my';
Vue.use(myTimeline);


new Vue({
  render: h => h(App),
}).$mount('#app')
