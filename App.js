import React from 'react'
import {
  StyleSheet, Text, View, ScrollView,
  Button, Image,
} from 'react-native'
import IndustrialHeader from './src/IndustrialHeader'
import MainBanner from './src/MainBanner'
import { createStackNavigator, createAppContainer, } from 'react-navigation'
import SideMenu from 'react-native-side-menu'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/* class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <IndustrialHeader />
        <MainBanner />
      </ScrollView>
    )
  }
}
export default App */

class ContentView extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>

        

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}

class Menu extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  };
  render() {
    const menu = <Menu navigator={navigator}/>;
    return (
      <View><Text>This menu</Text></View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  };
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }
  toggle() {
    console.log('+++ toggle!')
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  render() {
    const menu = <Menu navigator={navigator}/>;
    return (
      <SideMenu menu={menu} isOpen={this.state.isOpen} >
        <ContentView/>
        <Button title="blah" style={styles.button} onPress={() => this.toggle()}>
          <Image
            source={{ uri: 'http://i.imgur.com/vKRaKDX.png', width: 32, height: 32, }} />
        </Button>
      </SideMenu>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Janes profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    const n = this.props.navigation
    return (
      <Button
        title="#nice2"
        onPress={() => {}}
      />
    );
  }
}

const StackedNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
})

const StackedApp = createAppContainer(StackedNavigator)

export default StackedApp
