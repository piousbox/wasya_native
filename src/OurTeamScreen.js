import React, {Component} from 'react'
import {
  Button,
  Dimensions,
  Image,
  Platform, 
  StyleSheet, ScrollView,
  Text, 
  View,
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import { createStackNavigator, createAppContainer, } from 'react-navigation'

import IndustrialHeader from './IndustrialHeader'
import Menu             from './Menu'
import MainBanner       from './MainBanner'
import { Header }       from './utils'

const window = Dimensions.get('window')


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: window.height,
  },
  whiteBg: {
    backgroundColor: '#F5FCFF',
    minHeight: window.height,
    padding: 10,

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
})

class OurTeamScreen extends React.Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = { 
      isOpen: false,
      selectedItem: 'OurTeam',
    }
  }

  toggle() {
    this.setState({ isOpen: true })
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen })
  }

  onMenuItemSelected = item => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    })
    this.props.navigation.navigate(item)
  }

  render() {
    const menu = <Menu navigator={navigator} onItemSelected={this.onMenuItemSelected} />
    const {navigate} = this.props.navigation;

    let ns = [ 
      require("./images/bondar_500x500.jpg"),
      require("./images/brad_500x500.jpg"),
      require("./images/bugra_500x500.jpg"),
      require("./images/kay_500x500.jpg"),
      require("./images/kim_500x500.jpg"),
      require("./images/oleg_500x500.jpg"),
      require("./images/steve_500x500.jpg"),
      require("./images/victor_500x500.jpg"),
      require("./images/zach_500x500.jpg"),
    ]

    return (
      <SideMenu 
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)} >
        <ScrollView>
          <IndustrialHeader 
            navigate={navigate}
            openSidebar={() => {this.setState({isOpen:true})}} />
          <View style={styles.whiteBg} >          
            <Header>Our Team</Header>
            {ns.map(n => (<Image key={n} style={{ width: '100%', marginBottom: 15 }} source={n} />))}
          </View>
        </ScrollView>
      </SideMenu>
    )
  }
}

export default OurTeamScreen
