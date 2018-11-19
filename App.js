import React from 'react'
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native'
import IndustrialHeader from './src/IndustrialHeader'
import MainBanner from './src/MainBanner'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <IndustrialHeader />
        <MainBanner />
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
