import { Injectable } from "@angular/core";
import {Action, State, StateContext } from "@ngxs/store";
import { CupStateModel, defaultCupState } from "./cup.model";
import { CupService } from "src/app/services/cup.service";
import { CupAction } from "./cup.action";
import { catchError, tap } from "rxjs";


@Injectable()
@State<CupStateModel> ({
    name: 'cup',    
    defaults: defaultCupState,
})
export class CupState {

    constructor(private cupService: CupService ) {}

    @Action(CupAction.Create)
    createCup(
        {dispatch, getState, patchState}: StateContext<CupStateModel>,
        payload: CupAction.Create,
      ) {
        patchState({
            create: {
                data: payload.data,
                loading: true,
            }
        });

          return this.cupService.createCup(payload.data)
            .pipe(tap(() => dispatch(new CupAction.CreateSuccess())))
            .pipe(catchError((err) => dispatch(new CupAction.CreateFailure(err))));
          
          //.subscribe({
          //  next: () => dispatch(new CupAction.CreateSuccess()),
          //error: (err: any) => dispatch(new CupAction.CreateFailure(err)),
          //});
        }

        @Action(CupAction.CreateSuccess)
        createCupSuccess(
            {dispatch, getState, patchState}: StateContext<CupStateModel>,
            payload: CupAction.Create,
          ) {
            patchState({
                create: {
                    loading: false,
                }
            });
        }

        @Action(CupAction.CreateFailure)
        createCupFailure(
            {dispatch, getState, patchState}: StateContext<CupStateModel>,
            payload: CupAction.Create,
          ) {
            const state = getState();

            patchState({
                create: {
                    ...state.create,
                    loading: false,
                }
            });
        }

           @Action(CupAction.Delete)
           deleteCup(
             {dispatch, getState, patchState}: StateContext<CupStateModel>,
             payload: CupAction.Delete,
           ) {
             patchState({
               delete: {
                 id: payload.id,
                 loading: true               
               },
             });

             return this.cupService.deleteCup(payload.id)
             .pipe(tap(() => dispatch(new CupAction.DeleteSuccess())))
            .pipe(catchError((err) => dispatch(new CupAction.DeleteFailure(err))));
          

        
            //  this.cupService.deleteCup(payload.id).subscribe({
            //    next: () => dispatch(new CupAction.DeleteSuccess()),
            //    error: (err: any) => dispatch(new CupAction.DeleteFailure(err)),
            //  });
           }

           @Action(CupAction.Read)
           readCup(
             {dispatch, getState, patchState}: StateContext<CupStateModel>,
             payload: CupAction.Read,
           ) {
            const state = getState();

             patchState({
               read: {
                ...state.read,
                loading: true,               
               },
             });
        
             return this.cupService.readCups()
            .pipe(tap(cups => dispatch(new CupAction.ReadSucces(cups))))
            .pipe(catchError((err) => {
              dispatch(new CupAction.ReadFailure(err));
              throw err;
            }));
             };

             
             @Action(CupAction.ReadSucces)
             ReadSucces(
              {dispatch, getState, patchState}: StateContext<CupStateModel>,
              payload: CupAction.ReadSucces,
            ) {
              patchState({
                  read: {
                    data :payload.data,
                      loading: false,
                      // data: 
                  }
              });

            }

               @Action(CupAction.ReadFailure)
               ReadFailure(
               {dispatch, getState, patchState}: StateContext<CupStateModel>,
               payload: CupAction.ReadFailure,
             ) {
               patchState({
                   read: {
                    data: [],
                       loading: false,
                   }
               });

              
            }


          }

        

          