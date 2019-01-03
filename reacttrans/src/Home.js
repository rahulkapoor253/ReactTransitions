import React from 'react';
import CardDet from './Card';
import {CSSTransition, TransitionGroup} from "react-transition-group";
//we can use this as arrow function instead of class if there is no manipulation;
const Home = ({property}) => {

    return(
        
        <div className="page">
           
            <TransitionGroup className="card-container">
            <CSSTransition
            key={property._id}
            classNames="fade"
            timeout={300}
            >

                <CardDet property={property}/>
                </CSSTransition>
            </TransitionGroup>

        </div> 
    
    )

}

export default Home;