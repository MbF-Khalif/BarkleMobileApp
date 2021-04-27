import axios from 'axios';

const apiEndPoint = 'https://api.onepeloton.com';
const apiBarkleEndPoint = 'https://uat.barkle.io/api';
// const apiBarkleEndPoint = 'https://bulldogs.barkle.io/public/api';

export default {
	loginAction: {
        loginDataAction: (data) => 
            axios.post(`${apiEndPoint}/auth/login`, data).then(res => res),
    },
    barkleLoginAction: {
        barkleLoginDataAction: (data) => 
            axios.post(`${apiBarkleEndPoint}/auth/login`, data).then(res => res),
    },
    signUpAction: {
        signUpDataAction: (data) => 
            axios.post(`${apiBarkleEndPoint}/auth/register`, data).then(res => res),
    },
    createEventAction: {
        eventDataAction: (data, headers) => 
            axios.post(`${apiBarkleEndPoint}/auth/create_event`, data, {headers:headers}).then(res => res),
    },
    editEventAction: {
        eventDataAction: (data, headers) => 
            axios.post(`${apiBarkleEndPoint}/auth/update_event`, data, {headers:headers}).then(res => res),
    },
    createMissionsAction: {
         createMissionsDataAction: (data,headers) => 
            axios.post(`${apiBarkleEndPoint}/auth/create_mission`, data,{headers:headers}).then(res => res),
    },
    goingmaybeEventAction: {
        eventgoingmaybeAction: (data,headers) => 
            axios.post(`${apiBarkleEndPoint}/auth/update_event_type`, data,{headers:headers}).then(res => res),
    }, 
    getmaybeAction: {
        getmaybeDataAction: (evevtID,headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/get_maybe_list/${evevtID}`,{headers:headers}).then(res => res),
    }, 
    getongoingAction: {
        getongoingDataAction: (evevtID,headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/get_going_list/${evevtID}`,{headers:headers}).then(res => res),
    },  
    checkgoingmaybeAction: {
        checkgoingmaybeDataAction: (eventsIds,userID,headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/check_going_maybe/${eventsIds}/${userID}`,{headers:headers}).then(res => res),
    }, 
    getuseridEventAction: {
        getuserideventDataAction: (data,headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/list_event_userid/${data}`,{headers:headers}).then(res => res),
    }, 
    eventByIdAction: {
        eventByIdData: (id, headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/list_event_id/${id}`, {headers:headers}).then(res => res),
    },
    getgoingmaybeAction: {
        getgoingmaybeDataAction: (data,headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/get_going_maybe_list_by_user/${data}`,{headers:headers}).then(res => res),
    },
    getUserAction: {
        getUserDataAction: (userId,headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/get_user/${userId}`,{headers:headers}).then(res => res),
    }, 
    forgotPasswordAction: {
        forgotDataAction: (data) => 
            axios.post(`${apiBarkleEndPoint}/auth/check_user`, data).then(res => res),
    },
    changePasswordAction: {
        changePasswordDataAction: (data) => 
            axios.post(`${apiBarkleEndPoint}/auth/forgot_password`, data).then(res => res),
    },
    getAllEventAction: {
        getAllDataAction: (headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/list_event`, {headers:headers}).then(res => res),
    }, 
    getTeamsAction: {
        getTeamsDataAction: (headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/teams`, {headers:headers}).then(res => res),
    },
    getAllChallengeAction: {
        getAllChallengeDataAction: (headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/challanges`, {headers:headers}).then(res => res),
    }, 
    getAllChallengeIdAction: {
        getAllChallengeIdDataAction: (userId,challID,headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/get_challange/${challID}/${userId}`, {headers:headers}).then(res => res),
    },
    getLeaderboard: {
        getLeaderboardAction: () => 
            axios.get(`${apiBarkleEndPoint}/auth/get_leaderboard`).then(res => res),
    },
    getAllMissionsAction: {
        getAllMissionsDataAction: (headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/list_mission`, {headers:headers}).then(res => res),
    }, 
    joinMissionsAction: {
        joinMissionsDataAction: (userId,missionID,headers) => 
            axios.get(`${apiBarkleEndPoint}/auth/join_mission/${userId}/${missionID}`, {headers:headers}).then(res => res),
    },
    postADistanceAction: {
        postADistanceDataAction: (data,headers) => 
            axios.post(`${apiBarkleEndPoint}/auth/postadistance`, data,{headers:headers}).then(res => res),
    },
    workoutsAction: {
    	workoutsDataAction: (userId) =>
    		axios.get(`${apiEndPoint}/api/user/${userId}/workouts`).then(res => res),
    },
    getInstructor: {
        getInstructorData: (headers) =>
            axios.get(`https://uat.barkle.io/public/api/auth/get_inst_list`, {headers:headers}).then(res => res),
    },
    classType: {
        classTypeData: (headers) =>
            axios.get(`https://uat.barkle.io/public/api/auth/get_peloton_class`, {headers:headers}).then(res => res),
    },
    classTime: {
        classTimeData: (headers) =>
            axios.get(`https://uat.barkle.io/public/api/auth/get_datetime_class/is_encore/731d7b7f6b414a49892c21f01e25317d`, {headers:headers}).then(res => res),
    }
};