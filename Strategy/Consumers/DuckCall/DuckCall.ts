import { CallBehavior } from "../../Behaviors/Interfaces";

abstract class DuckCall{
    callBehavior: CallBehavior;
    constructor(callBehavior: CallBehavior){
        this.callBehavior = callBehavior;
    }

    abstract display(): void;

    performCall(){
        this.callBehavior.call();
    }

    setCallBehavior(callBehavior: CallBehavior){
        this.callBehavior = callBehavior;
    }
} 

export default DuckCall;