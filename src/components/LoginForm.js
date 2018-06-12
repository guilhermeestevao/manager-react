import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Card,
  CardSection,
  Input,
  Button 
} from './common';
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';

class LoginForm extends Component {

  onEmailChange = text => {
    this.props.emailChanged(text);
  }

  onPasswordChanged = text => {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>

        <CardSection>
            <Input 
              label="Email"
              placeholder="example@email.com"
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
        </CardSection>
  
        <CardSection>
          <Input 
            secureTextEntry
            label="Password"
            placeholder="Your password"
            onChangeText={this.onPasswordChanged}
            value={this.props.password}
          />
        </CardSection>
        
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Log in
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    email: state.auth.email,
    password: state.auth.password  
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
