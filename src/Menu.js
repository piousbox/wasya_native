import React from 'react'
import { 
  Dimensions,
  StyleSheet, Text, View,
  ScrollView,
  Image,
} from 'react-native'

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'white',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 16,
    fontWeight: '300',
    padding: 12,

    /* paddingTop: 12,
    paddingBottom: 12,

    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da', */
  },
});

export default class Menu extends React.Component {
  render() {
    return (
      <ScrollView scrollToTop={false} style={styles.menu} >

        { /* <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri }}
          />
          <Text style={styles.name}>Your name</Text>
        </View> */ }

        <Text
          onPress={() => this.props.onItemSelected('Home')}
          style={styles.item} >Home</Text>

        <Text
          onPress={() => this.props.onItemSelected('OurProcess')}
          style={styles.item} >Our Process</Text>

        <Text
          onPress={() => this.props.onItemSelected('OurTeam')}
          style={styles.item} >Our Team</Text>

        <Text
          onPress={() => this.props.onItemSelected('OurClients')}
          style={styles.item} >Our Clients</Text>

        <Text
          onPress={() => this.props.onItemSelected('CaseStudies')}
          style={styles.item} >Case Studies</Text>

        <Text
          onPress={() => this.props.onItemSelected('ContactUs')}
          style={styles.item} >Contact Us</Text>

      </ScrollView>)
  }
}

