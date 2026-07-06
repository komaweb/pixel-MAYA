import {waitImage} from "./js/upload.js";

import {createImageData} from "./js/imageLoader.js";

import {logPixels} from "./js/utils.js";

async function main(){

    const image=await waitImage();

    const result=createImageData(image);

    logPixels(result.imageData);

}

main();
