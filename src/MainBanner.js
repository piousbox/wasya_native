import React from 'react'
import { 
  StyleSheet, Text, View,
  Dimensions,
} from 'react-native'
import Image from 'react-native-scalable-image'
import { Icon, Card, } from 'react-native-elements'

const bannerPath = './bg5.jpg'
const banner = require(bannerPath)
const logoPath = './logo4.png'
const logo = require(logoPath)

const style = {
  cardTitle: {
    textAlign: 'center',
    fontSize: 30,
  },
  cardDescription: {},
  text: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
    justifyContent: 'center',
    paddingLeft: 20,
  },
  innerText: { fontSize: 20, color: '#fff' },
  innerText2: { color: '#fff' },
  p: { padding: 20, },
}

class Divider extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
        <View style={{ width: '30%', borderBottomColor: 'black', borderBottomWidth: 1, height: '50%' }} />
        <View style={{ width: 24, }} ><Icon name='filter-vintage' /></View>
        <View style={{ width: '30%', borderBottomColor: 'black', borderBottomWidth: 1, height: '50%' }} />
      </View>
      )
  }
}

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

class MyCard extends React.Component {
  render () {
    console.log('+++ myCard:', this.props)

    return (
      <View>
        <Card image={require(this.props.imgPath)}>
          <Text style={style.cardTitle} >{this.props.title}</Text>
          <Divider />
          <Text style={style.cardDescription} >{this.props.description}</Text>
        </Card>
      </View>
      )
  }
}

export default class MainBanner extends React.Component {
  render() {
    const servicesCards = [
      { title: "Ruby on Rails", imgPath: "./400x200/ruby.jpg", description: "Our framework for rapid prototyping and non-real-time applications is Ruby on Rails. We use it for constructing APIs, providing backend for websites, generating static websites, and as the tool for general scripting." },
      /* { title: "", imgPath: "", description: "" },
      { title: "", imgPath: "", description: "" },
      { title: "", imgPath: "", description: "" },
      { title: "", imgPath: "", description: "" },
      { title: "", imgPath: "", description: "" },
      { title: "", imgPath: "", description: "" },
      { title: "", imgPath: "", description: "" }, */
    ]
    let ourServicesCards = []
    servicesCards.forEach((item, idx) => {
      ourServicesCards.push(<MyCard key={idx} title={item.title} description={item.description} imgPath={item.imgPath} />)
    })

    return (
      <View >
        <View>
          <Image width={Dimensions.get('window').width} source={banner} />
          <View style={style.text}>
            <Text style={style.innerText} >Rapid Software Development</Text>
            <Text style={style.innerText2} >Using agile practices and the modern tech stack to achieve business goals</Text>
          </View>
        </View>
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Image source={logo} style={{ justifyContent: 'center' }} />
        </View>

        <Divider />
        <Text style={style.p} >We are a software consulting firm that specializes in full-cycle web application development. We service startups and small local businesses that are focused on technology. We utilize modern best development practices and provide our clients with cost-effective and performant tools.</Text>

        <Header>Services</Header>
                
        <Text style={style.p} >We offer two parallel services to our clients. We provide technical solutions to high-tech startups and mid-sized companies. We offer complete software solutions, support of existing solutions, data migrations, feature implementation, iterative development, and training.  </Text>
        <Text style={style.p} >In this parallel, we perform business analysis, find critical issues & discovery across all areas of business (core value proposition, operations, sales, marketing, and finance) to propose quick wins and elimination of bottlenecks - how a manageable amount of effort can make the most impact on the business's bottom line. Additionally, we provide recommendations on sorporate culture, processes, and tools. High-impact business consulting to startups and companies in emerging markets.  </Text>

        <Header>Software Development</Header>
        <Text style={style.p} >We do web application development, integration with external services, deployments, automation, wireframing and prototyping, as well as monitoring and scaling of existing applications. We will also go refactoring/rewriting of an existing application and migrating it from old codebase to nice and shiny new paradigm.</Text>
        
        { ourServicesCards }

      </View>)
  }
}

