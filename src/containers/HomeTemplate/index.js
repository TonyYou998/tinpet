import React from 'react'

import { Route } from "react-router-dom";
import Header from '../../components/Header';
import Logo from '../../components/Logo';

function LayoutHome(props) {
    return (
      <div>
        <Header/>
        {props.children}
      </div>
    );
  }


export default function HomeTemplate({ Component,...props}) {
    
  
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <LayoutHome>
                    < Component {...propsComponent} />
                </LayoutHome>
            )}
        />
    )
}
