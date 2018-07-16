import DatabaseActions from '../Actions/DatabaseActions';

const INITIAL_STATE=
{
    donorList:[],
    isLoading:false,
    isError:false,
    errorMessage:""
    
}
export default function DatabaseReducers(state=INITIAL_STATE,action)
{
    switch(action.type)
    {
        case DatabaseActions.ADD_DONOR_REQUEST:
        console.log("44444444444")
        return Object.assign({},state,{isLoading:true});
        case DatabaseActions.ADD_DONOR_SUCCESS:
        Object.assign({},state,{isLoading:false,donorList:[...state.donorList,action.payload]});
        case DatabaseActions.ADD_DONOR_FAILURE:
        return Object.assign({},state,{isLoading:false,isError:true,errorMessage:action.payload})

        case DatabaseActions.GET_DONOR_REQUEST:
        Object.assign({},state,{isLoading:true});
        case DatabaseActions.GET_DONOR_SUCCESS:
        return Object.assign({},state,{donorList:action.payload});
        console.log(action.payload)
        case DatabaseActions.GET_DONOR_FAILURE:
        return Object.assign({},state,{isLoading:false,isError:true,errorMessage:action.payload})
        default:
        return state;
    }
}