



export interface TodoState{
	loading:boolean;
	todos:any[];
	error:null | string;
	page:number;
	limit:number;
}

export enum TodoActionTypes{
	FETCH_TODO = 'FETCH_TODO',
	FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
	FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
	SET_TODO_PAGE = 'SET_TODO_PAGE',
}	

interface FetchTodoSuccessAction{
	type: TodoActionTypes.FETCH_TODO_SUCCESS,
	payload:any[]
}
interface FetchTodoErrorAction{
	type: TodoActionTypes.FETCH_TODO_ERROR,
	payload:string
}
interface FetchTodoAction{
	type: TodoActionTypes.FETCH_TODO
}
interface SetTodoPageAction{
	type: TodoActionTypes.SET_TODO_PAGE,
	payload:number
}


export type TodoAction = FetchTodoAction | FetchTodoErrorAction | FetchTodoSuccessAction | SetTodoPageAction