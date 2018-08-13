import React from 'react'
import { 
  StyleSheet, Text, View, Image,
} from 'react-native'

const bannerPath = './bg4.jpg'
const bannerStyle = {
  width: '100',
}

export default class MainBanner extends React.Component {
  render() {
    return (
      <View>
        <Image source={require(bannerPath)} style={bannerStyle} resizeMode="contain" /> 
      </View>)
  }
}

