import React from 'react';
import Nav from '../components/Nav.js';
import Form from '../components/Form.js';
import Footer from '../components/Footer.js';


class Contacto extends React.Component{
   render(){

     
     return (
         <div>
             <Nav/>

            <div className="container">
            <Form/>
            </div>     
            
            <Footer/>
         </div>
     );
   }

}

export default Contacto;