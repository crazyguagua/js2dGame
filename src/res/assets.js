let assets = {}
/**
 * 管理所有的资源 
 * 成员变量 spitesheet
 */
import ImageLoader from '@/util/imageLoader'
import SpriteSheet from '@/res/spritesheet'
class Assets {
    /**
     * 
     * @param {*} name 资源key
     * @param {*} path 文件路径
     * @param {*} width 
     * @param {*} height 
     */
    constructor(name,path,width,height){
        assets[name] = this 
        this.sheet = new SpriteSheet(ImageLoader.loadImage(path))
    }
    static getAsset(name){
        return assets[name]
    }
}
let as = new Assets('sp1','assets/texture/sprite.png')
as.corp = as.sheet.corp(80,0,80,80)

export default Assets