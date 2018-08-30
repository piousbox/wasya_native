import React from 'react'
import { 
  StyleSheet, Text, View,
  Dimensions,
} from 'react-native'
import Image from 'react-native-scalable-image'
import { Icon, Card, Button, } from 'react-native-elements'

import { Header, Header2 } from './utils'

const bannerPath = './images/bg5.jpg'
const banner = require(bannerPath)
const logoPath = './images/logo4.png'
const logo = require(logoPath)

import victor  from './images/team/victor_500x600.jpg'
import oleg    from './images/team/oleg_500x600.jpg'
import kim     from './images/team/kim_500x600.jpg'
import brad    from './images/team/brad_500x600.jpg'
import steve   from './images/team/steve_500x600.jpg'
import bondar  from './images/team/bondar_500x600.jpg'

import team    from './team'

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
    let color = this.props.color || 'black'
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} >
        <View style={{ width: '30%', borderBottomColor: color, borderBottomWidth: 1, height: '50%' }} />
        <View style={{ width: 24, }} ><Icon color={color} name='filter-vintage' /></View>
        <View style={{ width: '30%', borderBottomColor: color, borderBottomWidth: 1, height: '50%' }} />
      </View>
      )
  }
}



class MyCard extends React.Component {
  render () {
    return (
      <View>
        <Card image={this.props.img} imageStyle={{ height: 200 }}>
          <Text style={style.cardTitle} >{this.props.title}</Text>
          <Divider />
          <Text style={style.cardDescription} >{this.props.description}</Text>
        </Card>
      </View>
      )
  }
}

class TeamMember extends React.Component {
  render () {
    return (
      <View>
        <Card image={this.props.guy.image} imageStyle={{ height: 200 }}>
          <Text>{this.props.guy.name}</Text>
          <Text>{this.props.guy.title}</Text>
        </Card>
      </View>
    )
  }
}

class MainBanner extends React.Component {
  render() {
    const servicesCards = [
      { title: "Ruby on Rails", img: require("./images/400x200/ruby.jpg"), description: "Our framework for rapid prototyping and non-real-time applications is Ruby on Rails. We use it for constructing APIs, providing backend for websites, generating static websites, and as the tool for general scripting." },
      { title: "Node.js", img: require("./images/400x200/node.jpg"), description: "Node.js and Socket.js are our tools of choice for implementing real-time applications, event-driven applications, and microservices. We tend to use Node in combination with websockets." },
      { title: "React.js", img: require("./images/400x200/react.jpg"), description: "We write frontend code using the React framework. It is the most popular front-end ecosystem currently available. Previously, we have worked a lot with Backbone and Angular.js." },
      { title: "Chef", img: require("./images/400x200/chef.jpg"), description: "We wire up build/deploy pipelines using Chef. Simple deployments are done with standalone chef. For more complex cases we use server-client architecture., in which a change is propagated to each machine from a central repository." },
      { title: "API's", img: require("./images/400x200/api.jpg"), description: "We are experts at building custom API's (ReSTful as well as event-driven). Documentation with Docs.io (formerly swagger). Test-driven. Deployed at scale." },
      { title: "MVP's", img: require("./images/400x200/mvp.jpg"), description: "One of the most important steps in develoing consumer facing applications is market validation. We employ the lean methologody & iterative development to build versions of the product that effectively validate the market and the concept." },
      { title: "UI/UX", img: require("./images/400x200/uiux.jpg"), description: "Modern software tools are expected to be highly usable, to the degree of not requiring documentation. The user interface should be self-explanatory, and the user experience intuitive." },
      { title: "Devops", img: require("./images/400x200/devops.jpg"), description: "The mythical creature of Devops does not lend itself to being caught easily. We script repetitive maintenance tasks, automate build/deploy pipelines, and enable efficient operation." },
    ]
    let ourServicesCards = []
    servicesCards.forEach((item, idx) => {
      ourServicesCards.push(<MyCard key={idx} {...item} />)
    })

    return (
      <View >
        { /* <View>
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

        <View style={{ paddingTop: 20 }}>
          <Header>Our Process</Header>
          <Text style={style.p} >We work in iterative cycles. The methodology we use is sprint and kanban. Our preferred sprint length is the industry-standard 2 weeks. Kanban refers to keeping tracks of small, accomplishable tasks by means of cards, and moving the cards through lanes. Our typical lanes are "todo", "doing" and "done", although this varies as the complexity grows.</Text>
          <View style={{ alignItems: 'center' }}>
            <Button titleStyle={{ fontWeight: "700" }}
              buttonStyle={{ 
                padding: 20,
                backgroundColor: "green",
                width: 200,
                height: 45,
              }} title="Read More" />
          </View>
        </View>
        
        <View>
          <Header>Team</Header>
          <Header2>Our Leadership</Header2>
          <TeamMember guy={team.zach} />
          <TeamMember guy={team.steve} />
          <TeamMember guy={team.oleg} />
          <TeamMember guy={team.bondar} />
          <Header2>Development Team</Header2>
          <TeamMember guy={team.victor} />
          <TeamMember guy={team.kim} />
          <TeamMember guy={team.brad} />
          <TeamMember guy={team.bugra} />
          <TeamMember guy={team.jonathan} />
          <TeamMember guy={team.theresa} />
          <TeamMember guy={team.bibas} />
          <TeamMember guy={team.kay} />
        </View>
        */ }

      </View>)
  }
}

export default MainBanner
export { Divider, }

