const hats = [];
const expressions = [];

async function loadImages(count, suffix = "") {

    const list = [];

    for (let i = 0; i < count; i++) {

        const img = new Image();

        img.src = `assets/${i}${suffix}.png`;

        await img.decode();

        list.push(img);

    }

    return list;

}

export async function loadSprites() {

    // 被り物
    hats.push(...await loadImages(10, "H"));

    // 顔
    expressions.push(...await loadImages(10, "F"));

    console.log("素材読み込み完了");

}

export function getHat(index) {

    return hats[index];

}

export function getExpression(index) {

    return expressions[index];

}
