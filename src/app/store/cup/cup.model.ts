import { newCup } from "src/app/model/new-cup.model";
import { SearchCup } from "src/app/model/search-cup.model";

export interface CupStateModel { 
    create: {
        data?: newCup;
        loading: boolean;
    }
    delete: {
        loading: boolean;
        id?: string;
    }
    read: {
        data: SearchCup[];
        loading: boolean;
        
    }

}

export const defaultCupState: CupStateModel = {
    create: {
        loading: false,
    },

    delete: {
        loading: false,
    },

    read: {
        data: [],
        loading: false,
    }
}

