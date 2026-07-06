export function drawCharacter(
    ctx,
    x,
    y,
    size,
    color,
    hat,
    face
){

    // 元画像の色
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);

    // 被り物
    ctx.drawImage(
        hat,
        x,
        y,
        size,
        size
    );

    // 顔
    ctx.drawImage(
        face,
        x,
        y,
        size,
        size
    );

}
