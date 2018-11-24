import React, { Component } from 'react';
import Template from './composants/Template/Template';
import PBuilder from "./containers/PBuilder/PBuilder";
import ComfirmConnection from "./composants/Form/ConfirmConnection/ComfirmConnection"
import {Route,Switch} from "react-router-dom"


class App extends Component {
  render() {
    return (
      <div >
<Template>
    <Switch>
            <Route exact path ="/"  component={ComfirmConnection}/>
            <Route exact path="/jeu" component={PBuilder}/>
    </Switch>
</Template>
      </div>
    );
  }
}

export default App;
