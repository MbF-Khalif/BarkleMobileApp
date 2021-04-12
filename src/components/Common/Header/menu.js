import React, { Component } from 'react';
import { View, Text, Alert,Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { deleteAllItemAction } from '../../../actions/itemAction';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {config} from '../../../theme/config';
import H3 from "../Typos/h3";
import P from "../Typos/p";
import { styles } from './style';


class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userId: null
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
    }
    toRides = () => {
        Actions.events();
        // this.props.deleteAllItemAction();
        this.props.menuClick;
    }
    toMissions = () => {
        Actions.missions();
        // this.props.deleteAllItemAction();
        this.props.menuClick;
    }
    toChallenges = () => {
        Actions.challenges();
        // this.props.deleteAllItemAction();
        this.props.menuClick;
    }
    toSettings = () => {
        alert('1')
        Actions.barklelogin();
        // this.props.deleteAllItemAction();
        this.props.menuClick;
    }

    render() {
        const { userId } = this.state;
        const { menuClick } = this.props;
        const isThank = Actions.currentScene === 'thankyou' || Actions.currentScene === 'orderhistory';
        return (
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
        )
    }
}

export default connect(null, {})(Menu);
