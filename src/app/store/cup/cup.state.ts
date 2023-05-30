import { Injectable } from "@angular/core";
import {Action, State, StateContext } from "@ngxs/store";
import { CupStateModel } from "./cup.model";
import { CupService } from "src/app/services/cup.service";
import { CupAction } from "./cup.action";


@Injectable()
@State<CupStateModel> ({
    name: 'cup',    
})

export class CupState {

    constructor(private cupService: CupService ) {}

    @Action(CupAction.Create)
    createCup(
        {dispatch, getState, patchState}: StateContext<CupStateModel>,
        payload: CupAction.Create,
      ) {


          this.cupService.createCup(payload.data).subscribe({
            next: () => dispatch(new CupAction.CreateSuccess()),
            error: (err: any) => dispatch(new CupAction.CreateFailure(err)),
          });
        }

        //   @Action(CupAction.Delete)
        //   deleteCup(
        //     {dispatch, getState, patchState}: StateContext<CupStateModel>,
        //     payload: CupAction.Delete,
        //   ) {
        //     patchState({
        //       deletion: {
        //         id: payload.id                
        //       },
        //     });
        
        //     this.cupService.deleteCup(payload.id).subscribe({
        //       next: () => dispatch(new CupAction.DeleteSuccess()),
        //       error: (err: any) => dispatch(new CupAction.DeleteFailure(err)),
        //     });
        //   }

        //   @Action(CupAction.Read)
        //   readCup(
        //     {dispatch, getState, patchState}: StateContext<CupStateModel>,
        //     payload: CupAction.Read,
        //   ) {
        //     patchState({
        //       deletion: {
        //         id: payload.id                
        //       },
        //     });
        
        //     this.cupService.deleteCup(payload.data).subscribe({
        //       next: () => dispatch(new CupAction.DeleteSuccess()),
        //       error: (err: any) => dispatch(new CupAction.DeleteFailure(err)),
        //     });
        //   }

}