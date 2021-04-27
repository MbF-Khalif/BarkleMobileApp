import React, { Component } from 'react';
import { View, Text, Image,ScrollView,Dimensions, TouchableOpacity} from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent,SlideAnimation  } from 'react-native-popup-dialog';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import MenuItems from './menuItems';
import Menu from './menu';
import H2 from "../Typos/h2";
import H4 from "../Typos/h4";
import H3 from "../Typos/h3";
import P from "../Typos/p";

import {config} from '../../../theme/config';

import { styles } from './style';

class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      bodyScroll: false
    }
  }
  componentDidMount() {
        this.getData();
    }

    async getData(){
        var userId = await AsyncStorage.getItem('user_id');
        this.setState({
            userId,
        })
    }

    logOut = () => {
        AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => Alert.alert('Successfully logged out'));
        Actions.welcome();
        this.props.deleteAllItemAction();
    }
    toHome = () => {
        Actions.dashboard();
        // this.props.deleteAllItemAction();
        this.props.menuClick;
        this.setState({
					openMenu: false,
				})
    }
    toRides = () => {
        Actions.events();
        // this.props.deleteAllItemAction();
        this.props.menuClick;
        this.setState({
					openMenu: false,
				})
    }
    toMissions = () => {
        Actions.missions();
        // this.props.deleteAllItemAction();
        this.props.menuClick;
         this.setState({
					openMenu: false,
				})
    }
    toChallenges = () => {
        Actions.challenges();
        // this.props.deleteAllItemAction();
        this.props.menuClick;
         this.setState({
					openMenu: false,
				})
    }
    toSettings = () => {
        Actions.tools();
        // this.props.deleteAllItemAction();
        this.props.menuClick;
         this.setState({
					openMenu: false,
				})
    }


	onBack = () => {
		Actions.pop();
	}
	onPress = ()=> {
		this.setState({
			openMenu: false,
			bodyScroll: true,
		})
		{ transform: [{ scale: 0 }] }
		setTimeout(()=>{
			const {bodyScroll} = this.state;
	    	console.log(bodyScroll,'hed')
			this.props.passStateValue(bodyScroll);
	    	
	    },.1)
	}
	menuOpen = ()=> {
		this.setState({
			openMenu: true,
			bodyScroll: false,
		})
		setTimeout(()=>{
			const {bodyScroll} = this.state;
	    	console.log(bodyScroll,'hed')
			this.props.passStateValue(bodyScroll);
	    	
	    },500)
		
	}
	
  render() {
  	const {style,back,title,hamburger,noBack} = this.props;
  	const {openMenu,bodyScroll} = this.state;	
  	  	console.log(bodyScroll,'bodyScroll')	

    return (
    	<View>
    		<Dialog visible={this.state.openMenu} 
	    		overlayBackgroundColor='transparent'
	    		dialogAnimation={new SlideAnimation({
				      slideFrom: 'right',
				      initialValue:0,
				      animationDuration: 100, 
				    })}
	    		width = {'100%'} height = {'100%'}>
    		  <ScrollView >
            <DialogContent style={styles.menuBody}>
	            <View style={styles.head}>
	              <View style={[styles.titleBlk,styles.blockEvent]}>
	                <H4 style={{ paddingRight: 5,color:'#FFC1C1',fontSize:23,
	                lineHeight: 23,paddingBottom: 0,marginBottom: 0}} >barkle</H4>
	                <Image style={{width: 41, height: 27, marginBottom:Platform.OS === 'ios' ? 10 : 10}} source={require('../../../assets/images/menuLogo.png')} />
	              </View>
	              <TouchableOpacity style={{paddingRight: 10}}onPress={this.onPress}>
	                <Image style={{width: 15, height: 15}} source={require('../../../assets/images/closem.png')} />
	              </TouchableOpacity>
	            </View>
			        <View style={styles.bodyMenu}>
		            <View>
		                <TouchableOpacity style={styles.menuSec} onPress={this.toHome}>
		                    <View style={styles.iconSec}>
		                        <Image style={{width: 24, height: 24}} source={require('../../../assets/images/dashboardm.png')} />
		                    </View>
		                    <View>
		                        <H3 style={styles.newColor}>dashboard</H3>
		                        <P style={styles.newColor}>view your rides, challenges, and missions at a glance</P>
		                    </View>
		                </TouchableOpacity>
		                <TouchableOpacity style={styles.menuSec} onPress={this.toRides}>
		                    <View style={styles.iconSec}>
		                        <Image style={{width: 24, height: 24}} source={require('../../../assets/images/rides.png')} />
		                    </View>
		                    <View>
		                        <H3 style={styles.newColor}>rides</H3>
		                        <P style={styles.newColor}>see upcoming rides, or view the leaderboard of past rides</P>
		                    </View>
		                </TouchableOpacity>
		                <TouchableOpacity style={styles.menuSec} onPress={this.toMissions}>
		                    <View style={styles.iconSec}>
		                        <Image style={{width: 24, height: 24}} source={require('../../../assets/images/missions.png')} />
		                    </View>
		                    <View>
		                        <H3 style={styles.newColor}>missions</H3>
		                        <P style={styles.newColor}>take part and follow live group leaderboard updates</P>
		                    </View>
		                </TouchableOpacity>
			                <TouchableOpacity style={styles.menuSec} onPress={this.toChallenges}>
			                    <View style={styles.iconSec}>
			                        <Image style={{width: 24, height: 24}} source={require('../../../assets/images/challenges.png')} />
			                    </View>
			                    <View>
			                        <H3 style={styles.newColor}>challenges</H3>
			                        <P style={styles.newColor}>join a challenge and engage with fellow riders in your group</P>
			                    </View>
			                </TouchableOpacity>
			                 <TouchableOpacity style={styles.menuSec} onPress={this.toSettings}>
			                    <View style={styles.iconSec}>
			                        <Image style={{width: 24, height: 24}} source={require('../../../assets/images/drive.png')} />
			                    </View>
			                    <View>
			                        <H3 style={styles.newColor}>tools</H3>
			                        <P style={styles.newColor}>fine tune your performance and go to the next level</P>
			                    </View>
			                </TouchableOpacity>
		            </View>
		          </View>
            </DialogContent>
          </ScrollView>
        </Dialog>
      {/*openMenu && <MenuItems onPress={this.onPress}/>*/}
    		<View style={[styles.profile,style]}>
				{back && <TouchableOpacity onPress={this.onBack} style={styles.imgBlk}>
					<Image style={{width: 30, height: 20 }} source={require('../../../assets/images/backArrow.png')} />
				</TouchableOpacity>}
				<View style={[styles.headWidth,noBack && styles.fullWidth]}>
				<View style={styles.borderTop}>
			  	<View style={styles.borderTops}></View>
			  </View>
					<View style={styles.titleBlk}>
					<H2 style={{ paddingRight: 5}} >barkle</H2>
					<Image style={{width: 54, height: 35, marginBottom:Platform.OS === 'ios' ? 5 : 10}} source={require('../../../assets/images/logo.png')} />
					{hamburger && <TouchableOpacity onPress={this.menuOpen} style={{marginLeft: 'auto',marginRight: 20}}>
						<Image style={{width: 24, height: 16}} source={require('../../../assets/images/Hamburger.png')} />
					</TouchableOpacity>}
					</View>
					<View>
					{title && <Text style={styles.title}>{title}</Text>}
					</View>
				</View>
		    </View>
		</View>
    );
  }
}


Header.propTypes = {
    style: PropTypes.any,
    back: PropTypes.any,
    title: PropTypes.any,
    hamburger: PropTypes.any,
    noBack: PropTypes.any,
};


export default Header;