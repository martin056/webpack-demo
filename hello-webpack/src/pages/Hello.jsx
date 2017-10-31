import React from 'react';
import {connect} from 'react-redux';

import {addToSum, subtractFromSum} from '../sum/actions';

import './styles.scss'

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {sum, addToSum, subtractFromSum} = this.props;

    return (
      <div className="hello-webpack">
        <div className="hello-webpack-header">Hello Webpack!</div>
        <div className="hello-webpack-text">
          I decided to be super original and added +/- button to show you Redux works
        </div>
        <div className="hello-webpack-buttons">
          <div className="hello-webpack-plus" onClick={() => addToSum(1)}>+</div>
          <div className="hello-webpack-minus" onClick={() => subtractFromSum(1)}>-</div>
        </div>
        <div className="hello-webpack-sum">{sum}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sum: state.sum.amount
  }
}

const mapDispatchToProps = {
  addToSum,
  subtractFromSum
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);