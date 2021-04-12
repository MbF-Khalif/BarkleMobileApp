import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Route from './src/containers/App';

const viewContainer = {
    flex: 1,
};

class App extends Component {
  render() {
    return (
      <View style={viewContainer}>
      	<Provider store={store}><Route /></Provider>
      </View>
    );
  }
}

export default App;