import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar,SafeAreaView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validMobileNumber } from '../../Common/Validations/rules';
import { isEmpty, map,filter } from "lodash";
import { connect } from 'react-redux';
import moment from 'moment';
import TextInput from "../../Common/FormElements/TextBox";

import Card from "../../Common/Card/card";
import H2 from "../../Common/Typos/h2";
import H3 from "../../Common/Typos/h3";
import P from "../../Common/Typos/p";
import Header from "../../Common/Header";
import Button from "../../Common/FormElements/Button";
import LinkList from "../../Common/LinkList";

import { config } from "../../../theme/config";
import { addMissionAction } from '../../../actions/seletedMissionsAction';
import { getAllMissionsAction } from '../../../actions/getAllMissions';

import { styles } from './style';
 
class Ogc extends Component {
	constructor(){
        super();
        this.state = {
            upcoming: false,
            completed: false,
            activeMissions: true,
            bodyScroll: true,
            allMissions:[],
            kj:'',
            mins: '',
            output:''
        }
    }   
    componentDidMount(){
	    this.getData();
	  }
    async getData() {
	    const tocken = await AsyncStorage.getItem("bearertoken");
	    const userId = await AsyncStorage.getItem("barkleUserID");
	    const { bearerAccess } = this.state;
	    this.setState({
	      bearerAccess: tocken,
	      userId: userId
	    })
	    const headers = {
	      Authorization: "Bearer " + tocken,
	    };
			this.props.getAllMissionsAction(headers).then(res =>{
				this.setState({
					allMissions: res.getAllMissions.data.message
				})
		      console.log(res,'res')
		    }).catch(err => {
		      console.log(err.response,err,'errorgetAllMissionsAction')
	    });
		}

	onEventsDetails = (el) => {
		this.props.addMissionAction(el);
		console.log(el,'onEventsDetails')
		Actions.individual();
	}
	handleSubmit = () => {
		const {mins ,kj} = this.state;
		
	}
	// onChange = (value) => {
	// 	console.log(value)
	// }
	
    passStateValue = (el) => {
		this.setState({
			bodyScroll:el
		})
	}

	render() {
		const { completed,mins,bodyScroll,output, upcoming,activeMissions,allMissions,kj } = this.state;
		const minuts = (mins * 60 / 1000)
		const kiloJule = Math.round(kj/minuts);
		console.log(kiloJule === 'NaN' ?1:0);
		return (
			<>
				<StatusBar backgroundColor='#F45B56' />
				<SafeAreaView style={styles.topSafeArea} />
				<ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} style={styles.topSafeArea}>
				<View style={styles.container} >
					<Header hamburger back passStateValue={this.passStateValue} style={{paddingBottom:18}}/>
					<View style={styles.centerBlk}>
							   	<View style={styles.body}>
							   		<H3 style={{ paddingBottom: 40,textAlign: 'center'}}>Output Goal Calculator</H3>
							   		<Image style={{ height: 166}} source={require('../../../assets/images/ogc.png')}/>
							   		<View style={{paddingVertical: 50,flex: 0,flexDirection: 'row',flexWrap: 'wrap',borderBottomWidth:0.75,
        borderBottomColor:'#d3d3d3',marginBottom: 40}}>
								   		<Text style={styles.largeFont}>to achieve a target output of </Text>
								   		<View style={styles.textPlace}><TextInput
								        style={styles.input}
								        value={kj}
								         name='kj'
								         keyboardType="phone-pad"
								         lastchild
								        onChange={(value) => this.setState({ kj: validMobileNumber(value)})}
								      /></View>
								      <Text style={styles.largeFont}> kj in</Text>
									    <View style={styles.textPlace}>
									      <TextInput
									        style={styles.input}
									        value={mins}
									        keyboardType="phone-pad"
									        lastchild
									          onChange={(value) => this.setState({ mins: validMobileNumber(value)})}
									      />
									    </View>
									    <Text style={styles.largeFont}>mins, you must hold an average output of</Text>
									    <View style={styles.textPlace}>
										    <Text style={[styles.input,styles.spaceTag]}>{!isEmpty(kj) && !isEmpty(mins) && mins != 0 && kiloJule}</Text>
									    </View>
									    <Text style={styles.largeFont}>watts 🤟</Text>
								    </View>
										<Text style={styles.normalText}>If you’re looking to push yourself to achieve this incredible output, then you might want to <TouchableOpacity style={styles.borderText}><Text style={styles.linkText}>create an event</Text></TouchableOpacity> and invite others to help you race to the finish. That LB’s going to look quite spicy!!</Text>		
									</View>
					</View>
				</View>
				</ScrollView>
			</>
		);
	}
}

export default connect(null, {addMissionAction, getAllMissionsAction })(Ogc);
