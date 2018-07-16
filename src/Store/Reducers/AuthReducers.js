import AuthActions from '../Actions/AuthActions';

const INITIAL_STATE=
{
    user: null,
  isLoading: false,
  isError: false,
  errorMsg: ""
};
 export default function AuthReducers(state=INITIAL_STATE,action)
 {
    switch(action.type)
    {
        //=================================SIGNUP_REDUCERS===============================================
        case AuthActions.SIGNUP_REQUEST:
        return Object.assign({},state,{isLoading: true});
        case AuthActions.SIGNUP_SUCCESS:
        return state;
        case AuthActions.SIGNUP_FAILURE:
        return Object.assign({},state,{isLoading:false,isError:false,errorMsg:action.payload});
        //================================SIGNIN_REDUCERS=================================================
        case AuthActions.SIGNIN_REQUEST:
        return Object.assign({},state,{isLoading:true});
        case AuthActions.SIGNIN_SUCCESS:
        return Object.assign({},state,{isLoading:false,user:action.payload});
        case AuthActions.SIGNIN_FAILURE:
        return Object.assign({},state,{isLoading:false,isError:true,user:action.payload});
        //===============================CHECKUSER_REDUCERS===============================================
        case AuthActions.CHECK_USER_REQUEST:
        return Object.assign({},state,{isLoading:true})
        case AuthActions.CHECK_USER_SUCCESS:
        return Object.assign({},state,{user:action.payload,isLoading:false});
        //================================SIGNOUT_REDUCERS================================================
        case AuthActions.SIGNOUT_REQUEST:
        return Object.assign({},state,{isLoading:true});
        case AuthActions.SIGNOUT_SUCCESS:
        return Object.assign({},state,{isLoading:false,user:action.payload})
        case AuthActions.SIGNOUT_FAILURE:
        return Object.assign({},state,{isLoading:false,isError:true,errorMsg:action.payload})
        //=================================================================================================

        default:
        return state;
    }
 }