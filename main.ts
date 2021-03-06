function col_in_tilemap (col: number) {
    return col >= 0 && col < tiles.tilemapColumns()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprite_player) {
        controller.moveSprite(sprite_player, 40, 40)
        sprite_player.setImage(img`
            8 8 8 8 8 8 
            8 8 8 8 8 8 
            8 8 8 8 8 8 
            8 8 8 8 8 8 
            8 8 8 8 8 8 
            8 8 8 8 8 8 
            `)
    }
})
function path_left (clear_wall: boolean) {
    current_col += -2
    if (tiles.tileIs(tiles.getTileLocation(current_col, current_row), target_tile)) {
        tiles.setTileAt(tiles.getTileLocation(current_col + 1, current_row), myTiles.tile6)
        if (clear_wall) {
            tiles.setTileAt(tiles.getTileLocation(current_col, current_row), myTiles.tile6)
        }
        return true
    }
    return false
}
function path_down (clear_wall: boolean) {
    current_row += 2
    if (tiles.tileIs(tiles.getTileLocation(current_col, current_row), target_tile)) {
        tiles.setTileAt(tiles.getTileLocation(current_col, current_row - 1), myTiles.tile6)
        if (clear_wall) {
            tiles.setTileAt(tiles.getTileLocation(current_col, current_row), myTiles.tile6)
        }
        return true
    }
    return false
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
info.onCountdownEnd(function () {
    controller.moveSprite(sprite_player, 0, 0)
    sprite_player.destroy(effects.disintegrate, 200)
    timer.after(2000, function () {
        game.over(false, effects.melt)
    })
})
function make_random_path (clear_wall: boolean) {
    if (rng.randomBoolean()) {
        if ((rng.randomBoolean() || !(rows_in_tilemap(current_row + 2))) && rows_in_tilemap(current_row - 2)) {
            return path_up(clear_wall)
        } else {
            return path_down(clear_wall)
        }
    } else {
        if ((rng.randomBoolean() || !(col_in_tilemap(current_col + 2))) && col_in_tilemap(current_col - 2)) {
            return path_left(clear_wall)
        } else {
            return path_right(clear_wall)
        }
    }
}
function fade_in (delay: number, block: boolean) {
    color.startFade(color.originalPalette, color.Black, delay)
    if (block) {
        color.pauseUntilFadeDone()
    }
}
function wait_for_menu_select (disable_selecting_0: boolean) {
    selected_menu = false
    while (!(selected_menu)) {
        if (disable_selecting_0 && blockMenu.selectedMenuIndex() == 0) {
            blockMenu.setSelectedIndex(1)
            pause(20)
        } else {
            pause(100)
        }
    }
}
function path_up (clear_wall: boolean) {
    current_row += -2
    if (tiles.tileIs(tiles.getTileLocation(current_col, current_row), target_tile)) {
        if (clear_wall) {
            tiles.setTileAt(tiles.getTileLocation(current_col, current_row + 1), myTiles.tile6)
        }
        tiles.setTileAt(tiles.getTileLocation(current_col, current_row), myTiles.tile6)
        return true
    }
    return false
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
    target_tile = myTiles.tile7
    total_unvisited_tiles = tiles.getTilesByType(myTiles.tile7).length
    loading_denominator += total_unvisited_tiles
    tiles.setTileAt(tiles.getTileLocation(current_col, current_row), myTiles.tile6)
    // https://en.wikipedia.org/wiki/Maze_generation_algorithm#Aldous-Broder_algorithm
    while (tiles.getTilesByType(myTiles.tile7).length > 0) {
        start_step_time = game.runtime()
        if (rng.percentChance(1)) {
            new_spot()
            target_tile = myTiles.tile6
            while (!(make_random_path(false))) {
                tiles.placeOnTile(sprite_cursor, tiles.getTileLocation(current_col, current_row))
                pause(0)
            }
        } else {
            target_tile = myTiles.tile7
            make_random_path(true)
        }
        if (total_unvisited_tiles != tiles.getTilesByType(myTiles.tile7).length) {
            loading_numerator += total_unvisited_tiles - tiles.getTilesByType(myTiles.tile7).length
            total_unvisited_tiles = tiles.getTilesByType(myTiles.tile7).length
        }
        tiles.placeOnTile(sprite_cursor, tiles.getTileLocation(current_col, current_row))
        eta = (game.runtime() - start_step_time) * tiles.getTilesByType(myTiles.tile7).length / 1000
        if (eta != 0) {
            message2 = "ETA: " + format_seconds(Math.round(eta))
        }
        pause(0)
    }
    sprite_cursor.destroy()
}
function path_right (clear_wall: boolean) {
    current_col += 2
    if (tiles.tileIs(tiles.getTileLocation(current_col, current_row), target_tile)) {
        tiles.setTileAt(tiles.getTileLocation(current_col - 1, current_row), myTiles.tile6)
        if (clear_wall) {
            tiles.setTileAt(tiles.getTileLocation(current_col, current_row), myTiles.tile6)
        }
        return true
    }
    return false
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (sprite_player) {
        controller.moveSprite(sprite_player, 80, 80)
        sprite_player.setImage(img`
            9 9 9 9 9 9 
            9 9 9 9 9 9 
            9 9 9 9 9 9 
            9 9 9 9 9 9 
            9 9 9 9 9 9 
            9 9 9 9 9 9 
            `)
    }
})
function rows_in_tilemap (row: number) {
    return row >= 0 && row < tiles.tilemapRows()
}
function get_difficulty_name_from_number (difficulty: number) {
    if (user_difficulty == 1) {
        return "Easy"
    } else if (user_difficulty == 2) {
        return "Medium"
    } else {
        return "Hard"
    }
}
spriteutils.createRenderable(100, function (screen2) {
    if (loading) {
        length = Math.round(Math.map(Math.constrain(loading_numerator / loading_denominator, 0, 1), 0, 1, 0, scene.screenWidth() * 0.6 - 4))
        screen2.fill(15)
        screen2.drawRect(scene.screenWidth() * 0.2, scene.screenHeight() * 0.47, scene.screenWidth() * 0.6, scene.screenHeight() * 0.06, 1)
        screen2.fillRect(scene.screenWidth() * 0.2 + 2, scene.screenHeight() * 0.47 + 2, length, scene.screenHeight() * 0.06 - 4, 1)
        images.printCenter(screen2, message1, scene.screenWidth() * 0.3 - 4, 1)
        images.printCenter(screen2, message2, scene.screenHeight() * 0.53 + 4, 1)
    }
    if (debug) {
        if (user_difficulty == 1) {
            minimap2 = minimap.minimap(MinimapScale.Half, 0, 12)
        } else if (user_difficulty == 2) {
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
function format_seconds (seconds: number) {
    mins = Math.idiv(seconds, 60)
    secs = seconds - Math.idiv(seconds, 60) * 60
    if (mins < 10) {
        mins_str = "0" + mins
    } else {
        mins_str = "" + mins
    }
    if (secs < 10) {
        secs_str = "0" + secs
    } else {
        secs_str = "" + secs
    }
    return "" + mins_str + ":" + secs_str
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
blockMenu.onMenuOptionSelected(function (option, index) {
    selected_menu = true
})
function is_even (num: number) {
    return Math.idiv(num, 2) == num / 2
}
let secs_str = ""
let mins_str = ""
let secs = 0
let mins = 0
let minimap2: minimap.Minimap = null
let length = 0
let eta = 0
let start_step_time = 0
let total_unvisited_tiles = 0
let sprite_cursor: Sprite = null
let selected_menu = false
let target_tile: Image = null
let current_row = 0
let current_col = 0
let sprite_player: Sprite = null
let rng: FastRandomBlocks = null
let loading_denominator = 0
let loading_numerator = 0
let message2 = ""
let message1 = ""
let loading = false
let won = false
let user_difficulty = 0
let debug = false
debug = false
// 1: Easy
// 2: Medium
// 3: Hard
user_difficulty = 1
let user_rng_seed = randint(0, 9999999999)
won = false
loading = false
message1 = ""
message2 = ""
loading_numerator = 0
loading_denominator = 0
let start_load = 0
let _break = false
color.setPalette(
color.Black
)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fffffffff111fff111111111fff111111111111fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fffffffff111fff111111111fff111111111111fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fffffffff111fff111111111fff111111111111fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111111fff111111fff111fff111ffffffffffff111fff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111111fff111111fff111fff111ffffffffffff111fff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111111fff111111fff111fff111ffffffffffff111fff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fff111fff111fff111111111fffffffff111ffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fff111fff111fff111111111fffffffff111ffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fff111fff111fff111111111fffffffff111ffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fffffffff111fff111fff111ffffff111fffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fffffffff111fff111fff111ffffff111fffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fffffffff111fff111fff111ffffff111fffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fffffffff111fff111fff111fff111111111111fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fffffffff111fff111fff111fff111111111111fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fffffffff111fff111fff111fff111111111111fff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff111111111111fff111111111fff111ffffff111fff111111111fff111111111fff111111111fff111111111fff111111111fff111111111ffffffffffffffffffffffffffffffffffffffffffffff
    fff111111111111fff111111111fff111ffffff111fff111111111fff111111111fff111111111fff111111111fff111111111fff111111111ffffffffffffffffffffffffffffffffffffffffffffff
    fff111111111111fff111111111fff111ffffff111fff111111111fff111111111fff111111111fff111111111fff111111111fff111111111ffffffffffffffffffffffffffffffffffffffffffffff
    fff111ffffffffffff111fffffffff111111fff111fff111fffffffff111fff111fff111fff111ffffff111ffffff111fff111fff111fff111ffffffffffffffffffffffffffffffffffffffffffffff
    fff111ffffffffffff111fffffffff111111fff111fff111fffffffff111fff111fff111fff111ffffff111ffffff111fff111fff111fff111ffffffffffffffffffffffffffffffffffffffffffffff
    fff111ffffffffffff111fffffffff111111fff111fff111fffffffff111fff111fff111fff111ffffff111ffffff111fff111fff111fff111ffffffffffffffffffffffffffffffffffffffffffffff
    fff111fff111ffffff111111111fff111fff111111fff111111111fff111111ffffff111111111ffffff111ffffff111fff111fff111111fffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fff111ffffff111111111fff111fff111111fff111111111fff111111ffffff111111111ffffff111ffffff111fff111fff111111fffffffffffffffffffffffffffffffffffffffffffffffff
    fff111fff111ffffff111111111fff111fff111111fff111111111fff111111ffffff111111111ffffff111ffffff111fff111fff111111fffffffffffffffffffffffffffffffffffffffffffffffff
    fff111ffffff111fff111fffffffff111ffffff111fff111fffffffff111fff111fff111fff111ffffff111ffffff111fff111fff111fff111ffffffffffffffffffffffffffffffffffffffffffffff
    fff111ffffff111fff111fffffffff111ffffff111fff111fffffffff111fff111fff111fff111ffffff111ffffff111fff111fff111fff111fff1f1f1fff1fff111ffffffffffffffffffffffffffff
    fff111ffffff111fff111fffffffff111ffffff111fff111fffffffff111fff111fff111fff111ffffff111ffffff111fff111fff111fff111fff1f1f1fff1fffff1ffffffffffffffffffffffffffff
    fff111111111111fff111111111fff111ffffff111fff111111111fff111fff111fff111fff111ffffff111ffffff111111111fff111fff111fff1f1f1fff1fff111ffffffffffffffffffffffffffff
    fff111111111111fff111111111fff111ffffff111fff111111111fff111fff111fff111fff111ffffff111ffffff111111111fff111fff111fff1f1f1fff1fff1ffffffffffffffffffffffffffffff
    fff111111111111fff111111111fff111ffffff111fff111111111fff111fff111fff111fff111ffffff111ffffff111111111fff111fff111ffff1ff1f1f1f1f111ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff11ff1f1fff1f1f1ff1f111f111f1111f1ff1f111f11ffff111f111f11ff1f1f111f1ff1f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1f1f1f1fff1f1f11f1f1ffff1ff1ffff11f1f1fff1f1fff1f1f1f1f1f1f1f1ff1ff11f1f1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff11ff111fff1f1f1f11f111ff1ff1f1ff1f11f111f1f1fff111f11ff1f1f1f1ff1ff1f11f1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1f1ff1ffff1f1f1ff1fff1ff1ff1ff1f1ff1f1fff1f1fff1f1f1f1f1f1f1f1ff1ff1ff1f1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff11fff1ffff111f1ff1f111f111f1111f1ff1f111f11ffff1f1f1f1f11fff1ff111f1ff1f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
fade_out(2000, false)
blockMenu.setControlsEnabled(false)
timer.after(2000, function () {
    blockMenu.setControlsEnabled(true)
})
while (!(_break)) {
    blockMenu.setColors(1, 15)
    blockMenu.showMenu(["Start", "Set difficulty", "Set maze seed"], MenuStyle.List, MenuLocation.BottomHalf)
    wait_for_menu_select(false)
    if (blockMenu.selectedMenuIndex() == 0) {
        game.showLongText("Current settings:\\n" + "Difficulty: " + get_difficulty_name_from_number(user_difficulty) + "\\nSeed: " + user_rng_seed, DialogLayout.Bottom)
        if (game.ask("Continue with these", "settings?")) {
            _break = true
        }
    } else if (blockMenu.selectedMenuIndex() == 1) {
        blockMenu.closeMenu()
        blockMenu.showMenu(["Select a difficulty:", "Easy", "Medium", "Hard"], MenuStyle.List, MenuLocation.BottomHalf)
        wait_for_menu_select(true)
        if (blockMenu.selectedMenuIndex() == 0) {
            game.showLongText("Please select a valid difficulty! (Difficulty has not been modified)", DialogLayout.Bottom)
        } else {
            // 1: Easy
            // 2: Medium
            // 3: Hard
            user_difficulty = blockMenu.selectedMenuIndex()
            game.showLongText("Difficulty is now " + get_difficulty_name_from_number(user_difficulty) + "!", DialogLayout.Bottom)
        }
        blockMenu.closeMenu()
    } else if (blockMenu.selectedMenuIndex() == 2) {
        user_rng_seed = game.askForNumber("Please input a seed:", 10)
        if (user_rng_seed != user_rng_seed) {
            user_rng_seed = randint(0, 9999999999)
            game.showLongText("That is now a valid number! (Seed is now " + user_rng_seed + "!)", DialogLayout.Bottom)
        } else {
            game.showLongText("Seed is now " + user_rng_seed + "!", DialogLayout.Bottom)
        }
    }
}
fade_in(2000, true)
blockMenu.closeMenu()
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
loading = true
start_load = game.runtime()
rng = Random.createRNG(user_rng_seed)
message1 = "Creating maze..."
fade_out(2000, true)
loading_denominator = 5
init_maze(user_difficulty)
loading_numerator += 1
clear_maze()
loading_numerator += 1
divide_maze()
loading_numerator += 1
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
controller.moveSprite(sprite_player, 80, 80)
scene.cameraFollowSprite(sprite_player)
set_start(1, 1)
loading_numerator += 1
set_end(tiles.tilemapColumns() - 2, tiles.tilemapRows() - 2)
loading_numerator += 1
message1 = "Done!"
message2 = "Took " + (game.runtime() - start_load) / 1000 + " seconds"
fade_in(2000, true)
loading = false
pause(1000)
fade_out(2000, false)
_break = false
while (!(_break)) {
    if (controller.up.isPressed() || controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed())) {
        _break = true
    }
    pause(50)
}
if (!(debug)) {
    if (user_difficulty == 1) {
        info.startCountdown(0.5 * 60)
    } else if (user_difficulty == 2) {
        info.startCountdown(1 * 60)
    } else {
        info.startCountdown(2.5 * 60)
    }
}
