import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isEmpty } from "lodash";

import {connect} from 'react-redux';
import Login from '../../routes/Auth/Login';
import ConfirmEmail from '../../routes/Auth/ConfirmEmail'; 
import Email from '../../routes/Auth/Email'; 
import RetrievePassword from '../../routes/Auth/RetrievePassword'; 
import BarkleLogin from '../../routes/Auth/BarkleLogin'; 
import ChangePassword from '../../routes/Auth/ChangePassword'; 
import Success from '../../routes/Auth/Success';
import Signup from '../../routes/Auth/signup';
import Dashboard from '../../routes/Dashboard';
import Events from '../../routes/Events';
import Missions from '../../routes/Missions';
import CreateEvent from '../../routes/NewEvent';
import Postdistance from '../../routes/PostDistance';
import CreateMissions from '../../routes/NewMissions';
import Profile from '../../routes/Profile';
import Individual from '../../routes/Missions/individual';
import ChallengesDetails from '../../routes/challenges/challengesDetails';
import Challenges from '../../routes/challenges/challenges';
import Leaderboard from '../../routes/Missions/LeaderBoard';
import LeaderboardDetails from '../../routes/Missions/LeaderBoardDetails';
import Team from '../../routes/Missions/team';
import EventsDetails from '../../routes/EventsDetails';
import Ogc from '../../routes/ogc';
import Tools from '../../routes/Tools';

const ConnectedRoute = connect()(Router);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bearerAccess: '',
      userId: ''
    }
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const tocken = await AsyncStorage.getItem("bearertoken");
    const userId = await AsyncStorage.getItem("barkleUserID");
    this.setState({
      bearerAccess: tocken,
      userId: userId
    })
  }
   
  render() {
    const {userId} = this.state;
    return (
        <ConnectedRoute>
          <Stack key='root' hideNavBar={true} panHandlers={null} swipeEnabled={false}>
            <Scene key='barklelogin' component={BarkleLogin} />
            <Scene key='confirmEmail' component={ConfirmEmail} />
            <Scene key='retrievePassword' component={RetrievePassword} />
            <Scene key='email' component={Email} />
            <Scene key='changePassword' component={ChangePassword} />
            <Scene key='signup' component={Signup} />
            <Scene key='success' component={Success} />
            {isEmpty(userId) ? <Scene key='login' component={Login} />:
             <Scene key='dashboard' component={Dashboard} initial />}
            <Scene key='events' component={Events} />
            <Scene key='eventsDetails' component={EventsDetails} />
            <Scene key='createEvent' component={CreateEvent} />
            <Scene key='editEvent' path={'/event/:id/'} component={CreateEvent} />
            <Scene key='postDistance' component={Postdistance} />
            <Scene key='createMissions' component={CreateMissions} />
            <Scene key='profile' component={Profile} />
            <Scene key='individual' component={Individual} />
            <Scene key='leaderboard' component={Leaderboard} />
            <Scene key='leaderboardDetails' component={LeaderboardDetails} />
            <Scene key='missions' component={Missions} />
            <Scene key='team' component={Team} />
            <Scene key='challenges' component={Challenges}  />
            <Scene key='ogc' component={Ogc} />
            <Scene key='tools' component={Tools} />
            <Scene key='challengesDetails' component={ChallengesDetails}  />
          </Stack>
        </ConnectedRoute>  
    );
  }
}

export default App;