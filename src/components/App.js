import React,{Component} from 'react';

import Shape from'./Shape';

import Circle from './Circle';
class App extends Component {

  constructor(props) {

    super(props);

  }


 

  render() {

    return (

      <div>

        <Circle />

        <Shape />

      </div>

    );

  }

}


 

export default App;