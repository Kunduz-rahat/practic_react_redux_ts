



 export enum UserActionTypes{
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_ERROR='FETCH_USER_ERROR',
	FETCH_USERS_SUCCESS='FETCH_USER_SUCCESS',
}


export interface UserState{
	users:any[],
	loading:boolean,
	error:null | string
}

interface FetchUserAction{
	type: UserActionTypes.FETCH_USER
}
interface FetchUserSuccessAction{
	type: UserActionTypes.FETCH_USERS_SUCCESS,
	payload:any[],
}
interface FetchUserErrorAction{
	type: UserActionTypes.FETCH_USER_ERROR,
	payload:string,
}

export type UserAction = FetchUserAction | FetchUserErrorAction | FetchUserSuccessAction
