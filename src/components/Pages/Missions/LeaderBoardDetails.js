import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import H2 from "../../Common/Typos/h2";
import P from "../../Common/Typos/p";
import List from "../../Common/List";
import Range from "./range";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import { styles } from './style';

class leaderboardDetails extends Component {
	onDetails =()=>{
		// Actions.leaderboardDetails()
	}
	render() {
		return (
			<>
				<StatusBar backgroundColor='#44C0C6' />
				<SafeAreaView style={styles.topSafeArea} />
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.bG}>
							<Header back title='2021 in 2021'/>
					    </View>
					    <View style={styles.bodySpace}>
						    <TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
				    			<View>
								    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
								    <Text style={styles.name}>STEVEN CONNELL</Text>
									</View>
							    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
							      <Text style={styles.info}>3500 mi</Text>
							      <Text style={styles.lead}>25%</Text>
							    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.noborder]}>
					    			<View style={{width: '50%'}}>
									    <Text style={styles.name}>output</Text>
									    <Text style={styles.speedText}>454 <Text style={styles.smallText}>kj</Text></Text>
										</View>
								    <View style={{width: '50%'}}>
								      <Text style={styles.name}>DISTANCE</Text>
									    <Text style={styles.speedText}>454 <Text style={styles.smallText}>mi</Text></Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.noborder]}>
					    			<View style={{width: '50%'}}>
									    <Text style={styles.name}>AVG OUTPUT</Text>
									    <Text style={styles.speedText}>454 <Text style={styles.smallText}>kcal</Text></Text>
										</View>
								    <View style={{width: '50%'}}>
								      <Text style={styles.name}>AVG OUTPUT</Text>
									    <Text style={styles.speedText}> 146<Text style={styles.smallText}>watts</Text></Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.noborder]}>
					    			<View style={{width: '50%'}}>
									    <Text style={styles.name}>output</Text>
									    <Text style={styles.speedText}>454 <Text style={styles.smallText}>kj</Text></Text>
										</View>
								    <View style={{width: '50%'}}>
								      <Text style={styles.name}>DISTANCE</Text>
									    <Text style={styles.speedText}>454 <Text style={styles.smallText}>mi</Text></Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.noborder]}>
					    			<View style={{width: '50%'}}>
									    <Text style={styles.name}>CALORIES</Text>
									    <Text style={styles.speedText}>454 <Text style={styles.smallText}>kcal</Text></Text>
										</View>
								    <View style={{width: '50%'}}>
								      <Text style={styles.name}>AVG OUTPUT</Text>
									    <Text style={styles.speedText}>146<Text style={styles.smallText}>watts</Text></Text>
								    </View>
								</TouchableOpacity>
								<View style={[styles.borderTop,styles.activity]}>
									<TouchableOpacity style={styles.singleLine}>
										<View style={styles.arrowBox}></View>
										<Text style={[styles.name,styles.arrowText]}>Previous Activity</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.singleLine}>
										<Text style={[styles.name,styles.arrowText,styles.textAlign]}>NEXT Activity</Text>
										<View style={styles.arrowBox}></View>
									</TouchableOpacity>
								</View>
							</View>
					</ScrollView>
					<Footer style={styles.topSafeArea}/>
				</View>
			</>
		);
	}
}

export default leaderboardDetails;
