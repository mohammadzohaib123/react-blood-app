export default class AuthActions
{
    static SIGNUP_REQUEST='SIGNUP_REQUEST';
    static SIGNUP_SUCCESS='SIGNUP_SUCCESS';
    static SIGNUP_FAILURE='SIGNUP_FAILURE';

    static SIGNIN_REQUEST='SIGNIN_REQUEST';
    static SIGNIN_SUCCESS='SIGNIN_SUCCESS';
    static SIGNIN_FAILURE='SIGNIN_FAILURE';

    static CHECK_USER_REQUEST='CHECK_USER_REQUEST';
    static CHECK_USER_SUCCESS='CHECK_USER_SUCCESS';

    static UPDATE_USER_PROFILE='UPDATE_USER_PROFILE';

    static SIGNOUT_REQUEST='SIGNOUT_REQUEST';
    static SIGNOUT_SUCCESS='SIGNOUT_SUCCESS';
    static SIGNOUT_FAILURE='SIGNOUT_FAILURE';

    static signUpUser(userPayload)
    {
        return{
            type:AuthActions.SIGNUP_REQUEST,
            payload:userPayload,
        };
    }
    static signUpUserError(message)
    {
        return{
            type:AuthActions.SIGNUP_FAILURE,
            payload:message
        }
    }
    static signInUser(userPayload)
    {
        return{
            type:AuthActions.SIGNIN_REQUEST,
            payload:userPayload
        }
    }
    static signInUserError(message)
    {
        return {
            type:AuthActions.SIGNIN_FAILURE,
            payload:message
        }
    }
    static checkUser() {
        return {
          type: AuthActions.CHECK_USER_REQUEST
        };
      }
    static signOutUser()
    {
        console.log('abc')
        return{
            type:AuthActions.SIGNOUT_REQUEST,
        }
    }
    static signOutUserError(message){
        return{
            type:AuthActions.SIGNOUT_FAILURE,
            payload:message
        }
    }
}