import HomePage from "../containers/HomeTemplate/HomePage"
import LoginPage from "../containers/HomeTemplate/LoginPage"

const routesHome=[
   {
       exact:true,
       path:"/",
       Component:HomePage
   },
   {
       exact:false,
       path:"/sign-in",
       Component:LoginPage
   }
]


export{routesHome}