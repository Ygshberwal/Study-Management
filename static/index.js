import router from "./router.js"
import Navbar from "./components/Navbar.js"

console.log("hello from index.js")
new Vue({
    el:"#app",
    template:`
    <div>
    <Navbar />
    <router-view />
    </div>`,
    router,
    components:{
        Navbar
    }
})