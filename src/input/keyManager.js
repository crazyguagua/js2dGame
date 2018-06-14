
const KEY_UP=38
const KEY_DOWN=40
const KEY_LEFT=37
const KEY_RIGHT=39

class KeyManager{
    constructor(){
        this.keys={}
        this.bindEvent()
    }
    update(_dt){ //game 每帧时调用
        this.up = this.keys[KEY_UP]
        this.down = this.keys[KEY_DOWN]
        this.left = this.keys[KEY_LEFT]
        this.right = this.keys[KEY_RIGHT]
    }
    bindEvent(){
        window.addEventListener('keydown',(e)=>{
            let code = e.keyCode
            
            this.keys[code] = true
        })
        window.addEventListener('keyup',(e)=>{
            let code = e.keyCode
            this.keys[code] = false
        })
    }

}


export default KeyManager