import React from 'react'
import { 
  StyleSheet, Text, View,
  Dimensions,
} from 'react-native'
import Image from 'react-native-scalable-image'
import { Icon, Card, Button, } from 'react-native-elements'

import { Header, Header2 } from './utils'

import nexentaLogo from './images/clients-logos/nexenta2.jpg'
import creekLogo from './images/clients-logos/creek2.jpg'
import liatrioLogo from './images/clients-logos/liatrio2.jpg'
import mediatekLogo from './images/clients-logos/mediatek2.jpg'
import operaeventLogo from './images/clients-logos/operaevent2.jpg'
import signvoxLogo from './images/clients-logos/signvox2.jpg'
import zmdigitalLogo from './images/clients-logos/zmdigital2.jpg'
import redesLogo from './images/clients-logos/redes2.jpg'

const style = {
  cardTitle: {
    textAlign: 'center',
    fontSize: 30,
  },
}

class Clients extends React.Component {
  render() {
    return (
      <View >
        <Header>Our Clients</Header>
        <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', marginBottom: 20 }} >          
            <Image width={Dimensions.get('window').width * .4} source={nexentaLogo} />
            <Image width={Dimensions.get('window').width * .4} source={creekLogo} />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', marginBottom: 20 }} >          
            <Image width={Dimensions.get('window').width * .4} source={liatrioLogo} />
            <Image width={Dimensions.get('window').width * .4} source={mediatekLogo} />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', marginBottom: 20 }} >          
            <Image width={Dimensions.get('window').width * .4} source={operaeventLogo} />
            <Image width={Dimensions.get('window').width * .4} source={signvoxLogo} />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', marginBottom: 20 }} >          
            <Image width={Dimensions.get('window').width * .4} source={zmdigitalLogo} />
            <Image width={Dimensions.get('window').width * .4} source={redesLogo} />
        </View>
      </View>)
  }
}

class Testimonials extends React.Component {
  render () {
    return (
      <View>
        <Header>What people are saying</Header>
        <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'column' }}>
          <Card>
            <Text>Victor build the application quickly and according to spec. Great communication, great leader.</Text>
            <Text>Stephen Kim, Business Owner</Text>
          </Card>
          <Card>
            <Text>Victor provided the necessary technical guidance for the team to succeed, in tight deadlines. Victor was a pleasure to work with.</Text>
            <Text>Operaevent Bay Area Startup</Text>
          </Card>
          <Card>
            <Text>Wasya Co delivered a great-looking mobile site, just what we wanted.</Text>
            <Text>Marchesi Design Furniture Store</Text>
          </Card>
        </View>
      </View>)
  }
}

export { Clients, Testimonials, }
