import { state } from "@angular/animations";
import { CupStateModel } from "./cup.model";
import { CupState } from "./cup.state";
import {Selector} from "@ngxs/store";
import { SearchCup } from "src/app/model/search-cup.model";

export class CupSelector {

    @Selector([CupState])
    static getCreateLoading(state: CupStateModel): boolean {
        return state.create.loading;
    }

    @Selector([CupState])
    static getDeleteLoading(state: CupStateModel): boolean {
        return state.delete.loading;
    }

    @Selector([CupState])
    static getReadData(state: CupStateModel): SearchCup[] {
        return state.read.data;
    }

    @Selector([CupState])
    static getReadLoading(state: CupStateModel): boolean {
        return state.read.loading;
    }


}
 