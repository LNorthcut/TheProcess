import React from 'react';
import Navb from './Compon/NavBar';
import Chum from './Compon/Jumbo';
import Chum2 from './Compon/Jum2';
import Footer from './Compon/Base';
import './App.css';
import S2 from './Compon/Fsection';


class App extends React.Component {

    render() {        
      return (

    <div>
      <div className='wrapper'>
      <Navb/><br/><Chum/><br/><Chum2/><br/><S2/>

      <div className='push'></div>
      </div>
      <Footer/>
    </div>

  
  

    

       
      )
    }
  
  
  }

  export default App