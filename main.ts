scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    scene.cameraShake(3, 200)
    speed = speed / 1.1
})
function Map (num: number) {
    if (num < 5) {
        list = [tilemap`level1`, tilemap`level2`, tilemap`level3`]
        tiles.setCurrentTilemap(list._pickRandom())
    }
}
let acceleration = 0
let direction = 0
let list: tiles.TileMapData[] = []
let speed = 0
Map(1)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . f 2 2 9 2 2 f . . . . . 
    . . . . 2 2 2 9 2 2 2 . . . . . 
    . . . . 2 2 9 9 9 2 2 . . . . . 
    . . . . 2 2 9 9 9 2 2 . . . . . 
    . . . . 2 2 9 9 9 2 2 . . . . . 
    . . . f 2 2 9 9 9 2 2 f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setScale(3, ScaleAnchor.Middle)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . f 8 8 9 8 8 f . . . . . 
    . . . . 8 8 8 9 8 8 8 . . . . . 
    . . . . 8 8 9 9 9 8 8 . . . . . 
    . . . . 8 8 9 9 9 8 8 . . . . . 
    . . . . 8 8 9 9 9 8 8 . . . . . 
    . . . f 8 8 9 9 9 8 8 f . . . . 
    . . . f 8 8 8 8 8 8 8 f . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setScale(3, ScaleAnchor.Middle)
controller.player2.moveSprite(mySprite2)
let tspeed = 0.1
let mspeed = 175
mySprite.setBounceOnWall(true)
mySprite2.setBounceOnWall(true)
splitScreen.setSplitScreenEnabled(true)
splitScreen.setBorderColor(15)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        direction += tspeed * (1 - speed / (1.5 * mspeed))
        if (controller.left.isPressed()) {
            direction += 0 - tspeed * (1 - speed / (1.5 * mspeed))
        }
    }
    if (controller.A.isPressed()) {
        acceleration = 1.5
    } else if (controller.down.isPressed()) {
        acceleration = -2
    } else {
        acceleration = -0.25
    }
    acceleration = Math.constrain(speed + acceleration, 0, mspeed)
    mySprite.sayText("velocity" + Math.round(speed))
})
