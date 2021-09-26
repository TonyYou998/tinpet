

import { BrowserRouter,Switch } from 'react-router-dom';
import { routesHome } from './routes';


import HomeTemplate from './containers/HomeTemplate';

const showHomeLayout=(routes)=>{
  if(routes && routes.length>0){
   
    return routes.map((item,index)=>{
      return(
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.Component}
        />
      ) 
    })
  }
}


function App() {
  return (
    <BrowserRouter>
        <Switch>
          {showHomeLayout(routesHome)}
          
        </Switch>
    </BrowserRouter>
  
  ) 
  

}

export default App;
