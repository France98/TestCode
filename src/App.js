import { Row, Col, Divider } from 'antd';
import React, {Component} from 'react';
import Navigationbar from './component/toolbar/Toolbar';
import CenterGrid from './component/Grid';
import Step from './component/Stepper';

class App extends Component{
  
  render(){
    return (
      <div className='App'>
        <Navigationbar/>
        <main style={{marginTop:'64px'}}>
          <CenterGrid/>
        </main>
      </div>
    );
  }
}

export default App;
