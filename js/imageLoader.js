import {CONFIG} from "./config.js";

export function createImageData(img){

const canvas=document.getElementById("sourceCanvas");

    canvas.width=CONFIG.outputWidth;

    canvas.height=CONFIG.outputHeight;

    const ctx=canvas.getContext("2d");

    ctx.drawImage(

        img,

        0,

        0,

        CONFIG.outputWidth,

        CONFIG.outputHeight

    );

    return{

        ctx,

        imageData:ctx.getImageData(

            0,

            0,

            CONFIG.outputWidth,

            CONFIG.outputHeight

        )

    };

}
