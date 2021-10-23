import FindAPetPage from "../containers/HomeTemplate/FindAPetPage"
import HomePage from "../containers/HomeTemplate/HomePage"
import LoginPage from "../containers/HomeTemplate/LoginPage"
import PetInfoPage from "../containers/HomeTemplate/PetInfoPage"

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
       path:"/detail/id",
       Component:PetInfoPage
   },
   {
       exact:false,
       path:"/pet-all",
       Component:FindAPetPage
   }
]


export{routesHome}