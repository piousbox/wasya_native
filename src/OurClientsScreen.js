import React from 'react'
import {
  Button,
  Dimensions,
  Platform, 
  StyleSheet, ScrollView,
  Text, 
  View,
} from 'react-native'
import { List, ListItem, } from 'react-native-elements'
import SideMenu from 'react-native-side-menu'
import { createStackNavigator, createAppContainer, } from 'react-navigation'

import { Header }       from './utils'
import IndustrialHeader from './IndustrialHeader'
import Menu             from './Menu'
import MainBanner       from './MainBanner'

const style = {
  p: { padding: 20 },
  whiteBg: {
    backgroundColor: '#F5FCFF',
    height: window.height,
    padding: 10,
  },
}

class OurClientsScreen extends React.Component {
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

  render () {
    // console.error('+++ header:', Header)
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
          <View style={style.whiteBg} >
            <Header>Our Clients</Header>
            <Text style={style.p} >We seek to engage with medium-size companies, across all industries, who have specific business needs that can be addressed with technology. Examples of ideal clients include:</Text>
          </View>
        </ScrollView>
      </SideMenu>
    )

    return (
      <View>
        <Header>Our Clients</Header>
        <Text style={style.p} >We seek to engage with medium-size companies, across all industries, who have specific business needs that can be addressed with technology. Examples of ideal clients include:</Text>

        <List>
          <ListItem key={'a'} 
            title={'A warehousing startup that needs to rebuild their inventory tracking and shipping platform'} />
          <ListItem key={'a'} 
            title={'A publishing house that needs to conglomerate multiple printed and digital magazines'} />
          <ListItem key={'a'} 
            title={'A construction company that needs to improve their system for soliciting government and private-sector construction contracts.'} />
        </List>

        <Text style={style.p} >Some of the clients we have worked with are:</Text>

      </View>
    )
  }
}

export default OurClientsScreen
