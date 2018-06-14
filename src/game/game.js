import Assets from '@/res/assets'
import State from '@/states/state'
import GameState from '@/states/gameState'

let loginState,settingState
class Game{
    constructor({title,fps=30,width=300,height=300}){
        document.title =title
        this.title = title
        this.fps = fps
        this.width = width
        this.height = height
        this.init()
    }
    init(width,height){

        let canvas = document.createElement('canvas')
        canvas.width = this.width
        canvas.height =  this.height
        document.body.appendChild(canvas)
        let ctx = canvas.getContext('2d')
        CanvasRenderingContext2D.prototype.drawSheet=function(sheet,x,y,w,h){
            this.drawImage(sheet.image,sheet.x,sheet.y,sheet.w,sheet.h,x,y,w,h)
        }
        this.ctx = ctx
        this.running = false
        this.x = 5
        this.ctx.fillStyle='red'
        
        loginState = new GameState()
        State.setState(loginState)
    }
    render(){
        this.ctx.clearRect(0,0,this.width,this.height)
        // console.log(this.x)
        //第一个参数图片  2，3，4，5 参数 图片的切片信息  6，7，8，9参数 切片画在画布的位置
        // this.ctx.drawImage(this.sheet.image,this.sheet.x,this.sheet.y,this.sheet.w,this.sheet.h,this.x,0,100,200)
        // this.ctx.fillRect(this.x,5,200,80)
        //this.ctx.drawSheet(this.sp1,this.x,0,80,80)
        State.getState().render(this.ctx)
    }
    tick(_dt){
        // console.log(`_dt:${_dt}`)
        //this.x += 20 * _dt
        State.getState().update(_dt)
    }
    run(){
       let timer = 0
       let lastTime = Date.now()
       let deltaTime=0
       const tickTime =1000/this.fps //正常情况下执行一帧需要的时间
    
       const loop = ()=>{
            if(this.running){ //只有运行状态才执行
                let now = Date.now()
                deltaTime = now-lastTime
                timer+=deltaTime
                lastTime = now
                
                if(timer >= tickTime){
                    let realFps = 1000/timer
                    // console.log(realFps)
                    let dt = timer/1000
                    //时间间隔超过一帧的时间，表示刷新周期到了
                    timer =0 //timer 清零
                    this.tick(dt,realFps) //每帧更新状态
                    this.render()//传给render方法的参数是一帧经过的时间 单位为秒

                }
            }
            window.requestAnimationFrame(loop)
       }
       loop()
      
    }
    start(){
        if(this.running){
            return
        }
        this.running = true
        this.run()
    }

}

export default Game