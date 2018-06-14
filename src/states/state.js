
let currentState =null //当前场景
class State {
    constructor(){

    }
    static setState(state){
        currentState = state
    }
    static getState(){
        return currentState
    }

}
export default State