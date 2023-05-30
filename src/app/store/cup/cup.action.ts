import { newCup } from "src/app/model/new-cup.model";

export namespace CupAction {

    export class Create {
        static readonly type = '[Cup] Create';
        constructor(public data: newCup) {}
    }

    export class CreateSuccess {
        static readonly type = '[Cup] Create Success';
    
        constructor() {}
      }

      export class CreateFailure {
        static readonly type = '[User] Create Failure';
    
        constructor(public err: any) {}
      }

    export class Delete {
        static readonly type = '[Cup] Delete';    
        constructor(public id: number) {}
      }

    export class DeleteSuccess {
        static readonly type = '[Cup] Delete Success';
    
        constructor() {}
      }

    export class DeleteFailure {
        static readonly type = '[User] Delete Failure';
    
        constructor(public err: any) {}
      }

    export class Read {
        static readonly type = '[Cup] Read';    
        constructor() {}
      }

    export class ReadSucces {
        static readonly type = '[Cup] Read Success';
    
        constructor() {}
      }

    export class ReadFailure {
        static readonly type = '[User] Read Failure';
    
        constructor(public err: any) {}

      
    }    
}