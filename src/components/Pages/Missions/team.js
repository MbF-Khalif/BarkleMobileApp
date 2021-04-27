import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import H2 from "../../Common/Typos/h2";
import { Separator } from 'native-base';
import RadioButton from '../../Common/FormElements/Checkbox/select';
import List from "../../Common/List";
import Range from "./range";
import Footer from "../../Common/Footer";
import { styles } from './style';

const DATA = [
  {
    name: 'Andy Webber',
    info: '260.2 mi / 13%',
    lead: 1
  },
  {
    name: 'Ollie Beukes',
    info: '197.1 mi / 12%',
    lead: 2
  },
  {
    name: 'Christopher Fielding',
    info: '197.1 mi / 12%',
    lead: 3
  },
];
 
class Team extends Component {
	constructor(){
        super();
	this.state={
	  list:[
	      {
	        id:1,
	        title: 'Getting Started',
	        body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
	      },
	      {
	        id:2,
	        title: 'Components',
	        body: 'AccordionList,Collapse,CollapseHeader & CollapseBody'
	      }
	      ],
		}
	}
	selectAddress(type) {
		console.log(type)
	}
	_head(item){
    return(
        <Separator bordered style={{alignItems:'center'}}>
          <Text>{item.title}</Text>
        </Separator>
    );
}

_body(item){
    return (
        <View style={{padding:10}}>
          <Text style={{textAlign:'center'}}>{item.body}</Text>
        </View>
    );
}
	render() {
		const distance = ((117.7/1903.3) * 100).toFixed(2);
		const time = ((6/359) * 100);
		const PROP = [
          {
            key: 'one',
            text: 'one',
          },
          {
            key: 'two',
            text: 'two',
          },
        ];
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.bG}>
						<View style={styles.profile}>
							<TouchableOpacity onPress={this.onBack} style={styles.imgBlk}>
								<Image style={{width: 30, height: 20, }} source={require('../../../assets/images/backArrow.png')} />
							</TouchableOpacity>
							<View style={styles.titleBlk}>
								<H2 style={{ paddingRight: 5}} >barkle</H2>
								<Image style={{width: 54, height: 35, }} source={require('../../../assets/images/logo.png')} />
							</View>
					    </View>
					    <View style={styles.eventsDetails}>
					    	<Text style={styles.p}>Missions</Text>
					    	<Text style={styles.workTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
					    </View>
				    </View>
				    <View style={styles.body}>
				    	<Range 
				    		title="Distance - 2021 miles"
				    		width={`${distance}%`}
				    		finished="117.7 miles"
				    		pending="1903.3 miles"
				    	/>
				    	<Range 
				    		title="Time - 365 days"
				    		width={`${time}%`}
				    		finished="6 days"
				    		pending="359 days"
				    	/>
				    	<View>
				    	<Text style={styles.sectionTitle}>Leaderboard</Text>
				    		<List data={DATA} />
				    	</View>
				    	<Collapse>
						    <CollapseHeader>
						      <View>
						        <Text>Accordion header</Text>
						      </View>
						    </CollapseHeader>
						    <CollapseBody>
						      <Text>Accordion body Ta daa!</Text>
						    </CollapseBody>
						</Collapse>



						<AccordionList
            list={this.state.list}
            header={this._head}
            body={this._body}
            keyExtractor={item => `${item.id}`}
          />
						<RadioButton PROP={PROP} selectAdd={this.selectAddress.bind(this)} />
					</View>
				    <Footer/>
				</ScrollView>
			</View>
		);
	}
}

export default Team;
