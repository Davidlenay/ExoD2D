import { state } from "@angular/animations";
import { CupStateModel } from "./cup.model";
import { CupState } from "./cup.state";
import {Selector} from "@ngxs/store";

export class CupSelector {
    @Selector([CupState])
    static getCup(state: CupStateModel) {
        return state.creation.cups;
    }
}
 