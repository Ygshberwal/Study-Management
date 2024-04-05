export default {
    template:`
    <div class='d-flex justify-content-center' style="margin-top: 25vh">
        <div class="mb-3 p-5 bg-light ">
            <div class='text-danger'>{{error}}</div>
            <label for="user-email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="user-email" placeholder="name@example.com" v-model="cred.email">

            <label for="user-password" class="form-label">Password </label>
            <input type="password" class="form-control" id="user-password" v-model="cred.password" >
            <button class="btn btn-primary mt-2" @click='login'> Login </button>
        </div>
    </div>
    `,
    data(){
        return{
            cred:{
                email:null,
                password: null,
            },
            error:null
        }
    },
    methods:{
        async login() {
            console.log("User attempting to log in");
            try {
                const res = await fetch('/user-login', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.cred),
                });
                const data = await res.json();
                if (res.ok) {
                    console.log("Login successful:", data);
                    localStorage.setItem('auth-token', data.token)
                    this.$router.push({path:'/', query:{role:data.role}})
                } else {
                    this.error=data.message
                    console.error("Login failed with status:", res.status);
                }
            } catch (error) {
                console.error("An error occurred during login:", error);
            }
        }
    }
}