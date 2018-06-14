class ImageLoader{
    static loadImage(url){
        let image = new Image()
        image.src = url
        return image
    }
}
export default ImageLoader