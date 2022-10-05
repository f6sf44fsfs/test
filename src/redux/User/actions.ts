import { User } from "./types";

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserRequest = (userId: number) => ({
    type: FETCH_USER_REQUEST,
    payload: {userId}
});

export const fetchUserSuccess = (user: User) => ({
    type: FETCH_USER_SUCCESS,
    payload: {user}
});

export default {
    fetchUserRequest,
    fetchUserSuccess
}