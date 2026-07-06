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

}

main();
