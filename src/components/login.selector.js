import React, {Component} from 'react';
import propTypes from 'prop-types';

export default class LoginSelector extends Component {
  state = {
    isLogin: false
  }

  componentDidMount() {
    const self = this;
    window.OnLoginSuccess = function() {
      self.setState({
        isLogin: true
      })
    }
  }

	render() {
    const {children} = this.props;
    const {isLogin} = this.state;

		return isLogin ? children : null;
	}
}
