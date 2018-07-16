export default class DatabaseActions
{
    static ADD_DONOR_REQUEST='ADD_DONOR_REQUEST';
    static ADD_DONOR_SUCCESS='ADD_DONOR_SUCCESS';
    static ADD_DONOR_FAILURE='ADD_DONOR_FAILURE';
    
    static GET_DONOR_REQUEST='GET_DONOR_REQUEST';
    static GET_DONOR_SUCCESS='GET_DONOR_SUCCESS';
    static GET_DONOR_FAILURE='GET_DONOR_FAILURE';


    static addDonor(donorPayload)
    {
        console.log("333333333333")
        return{
        type:DatabaseActions.ADD_DONOR_REQUEST,
        payload:donorPayload,
        };
    }
    static addDonorSuccess(payload)
    {  
        return{
        type:DatabaseActions.ADD_DONOR_SUCCESS,
        payload:payload
        };
    }
    static addDonorFailure(message)
    {
        return{
        type:DatabaseActions.ADD_DONOR_FAILURE,
        payload:message
        };
    }
    static getDonor()
    {
        return{
            type:DatabaseActions.GET_DONOR_REQUEST,
        }
    }
    static getDonorFailure(message)
    {
        return{
            type:DatabaseActions.GET_DONOR_FAILURE,
            payload:message
        }
    }
}