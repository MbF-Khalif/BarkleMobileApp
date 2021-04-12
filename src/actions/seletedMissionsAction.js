import { ADD_MISSION } from './types';

export const addMission = (mission) => ({
    type: ADD_MISSION,
    mission
});

export const addMissionAction = (data) => dispatch => {
    dispatch(addMission(data));
};


