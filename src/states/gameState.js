import State from './state'
import Assets from '@/res/assets' 
class GameState extends State{
    constructor(){
        super()
        this.x = 0
    }
    update(_dt){
        this.x+=10*_dt
    }
    render(ctx){
        ctx.drawSheet(Assets.getAsset('sp1').corp,this.x,0,80,80)
    }
}
export default GameState