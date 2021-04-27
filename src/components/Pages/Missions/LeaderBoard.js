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

class Leaderboard extends Component {
	onDetails =()=>{
		Actions.leaderboardDetails()
	}
	render() {
		return (
			<>
				<StatusBar backgroundColor='#44C0C6' />
				<SafeAreaView style={styles.topSafeArea} />
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.bG}>
							<Header hamburger back title='2021 in 2021'/>
							{/*<View style={[styles.block,styles.bottomSpace,styles.spaceArea]}>
								<View style ={styles.roundBlks}>
					    			<Image style={{width: 49, height: 42, }} source={require('../../../assets/images/bike.png')} />
					    		</View>
					    		<View style={styles.rightCondent}>
							    	<Text style={styles.p}>asdasd</Text>
							    	<Text style={styles.workTitle}>dssfssdf 
							    	</Text>
							    	<Text style={styles.workTitle}>
							    	dgdg</Text>
						 			</View>
						 			<TouchableOpacity onPress={this.handleSubmit} style ={styles.editBlock}>
						    			<Image style={{width: 25, height: 25, }} source={require('../../../assets/images/edit.png')} />
						    	</TouchableOpacity>
							</View>*/}
					    </View>
					    <View style={styles.bodySpace}>
						    <TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
				    			<View style={styles.roundBlk}>
				    				<Text style={styles.count}>11</Text>
				    			</View>
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
				    			<View>
								    <Text style={styles.title}>45 min Sweat Steady Ride </Text>
								    <Text style={styles.name}>Jess king - 16/01/21 @ 12:58</Text>
									</View>
							    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
							      <Text style={styles.info}>3500 mi</Text>
							    </View>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.noborder]}>
				    			<View>
								    <Text style={styles.title}>45 min Sweat Steady Ride </Text>
								    <Text style={styles.name}>Jess king - 16/01/21 @ 12:58</Text>
									</View>
							    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
							      <Text style={styles.info}>3500 mi</Text>
							    </View>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.noborder]}>
				    			<View>
								    <Text style={styles.title}>45 min Sweat Steady Ride </Text>
								    <Text style={styles.name}>Jess king - 16/01/21 @ 12:58</Text>
									</View>
							    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
							      <Text style={styles.info}>3500 mi</Text>
							    </View>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.noborder]}>
				    			<View>
								    <Text style={styles.title}>45 min Sweat Steady Ride </Text>
								    <Text style={styles.name}>Jess king - 16/01/21 @ 12:58</Text>
								</View>
							    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
							      <Text style={styles.info}>3500 mi</Text>
							    </View>
							</TouchableOpacity>
						</View>
					</ScrollView>
					<Footer style={styles.topSafeArea}/>
				</View>
			</>
		);
	}
}

export default Leaderboard;
