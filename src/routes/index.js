import HomePage from "../containers/HomeTemplate/HomePage"
import LoginPage from "../containers/HomeTemplate/LoginPage"
import IntroProduct from "../containers/HomeTemplate/IntroProduct"
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
   },
   {
    exact:false,
    path:"/Intro-Product",
    Component:IntroProduct
   }
]


export{routesHome}