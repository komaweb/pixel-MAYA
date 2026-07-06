export function drawCharacter(ctx, x, y, size, hat, face){

    // 背景色（仮）
    ctx.fillStyle = "#ff9999";
    ctx.fillRect(x, y, size, size);

    // 被り物
    ctx.drawImage(hat, x, y, size, size);

    // 顔
    ctx.drawImage(face, x, y, size, size);

}
