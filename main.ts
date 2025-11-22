player.onChat("bonus", function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    HONEY_BLOCK,
    1
    )
})
player.onChat("skok", function () {
    player.teleport(pos(0, 100, 0))
})
player.onChat("lewitacja", function () {
    for (let index = 0; index < 60; index++) {
        mobs.spawn(PIG, pos(5, 0, 5))
    }
    mobs.applyEffect(LEVITATION, mobs.target(ALL_ENTITIES), 10, 50)
})
player.onChat("wieza", function () {
    blocks.place(BRICKS, pos(1, 0, 0))
    blocks.place(BRICKS, pos(1, 1, 0))
    blocks.place(BRICKS, pos(1, 2, 0))
    blocks.place(BRICKS, pos(1, 3, 0))
    blocks.place(BRICKS, pos(1, 4, 0))
    blocks.place(BRICKS, pos(1, 5, 0))
    blocks.place(BRICKS, pos(1, 6, 0))
    blocks.place(BRICKS, pos(1, 7, 0))
})
player.onTravelled(WALK, function () {
    blocks.fill(
    AIR,
    pos(-5, 0, -5),
    pos(5, 5, 5),
    FillOperation.Replace
    )
})
blocks.onBlockPlaced(SAND, function () {
    for (let index = 0; index < 400; index++) {
        blocks.place(SAND, randpos(
        pos(10, 100, 10),
        pos(-10, 100, -10)
        ))
    }
})
player.onChat("deszcz", function () {
    for (let index = 0; index < 50; index++) {
        mobs.spawn(mobs.monster(CREEPER), randpos(
        pos(-10, 10, -10),
        pos(10, 10, 10)
        ))
    }
})
loops.forever(function () {
    mobs.applyEffect(JUMP_BOOST, mobs.target(NEAREST_PLAYER), 10, 1)
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 10, 1)
})
player.onTravelled(SPRINT, function () {
    mobs.spawn(mobs.monster(CREEPER), pos(5, 0, 0))
    mobs.spawn(mobs.monster(CREEPER), pos(0, 5, 0))
    mobs.spawn(mobs.monster(CREEPER), pos(0, 0, 5))
})
