import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAmMrumKL8Vp7RJ4x6BD6EI18ul6b4I8k0',
      authDomain: 'manager-react-native-guilherme.firebaseapp.com',
      databaseURL: 'https://manager-react-native-guilherme.firebaseio.com',
      projectId: 'manager-react-native-guilherme',
      storageBucket: '',
      messasgingSenderId: '537722258853'
    };
    firebase.initializeApp(config);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  } 
}

export default App;
