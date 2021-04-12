// Empty placeholder to reserve reducer namespace.
// Otherwise redux may complain when we asyncrhonously
// inject reducers.

/**
 * Routing to be implemented
 */
import { combineReducers } from 'redux';

import logIn from '../reducers/logIn';
import barkleLogin from '../reducers/barkleLogin';
import signUp from '../reducers/signUp';
import createEvent from '../reducers/createEvent';
import editEvent from '../reducers/editEvent';
import createMissions from '../reducers/createMissions';
import getuseridEvent from '../reducers/getuserIDEvent';
import changePassword from '../reducers/changePassword';
import forgotPassword from '../reducers/forgotPassword';
import getAllEvent from '../reducers/getAllEvent';
import getAllMissions from '../reducers/getAllMissions';
import getAllChallenge from '../reducers/getChallenge';
import getAllChallengeId from '../reducers/getChallengeId';
import selectedMissions from '../reducers/seletedMissions';
import seletedChallenges from '../reducers/seletedChallenges';
import workOuts from '../reducers/workOuts';
import selectedEvent from '../reducers/selectedEvent';
import getInstructor from '../reducers/getInstructor';
import getClass from '../reducers/getClass';
import goingmaybeEvent from '../reducers/goingMaybeEvent';
import getmaybe from '../reducers/getMaybe';
import getongoing from '../reducers/getOnGoing';
import getUser from '../reducers/getUser';
import getgoingmaybe from '../reducers/getGoingMaybeList';
import checkgoingmaybe from '../reducers/checkGoingMaybe';
import getTeams from '../reducers/getTeams';
import eventById from '../reducers/eventById';
import leaderBoard from '../reducers/leaderBoard';

const appReducer = combineReducers({
    logIn,
    workOuts,
    signUp,
    barkleLogin,
    createEvent,
    editEvent,
    createMissions,
    getAllEvent,
    selectedMissions,
    selectedEvent,
    forgotPassword,
    changePassword,
    getInstructor,
    getClass,
    goingmaybeEvent,
    getuseridEvent,
    getmaybe,
    getUser,
    getongoing,
    getgoingmaybe,
    checkgoingmaybe,
    getAllMissions,
    getAllChallenge,
    getAllChallengeId,
    seletedChallenges,
    getTeams,
    eventById,
    leaderBoard
})

export const rootReducer = (state, action) => {
  return appReducer(state, action)
}

