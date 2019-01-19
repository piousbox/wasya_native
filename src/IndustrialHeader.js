import React from 'react'
import { 
  StyleSheet, Text, View,
  Button,
} from 'react-native'
import { Header, } from 'react-native-elements'

const logoUrl = "https://wasya.co/components/Navigation/images/logo-4.png"
const logoPath = './logo-4.png'

export default class IndustrialHeader extends React.Component {
  render() {
    return (
      <Header 
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => { 
          const {navigate} = this.props.navigation;
          navigate('Profile', {name: 'Jane'}) } 
        }}
        centerComponent={{ text: 'Wasya Co', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />)
  }
}

