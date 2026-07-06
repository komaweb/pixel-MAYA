
export function rgbToHsv(r, g, b){

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    const d = max - min;

    let h = 0;

    if(d !== 0){

        switch(max){

            case r:
                h = ((g - b) / d) % 6;
                break;

            case g:
                h = (b - r) / d + 2;
                break;

            case b:
                h = (r - g) / d + 4;
                break;

        }

        h *= 60;

        if(h < 0){
            h += 360;
        }

    }

    const s = max === 0 ? 0 : d / max;

    const v = max;

    return{

        h,
        s,
        v

    };

}
