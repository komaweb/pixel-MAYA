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

import { rgbToHsv } from "./js/hsv.js";

import {
    getHatIndex,
    getExpressionIndex
} from "./js/converter.js";

async function main() {

    // マヤ素材を読み込む
    await loadSprites();

    console.log("素材読み込み完了");

    // 画像を選択
    const image = await waitImage();

    // 縮小してRGB取得
    const result = createImageData(image);

    debugPixels(result.imageData);

    const data = result.imageData.data;

    // 表示用Canvas
    const canvas = document.getElementById("resultCanvas");

    const size = 80;

    canvas.width = CONFIG.outputWidth * size;
    canvas.height = CONFIG.outputHeight * size;

    const ctx = canvas.getContext("2d");

    for (let y = 0; y < CONFIG.outputHeight; y++) {

        for (let x = 0; x < CONFIG.outputWidth; x++) {

            const index = (y * CONFIG.outputWidth + x) * 4;

            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];

            const color = `rgb(${r}, ${g}, ${b})`;

            const hsv = rgbToHsv(r, g, b);

            const hatIndex = getHatIndex(hsv.h);

            const expressionIndex = getExpressionIndex(hsv.v);

            const hat = getHat(hatIndex);
            const face = getExpression(expressionIndex);

            if (!hat || !face) {
                console.error(
                    "画像取得失敗",
                    {
                        hatIndex,
                        expressionIndex
                    }
                );
                continue;
            }

            drawCharacter(
                ctx,
                x * size,
                y * size,
                size,
                color,
                hat,
                face
            );

        }

    }

}

main();
