/* @flow */
import React, { PropTypes } from 'react'
import BroImage from './bro.jpg'
import classes from './HomeView.scss'
import { connect } from 'react-redux'
import { takeALook } from '../../redux/modules/bro'

export class HomeView extends React.Component {
  propTypes = {
    value: PropTypes.number.isRequired,
    takeALook: PropTypes.func.isRequired
  };

  render () {
    return (
      <div>
        <h1>Bigbro Web Eye</h1>
        <img src={BroImage} className={classes.bro}/>
        bro watched you times: {this.props.value} <button onClick={this.props.takeALook}>watch more</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { value: state.bro.value }
}

export default connect((mapStateToProps), {
  takeALook: () => takeALook()
})(HomeView)

