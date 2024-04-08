import AdminHome from "./AdminHome.js"
import StudentHome from "./StudentHome.js"
import InstructorHome from "./InstructorHome.js"

export default {
    template:`<div> 
    <StudentHome v-if="userRole=='stud'" />
    <AdminHome v-if="userRole=='admin'" />
    <InstructorHome v-if="userRole=='inst'" />
    </div>`,

    data(){
        return {
            userRole: localStorage.getItem('role')
        }
    },
    components:{
        StudentHome,
        AdminHome,
        InstructorHome,
    }
}

