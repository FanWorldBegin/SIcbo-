import React, {Component} from 'react';
import propTypes from 'prop-types';

export default class LoginSelector extends Component {
  state = {
    isLogin: false
  }

  componentDidMount() {
    const self = this;
    window.OnLoginSuccess = function() {   //在index.html中调用
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

//在app.js中调用里面包含了游戏主逻辑作为 this.propss.children
