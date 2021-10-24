import FindAPetPage from "../containers/HomeTemplate/FindAPetPage"
import HomePage from "../containers/HomeTemplate/HomePage"
import LoginPage from "../containers/HomeTemplate/LoginPage"
import PetInfoPage from "../containers/HomeTemplate/PetInfoPage"
import BreedPage from "../containers/HomeTemplate/BreedPage"
import GiveUpPage from "../containers/HomeTemplate/GiveUpPage"
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
   },
   {
       exact:false,
       path:"/breed",
       Component:BreedPage
   },{
       exact:false,
       path:"/give",
       Component:GiveUpPage
   }
]


export{routesHome}