import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebook, faTwitter, faInstagram,faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faFacebook,faTwitter, faInstagram,faPinterest,faLinkedin )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
