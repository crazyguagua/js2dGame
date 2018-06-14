class SpiteSheet{
    /**
     * 
     * @param {*} sheet image对象
     */
    constructor(image){
        this.image = image
    }
    /**
     * 裁剪图片
     * @param {*} x 
     * @param {*} y 
     * @param {*} w 
     * @param {*} h 
     */
    corp(x,y,w,h){
        return {
            image:this.image,x:x,y:y,w:w,h:h
        }
    }
}
export default SpiteSheet