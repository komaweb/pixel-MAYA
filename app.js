import { CONFIG } from "./js/config.js";

import {
    loadSprites,
    getHat,
    getExpression
} from "./js/spriteLoader.js";

import { drawCharacter } from "./js/renderer.js";

import { waitImage } from "./js/upload.js";

import { createImageData } from "./js/imageLoader.js";

import { debugPixels } from "./js/utils.js";

async function main(){

    // マヤ素材を読み込む
    await loadSprites();

    console.log("素材読み込み完了");

    // 画像を選ぶ
    const image = await waitImage();

    // 画像を縮小してRGB取得
    const result = createImageData(image);

    debugPixels(result.imageData);

    const data = result.imageData.data;

    // 表示用Canvas
    const canvas = document.getElementById("resultCanvas");

    const size = 32;

    canvas.width = CONFIG.outputWidth * size;
    canvas.height = CONFIG.outputHeight * size;

    const ctx = canvas.getContext("2d");

    for(let y = 0; y < CONFIG.outputHeight; y++){

        for(let x = 0; x < CONFIG.outputWidth; x++){

            const index = (y * CONFIG.outputWidth + x) * 4;

            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];

            const color = `rgb(${r}, ${g}, ${b})`;

            drawCharacter(

                ctx,

                x * size,

                y * size,

                size,

                color,

                // 今はデバッグ用
                getHat(x % 10),

                getExpression(y % 10)

            );

        }

    }

}

main();
