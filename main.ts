function col_in_tilemap (col: number) {
    return col >= 0 && col < tiles.tilemapColumns()
}
function path_left () {
    current_col += -2
    if (tiles.tileIs(tiles.getTileLocation(current_col, current_row), myTiles.tile7)) {
        tiles.setTileAt(tiles.getTileLocation(current_col + 1, current_row), myTiles.tile6)
        tiles.setTileAt(tiles.getTileLocation(current_col, current_row), myTiles.tile6)
        loading_numerator += 1
    }
}
function path_down () {
    current_row += 2
    if (tiles.tileIs(tiles.getTileLocation(current_col, current_row), myTiles.tile7)) {
        tiles.setTileAt(tiles.getTileLocation(current_col, current_row - 1), myTiles.tile6)
        tiles.setTileAt(tiles.getTileLocation(current_col, current_row), myTiles.tile6)
        loading_numerator += 1
    }
}
function init_maze (difficulty: number) {
    if (difficulty == 1) {
        tiles.setSmallTilemap(tiles.createTilemap(hex`15000f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            .....................
            .....................
            .....................
            .....................
            .....................
            .....................
            .....................
            .....................
            .....................
            .....................
            .....................
            .....................
            .....................
            .....................
            .....................
            `, [myTiles.transparency8], TileScale.Eight))
    } else if (difficulty == 2) {
        tiles.setSmallTilemap(tiles.createTilemap(hex`29001f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            `, [myTiles.transparency8], TileScale.Eight))
    } else {
        tiles.setSmallTilemap(tiles.createTilemap(hex`51003d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            .................................................................................
            `, [myTiles.transparency8], TileScale.Eight))
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    if (!(won)) {
        won = true
        timer.after(20, function () {
            tiles.placeOnTile(sprite, location)
            game.over(true)
        })
    }
})
function clear_maze () {
    for (let row = 0; row <= tiles.tilemapRows(); row++) {
        for (let col = 0; col <= tiles.tilemapColumns(); col++) {
            tiles.setWallAt(tiles.getTileLocation(col, row), false)
            tiles.setTileAt(tiles.getTileLocation(col, row), myTiles.tile7)
        }
    }
}
function fade_out (delay: number, block: boolean) {
    color.startFade(color.Black, color.originalPalette, delay)
    if (block) {
        color.pauseUntilFadeDone()
    }
}
function set_end (col: number, row: number) {
    tiles.setTileAt(tiles.getTileLocation(col, row), myTiles.tile8)
    tiles.setWallAt(tiles.getTileLocation(col, row), false)
}
function fade_in (delay: number, block: boolean) {
    color.startFade(color.originalPalette, color.Black, delay)
    if (block) {
        color.pauseUntilFadeDone()
    }
}
function path_up () {
    current_row += -2
    if (tiles.tileIs(tiles.getTileLocation(current_col, current_row), myTiles.tile7)) {
        tiles.setTileAt(tiles.getTileLocation(current_col, current_row + 1), myTiles.tile6)
        tiles.setTileAt(tiles.getTileLocation(current_col, current_row), myTiles.tile6)
        loading_numerator += 1
    }
}
function divide_maze () {
    for (let row = 0; row <= tiles.tilemapRows() - 1; row++) {
        for (let col = 0; col <= tiles.tilemapColumns() - 1; col++) {
            if (is_even(col)) {
                tiles.setTileAt(tiles.getTileLocation(col, row), myTiles.tile5)
            }
            if (is_even(row)) {
                tiles.setTileAt(tiles.getTileLocation(col, row), myTiles.tile5)
            }
        }
    }
}
function make_maze (start_col: number, start_row: number) {
    sprite_cursor = sprites.create(img`
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    current_col = start_col
    current_row = start_row
    tiles.setTileAt(tiles.getTileLocation(current_col, current_row), myTiles.tile6)
    // https://en.wikipedia.org/wiki/Maze_generation_algorithm#Aldous-Broder_algorithm
    while (tiles.getTilesByType(myTiles.tile7).length > 0) {
        if (Math.percentChance(50)) {
            if ((Math.percentChance(50) || !(rows_in_tilemap(current_row + 2))) && rows_in_tilemap(current_row - 2)) {
                path_up()
            } else {
                path_down()
            }
        } else {
            if ((Math.percentChance(50) || !(col_in_tilemap(current_col + 2))) && col_in_tilemap(current_col - 2)) {
                path_left()
            } else {
                path_right()
            }
        }
        tiles.placeOnTile(sprite_cursor, tiles.getTileLocation(current_col, current_row))
        message2 = "" + tiles.getTilesByType(myTiles.tile7).length + " cell(s) left"
        pause(0)
    }
    sprite_cursor.destroy()
}
function path_right () {
    current_col += 2
    if (tiles.tileIs(tiles.getTileLocation(current_col, current_row), myTiles.tile7)) {
        tiles.setTileAt(tiles.getTileLocation(current_col - 1, current_row), myTiles.tile6)
        tiles.setTileAt(tiles.getTileLocation(current_col, current_row), myTiles.tile6)
        loading_numerator += 1
    }
}
function rows_in_tilemap (row: number) {
    return row >= 0 && row < tiles.tilemapRows()
}
spriteutils.createRenderable(100, function (screen2) {
    if (loading) {
        length = Math.round(Math.map(Math.constrain(loading_numerator / loading_denominator, 0, 1), 0, 1, 0, scene.screenWidth() * 0.6 - 3))
        screen2.fill(15)
        screen2.drawRect(scene.screenWidth() * 0.2, scene.screenHeight() * 0.47, scene.screenWidth() * 0.6, scene.screenHeight() * 0.06, 1)
        screen2.fillRect(scene.screenWidth() * 0.2 + 2, scene.screenHeight() * 0.47 + 2, length, scene.screenHeight() * 0.06 - 4, 1)
        images.printCenter(screen2, message1, scene.screenWidth() * 0.3 - 4, 1)
        images.printCenter(screen2, message2, scene.screenHeight() * 0.53 + 4, 1)
    }
    if (debug) {
        if (difficulty == 1) {
            minimap2 = minimap.minimap(MinimapScale.Half, 0, 12)
        } else if (difficulty == 2) {
            minimap2 = minimap.minimap(MinimapScale.Quarter, 0, 12)
        } else {
            minimap2 = minimap.minimap(MinimapScale.Eighth, 0, 12)
        }
        if (sprite_player) {
            minimap.includeSprite(minimap2, sprite_player, MinimapSpriteScale.MinimapScale)
        }
        if (sprite_cursor && !(spriteutils.isDestroyed(sprite_cursor))) {
            minimap.includeSprite(minimap2, sprite_cursor, MinimapSpriteScale.MinimapScale)
        }
        spriteutils.drawTransparentImage(minimap.getImage(minimap2), screen2, 0, 0)
    }
})
function set_start (col: number, row: number) {
    tiles.placeOnTile(sprite_player, tiles.getTileLocation(col, row))
}
function make_walls () {
    for (let loc of tiles.getTilesByType(myTiles.tile5)) {
        tiles.setWallAt(loc, true)
    }
}
function new_spot () {
    current_col = tiles.locationXY(tiles.getTilesByType(myTiles.tile7)[0], tiles.XY.column)
    current_row = tiles.locationXY(tiles.getTilesByType(myTiles.tile7)[0], tiles.XY.row)
}
function is_even (num: number) {
    return Math.idiv(num, 2) == num / 2
}
let minimap2: minimap.Minimap = null
let length = 0
let sprite_cursor: Sprite = null
let current_row = 0
let current_col = 0
let sprite_player: Sprite = null
let loading_denominator = 0
let loading_numerator = 0
let message2 = ""
let message1 = ""
let loading = false
let won = false
let difficulty = 0
let debug = false
debug = false
// 1: Easy
// 2: Medium
// 3: Hard
difficulty = 1
won = false
loading = false
message1 = ""
message2 = ""
loading_numerator = 0
loading_denominator = 0
color.setPalette(
color.Black
)
loading = true
message1 = "Creating maze..."
fade_out(2000, true)
loading_denominator = 5
init_maze(difficulty)
loading_numerator += 1
clear_maze()
loading_numerator += 1
divide_maze()
loading_numerator += 1
loading_denominator += tiles.getTilesByType(myTiles.tile7).length
make_maze(1, 1)
if (!(debug)) {
    loading_numerator += 1
    loading_denominator += 1
    make_walls()
}
sprite_player = sprites.create(img`
    9 9 9 9 9 9 
    9 9 9 9 9 9 
    9 9 9 9 9 9 
    9 9 9 9 9 9 
    9 9 9 9 9 9 
    9 9 9 9 9 9 
    `, SpriteKind.Player)
controller.moveSprite(sprite_player, 100, 100)
scene.cameraFollowSprite(sprite_player)
set_start(1, 1)
loading_numerator += 1
set_end(tiles.tilemapColumns() - 2, tiles.tilemapRows() - 2)
loading_numerator += 1
fade_in(2000, true)
pause(500)
loading = false
pause(500)
fade_out(2000, true)
