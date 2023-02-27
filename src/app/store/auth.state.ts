import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AuthentificationInterface, AuthUpdate } from "./auth.model";

@State<AuthentificationInterface>({
    name: 'AuthState',
    defaults:{
        todo: null
    }
})
@Injectable()
export class AuthState{
    
    @Selector()
    static getAuthObject(state: AuthentificationInterface){
        return state;
    }

    @Action(AuthUpdate)
    updateUserModel(ctx: StateContext<AuthentificationInterface>, Action: AuthUpdate){
        ctx.patchState({
            todo: Action.payload.todo
        })
    }
}