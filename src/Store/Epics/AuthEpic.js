import AuthActions from "../Actions/AuthActions";
import {Observable} from "rxjs";
import {createUser,sigInWithEmailAndPass, checkUser,signOutUser} from '../Firebase/FirebaseAuth';

export class AuthEpic {
    static createUserOnFirebase(action$) {
        console.log(action$);
        return action$.ofType(AuthActions.SIGNUP_REQUEST).switchMap(({payload})=>{
            return Observable.fromPromise(createUser(payload)).map(()=>{
                return{
                    type: AuthActions.SIGNUP_SUCCESS,
                    payload:payload
                }
            }).catch((error)=>{
                console.log(error.message);
                return Observable.of(AuthActions.signUpUserError(error.message))
            })
        })

    }   
    static signInUserOnFirebase(action$){
        console.log(action$);
        return action$.ofType(AuthActions.SIGNIN_REQUEST).switchMap(({payload})=>{
            return Observable.fromPromise(sigInWithEmailAndPass(payload)).map((obj)=>{
                return{
                    type:AuthActions.SIGNIN_SUCCESS,
                    payload:obj.user
                }
            }).catch((error)=>{
                console.log(error.message);
                return Observable.of(AuthActions.signUpUserError(error.message))
            })
        })
    }
    static authStateChanged(action$){
        return action$.ofType(AuthActions.CHECK_USER_REQUEST).switchMap(({payload})=>{
            return Observable.fromPromise(checkUser()).map(user=>{
                return {
                    type:AuthActions.CHECK_USER_SUCCESS,
                    payload:user
                }
            })
        })
    }
    static signOutUserFromFirebase(action$){
        return action$.ofType(AuthActions.SIGNOUT_REQUEST).switchMap(({payload})=>{
            return Observable.fromPromise(signOutUser()).map(user=>{
                return{
                    type:AuthActions.SIGNOUT_SUCCESS,
                }
            })
        })
    }
}