import {rgbToHsv} from "./hsv.js";
import {
    getHatIndex,
    getExpressionIndex
} from "./converter.js";

export function debugPixels(imageData){

    const data = imageData.data;

    for(let i=0;i<data.length;i+=4){

        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];

        const hsv = rgbToHsv(r,g,b);

        const hat = getHatIndex(hsv.h);

        const expression = getExpressionIndex(hsv.v);

        console.log({

            rgb:[r,g,b],

            h:hsv.h.toFixed(1),

            v:hsv.v.toFixed(2),

            hat,

            expression

        });

    }

}
