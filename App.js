import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Img from './ooty1.jpg';
import Img1 from './ooty4.jpg' ;
import Img2 from './ooty2.jpg';
import Img3 from './ooty3.jpg';

 class Home extends React.Component{
    render(){
        return (
       <div >
           
         <div class="container">
             <img src={Img} alt="ooty" id="image" />
              <div class="content">
                <h1>Ooty Tourist Places</h1>
              </div>
        </div>
  
        <div class="one">  <button class="btn btn-danger"  >Logout</button></div> 
        <div class="two">  <button  class="btn btn-dark" >Profile</button> </div> 
         
          
      <div class="container">
          <img src={Img1} class="img-thumbnail" alt="Botanical garden" id="botanical" /> 
          <h3 > Ooty Botanical Garden</h3>
          <div id="label"><button  class="btn btn-dark" >View</button></div> 
       </div> <br/> <br/>
       <div class="container">
          <img src={Img2} class="img-thumbnail" alt="rose garden" id="rose" /> 
          <h3 > Ooty Rose Garden</h3>
         <div id="label"><button  class="btn btn-dark" >View</button></div> 
       </div> <br/> <br/>
       <div class="container">
          <img src={Img3} class="img-thumbnail" alt="ooty lake" id="lake" /> 
          <h3 > Ooty Lake</h3>
          <div id="label"><button  class="btn btn-dark" >View</button></div> 
       </div>
    </div> 
       
          
        );
  } 
  
}
ReactDOM.render(<Home />,document.getElementById('root'));