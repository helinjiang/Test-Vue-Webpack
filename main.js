import Vue from 'vue'
import App from './components/App'

new Vue({
    el: 'body',
    components: {
        // include the required component
        // in the options
        app: App
    }
})