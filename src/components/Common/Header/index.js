import React, { Component } from 'react';
import { View, Text, Image,ScrollView, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import MenuItems from './menuItems';
import H2 from "../Typos/h2";

import { styles } from './style';


class Header extends Component {
	constructor(props) {
      super(props);
      this.state = {
        openMenu: false,
        bodyScroll: false
      }
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
  	const {style,back,title} = this.props;
  	const {openMenu,bodyScroll} = this.state;	
  	  	console.log(bodyScroll,'bodyScroll')	

    return (
    	<View>
    		{openMenu && <MenuItems onPress={this.onPress}/>}
	    	<View style={[styles.profile,style]}>
				{back && <TouchableOpacity onPress={this.onBack} style={styles.imgBlk}>
					<Image style={{width: 30, height: 20 }} source={require('../../../assets/images/backArrow.png')} />
				</TouchableOpacity>}
				<View style={{width: '100%'}}>
					<View style={styles.titleBlk}>
					<H2 style={{ paddingRight: 5}} >barkle</H2>
					<Image style={{width: 54, height: 35, marginBottom:Platform.OS === 'ios' ? 5 : 10}} source={require('../../../assets/images/logo.png')} />
					<TouchableOpacity onPress={this.menuOpen} style={{left: 50}}>
						<Image style={{width: 24, height: 16}} source={require('../../../assets/images/Hamburger.png')} />
					</TouchableOpacity>
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
};


export default Header;