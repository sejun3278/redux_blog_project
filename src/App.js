import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as testAction from './Store/modules/test';

class App extends Component {

  _changeNumber = (bool) => {
    const { testAction } = this.props;

    testAction.change_number({ 'bool' : bool })
  }

  render() {

    return(
      <div className='App'>
        <h1> Redux Test </h1>

        <div>
          <button onClick={() => this._changeNumber(true)}> + </button>
          　{ this.props.num }　
          <button onClick={() => this._changeNumber(false)}> - </button>
        </div>
      </div>
    )
  }
}

App.defaultProps = {
  num : 0
}

export default connect(
  (state) => ({
    num : state.test.num
  }), 
  (dispatch) => ({
      testAction : bindActionCreators(testAction, dispatch)
  })
)(App);