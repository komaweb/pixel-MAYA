const expressions = [];
const hats = [];

async function loadImages(folder, count){

    const list = [];

    for(let i=0;i<count;i++){

        const img = new Image();

        img.src = `assets/${folder}/${i}.png`;

        await img.decode();

        list.push(img);

    }

    return list;

}

export async function loadSprites(){

    expressions.push(...await loadImages("expressions",10));

    hats.push(...await loadImages("hats",10));

}

export function getExpression(index){

    return expressions[index];

}

export function getHat(index){

    return hats[index];

}
