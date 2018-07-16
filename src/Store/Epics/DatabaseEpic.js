import DatabaseActions from '../Actions/DatabaseActions';
import {Observable} from "rxjs";
import {pushData,getData} from '../Firebase/FirebaseDb';

export class DatabaseEpic
{
    static addDonorOnFirebase(action$){ 
        return action$.ofType(DatabaseActions.ADD_DONOR_REQUEST).switchMap(({payload})=>{
            
            return Observable.fromPromise(pushData(payload)).map((obj)=>{
                return{
                    type:DatabaseActions.ADD_DONOR_SUCCESS,
                    payload:obj
                }
            }).catch((error)=>{
                console.log(error)
                return Observable.of(DatabaseActions.addDonorFailure(error.message))
            })
        })
    }
    static getDonorOnFirebase(action$){
        return action$.ofType(DatabaseActions.GET_DONOR_REQUEST).switchMap(({payload})=>{
            console.log('555555555');
            return Observable.fromPromise(getData(payload)).map((array)=>{
                console.log(array);
                return{
                    type:DatabaseActions.GET_DONOR_SUCCESS,
                    payload:array
                }
                console.log(payload)
            }).catch((error)=>{
                return Observable.of(DatabaseActions.getDonorFailure(error.message));
            })
        })
    }
}