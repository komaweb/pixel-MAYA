const hats = [];
const expressions = [];

async function loadImages(count, isFace = false){

    const list = [];

    for(let i = 0; i < count; i++){

        const img = new Image();

        const fileName = isFace
            ? `${i}F.png`
            : `${i}.png`;

        img.src = `assets/${fileName}`;

        await img.decode();

        list.push(img);

    }

    return list;

}

export async function loadSprites(){

    // 被り物
    hats.push(...await loadImages(10));

    // 顔
    expressions.push(...await loadImages(10, true));

    console.log("素材読み込み完了");

}

export function getHat(index){

    return hats[index];

}

export function getExpression(index){

    return expressions[index];

}
