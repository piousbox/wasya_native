import React from 'react'
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native'
import IndustrialHeader from './src/IndustrialHeader'
import MainBanner from './src/MainBanner'
import { Divider } from './src/MainBanner'

export default class App extends React.Component {
  render() {
    console.log('+++ divider:', Divider)

    return (
      <ScrollView>
        <IndustrialHeader />
        <MainBanner />

        <Divider color="red" />
        <Text>Testimonials</Text>
        <Text>ContactUs</Text>
        <Text>Map</Text>
        <Text>Footer</Text>
      </ScrollView>
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
