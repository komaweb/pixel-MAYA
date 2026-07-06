import {loadSprites} from "./js/spriteLoader.js";

import {waitImage} from "./js/upload.js";

import {createImageData} from "./js/imageLoader.js";

import {debugPixels} from "./js/utils.js";

async function main(){

    const image = await waitImage();

    const result = createImageData(image);

    debugPixels(result.imageData);

}

async function main(){

    await loadSprites();

    console.log("素材読み込み完了");

    const image = await waitImage();

    const result = createImageData(image);

    debugPixels(result.imageData);

}

main();
