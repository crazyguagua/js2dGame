class Game{
    constructor(){
        document.title ='js2dgame'
        let canvas = document.createElement('canvas')
        canvas.width = 300
        canvas.height =  300
        document.body.appendChild(canvas)
        let ctx = canvas.getContext('2d')
        ctx.fillStyle="red"
        ctx.fillRect(0,0,10,10)
    }
}

export default Game