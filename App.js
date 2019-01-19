import React, {Component} from 'react'
import {
  Platform, 
  StyleSheet, ScrollView,
  Text, 
  View,
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import { createStackNavigator, createAppContainer, } from 'react-navigation'

import IndustrialHeader from './src/IndustrialHeader'
import Menu             from './src/Menu'
import MainBanner       from './src/MainBanner'

const styles = StyleSheet.create({
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
})

class HomeScreen extends React.Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = { 
      isOpen: false,
      selectedItem: 'About',
    }
  }

  toggle() {
    this.setState({ isOpen: true })
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen })
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    })

  render() {
    const menu = <Menu navigator={navigator} onItemSelected={this.onMenuItemSelected} />

    return (
      <SideMenu 
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)} >
        <ScrollView>
          <IndustrialHeader openSidebar={() => {this.setState({isOpen:true})}} />
          <MainBanner />
        </ScrollView>
      </SideMenu>
    )
  }
}

class ProfileScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>ProfileScreen</Text>
      </View>)
  }
}

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  // Profile: { screen: ProfileScreen },
})

const App = createAppContainer(AppNavigator)

export default App



// Legacy
/* const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
} */


