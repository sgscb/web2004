import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// 这个时候 app 就是一个 App 的实例，现在再设置任何的配置是在不同的 app 实例上面的，不会像vue2 一样发生任何的冲突。

// app.config.isCustomElement = tag => tag.startsWith('app-') // ？----
// app.use(/* ... */)
// app.mixin(/* ... */)
// app.component(/* ... */)
// app.directive(/* ... */)

// app.config.globalProperties.customProperty = () => { }

createApp(App).mount('#app')
