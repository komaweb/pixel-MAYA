import {getHat, getExpression} from "./js/spriteLoader.js";

import {drawCharacter} from "./js/renderer.js";

import {loadSprites} from "./js/spriteLoader.js";

import {waitImage} from "./js/upload.js";

import {createImageData} from "./js/imageLoader.js";

import {debugPixels} from "./js/utils.js";

async function main(){

    // マヤ素材を全部読み込む
    await loadSprites();

    console.log("素材読み込み完了");

    // 画像を選ぶ
    const image = await waitImage();

    // 100×100へ縮小
    const result = createImageData(image);

    // HSV判定
    debugPixels(result.imageData);

    const canvas = document.getElementById("resultCanvas");

    canvas.width = 320;
    canvas.height = 320;

    const ctx = canvas.getContext("2d");

const size = 32;

for(let y = 0; y < 10; y++){

    for(let x = 0; x < 10; x++){

drawCharacter(

    ctx,

    x * size,

    y * size,

    size,

    "#ff9999",

    getHat(x),

    getExpression(y)

);

    }

}

}

main();
