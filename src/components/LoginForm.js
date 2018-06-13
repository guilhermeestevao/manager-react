import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { 
  Card,
  CardSection,
  Input,
  Button,
  Spinner 
} from './common';

import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorTextStyles}>
            {this.props.error}
          </Text>
        </View>  
      );
    }
  }

  renderButton() { 
    if (this.props.loading) { 
      return <Spinner size='large' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
            <Input 
              label="Email"
              placeholder="example@email.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
        </CardSection>
  
        <CardSection>
          <Input 
            secureTextEntry
            label="Password"
            placeholder="Your password"
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
        
      </Card>
    );
  }
}

const styles = {

  errorTextStyles: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }

};

const mapStateToProps = ({ auth }) => {
  
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading  
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
