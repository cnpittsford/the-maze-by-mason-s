sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mmmjjjjju.startEffect(effects.coolRadial, 5000)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let mmmjjjjju: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
game.showLongText("get to the star at the end of the maze", DialogLayout.Center)
let mason = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ....7.fd11111111df......
    ...7..fd11111111df......
    ...7..fd11111111df......
    ...7..fddd1111dddff.....
    ...77.fbdbfddfbdbfcf....
    ...777fcdcf11fcdcfbf....
    ....77fffbdb1bdffcf.....
    ....fcb1bcffffff........
    ....f1c1c1ffffff........
    ....fdfdfdfffff.........
    .....f.f.f..............
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
scene.cameraShake(4, 5000)
mmmjjjjju = sprites.create(img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(mmmjjjjju, tiles.getTileLocation(14, 14))
mason.setPosition(2, 2)
controller.moveSprite(mason)
scene.cameraFollowSprite(mason)
mason.setStayInScreen(true)
mason.setBounceOnWall(true)
game.setGameOverMessage(true, "GAME OVER!")
