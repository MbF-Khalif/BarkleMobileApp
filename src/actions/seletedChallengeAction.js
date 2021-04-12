import { ADD_CHALLENGE } from './types';

export const addChallenge = (challenges) => ({
    type: ADD_CHALLENGE,
    challenges
});

export const addChallengeAction = (data) => dispatch => {
    dispatch(addChallenge(data));
};


