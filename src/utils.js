import React from 'react'
import { 
  StyleSheet, Text, View,
  Dimensions,
} from 'react-native'
import Image from 'react-native-scalable-image'
import { Icon, Card, Button, } from 'react-native-elements'

class Header extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }} >
        <Text style={{ textAlign: 'center', fontSize: 20 }} >{this.props.children}</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
          <View style={{ width: '10%', borderBottomColor: 'green', borderBottomWidth: 6, height: '60%' }} />
          <View style={{ width: 24, }} ><Icon name='filter-vintage' color="green" /></View>
          <View style={{ width: '10%', borderBottomColor: 'green', borderBottomWidth: 6, height: '60%' }} />
        </View>
      </View>
    )
  }
}

class Header2 extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }} >
        <Text style={{ textAlign: 'left', fontSize: 16 }} >{this.props.children}</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }} >
          <View style={{ width: 24, }} ><Icon name='filter-vintage' color="green" /></View>
          <View style={{ width: '10%', borderBottomColor: 'green', borderBottomWidth: 6, height: '60%' }} />
        </View>
      </View>
    )
  }
}

export { Header, Header2, }
