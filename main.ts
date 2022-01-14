let mySprite = sprites.create(assets.image`crash bandicoot`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`dbch`)
controller.moveSprite(mySprite)
forever(function () {
    music.playMelody("C5 B A G A B B C5 ", 120)
})
