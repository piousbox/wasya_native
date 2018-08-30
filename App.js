import React from 'react'
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native'
import IndustrialHeader from './src/IndustrialHeader'
import MainBanner from './src/MainBanner'
import { Clients, Testimonials, } from './src/Testimonials'
import { Divider } from './src/MainBanner'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <IndustrialHeader />
        <MainBanner />
        <Clients />
        <Testimonials />
        <Divider color="red" />

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
