const hats = [];
const faces = [];

async function loadImage(src){

    const img = new Image();

    img.src = src;

    await img.decode();

    return img;

}

export async function loadSprites(){

    for(let i = 0; i < 10; i++){

        hats.push(
            await loadImage(`assets/${i}.png`)
        );

        faces.push(
            await loadImage(`assets/${i}F.png`)
        );

    }

}

export function getHat(index){

    return hats[index];

}

export function getFace(index){

    return faces[index];

}
