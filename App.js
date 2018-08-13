import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IndustrialHeader from './src/IndustrialHeader'
import MainBanner from './src/MainBanner'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <IndustrialHeader />
        <MainBanner />
        <Text>About</Text>
        <Text>Services</Text>
        <Text>OurProcess</Text>
        <Text>Team</Text>
        <Text>Testimonials</Text>
        <Text>ContactUs</Text>
        <Text>Map</Text>
        <Text>Footer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
