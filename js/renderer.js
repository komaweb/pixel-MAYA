export function drawCharacter(ctx, x, y, size, hat, face){

    ctx.fillStyle = "#ff8080";
    ctx.fillRect(x, y, size, size);

    ctx.drawImage(hat, x, y, size, size);

    ctx.drawImage(face, x, y, size, size);

}
