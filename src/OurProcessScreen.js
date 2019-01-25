import React, {Component} from 'react'
import {
  Button,
  Dimensions,
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
    height: window.height,
    padding: 10,
  },
})

class OurProcessScreen extends React.Component {
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
            <Text style={styles.h1} >Our Process</Text>
            <Text>We work in iterative cycles. The methodology we use is sprint and kanban. Our preferred sprint length is the industry-standard 2 weeks. Kanban refers to keeping tracks of small, accomplishable tasks by means of cards, and moving the cards through lanes. Our typical lanes are "todo", "doing" and "done", although this varies as the complexity grows. If the work is split by team function, this is reflected by the lanes. There can be additional lanes for "content", "Q/A", "graphics", "marketing", and "sales". Our iterative cycle consists of the following steps:</Text>
          </View>
        </ScrollView>
      </SideMenu>
    )
  }
}

export default OurProcessScreen
