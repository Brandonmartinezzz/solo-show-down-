function Map (num: number) {
    if (num < 5) {
        list = [
        tilemap`level1`,
        tilemap`level2`,
        tilemap`level3`,
        tilemap`level4`
        ]
        tiles.setCurrentTilemap(list._pickRandom())
    }
}
let list: tiles.TileMapData[] = []
Map(game.askForNumber("choose"))
