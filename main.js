var canvas = new fabric.canvas('myCanvas')
playerX= 10
playerY= 10
block_img_width= 30
block_img_height= 30
var player= ""
var block_img= ""
function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player=Img
        player.scaleToWidth(100)
        player.scaleToHeight(140)
        player.set({
            top:playerY,
            left:playerX 
        })
        canvas.add(player)
    })
}
function newImage(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_img=Img
        block_img.scaleToWidth(block_img_width)
        block_img.scaleToHeight(block_img_height)
        block_img.set({
            top:playerY,
            left:playerX 
        })
        canvas.add(block_img)
    })
}