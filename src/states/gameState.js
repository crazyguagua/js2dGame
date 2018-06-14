import State from './state'
import Assets from '@/res/assets' 
class GameState extends State{
    constructor(keyManager){
        super()
        this.x = 0
        this.y = 0
        this.keyManager = keyManager
    }
    update(_dt){
       let up = this.keyManager.up
       let down = this.keyManager.down
       let left = this.keyManager.left
       let right = this.keyManager.right
       const speed = 100
       if(up){
          this.y-=_dt*speed
       }else if(down){
          this.y+=_dt*speed
       }else if(left){
          this.x-=_dt*speed
       }else if(right){
          this.x+=_dt*speed
       }
    }
    render(ctx){
        let asset = Assets.getAsset('sp1')
        ctx.drawSheet(asset.corp,this.x,this.y,asset.w,asset.h)
    }
}
export default GameState