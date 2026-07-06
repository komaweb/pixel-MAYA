export function getHatIndex(h){

    if(h >= 342 || h < 18) return 0;

    return Math.floor((h - 18) / 36) + 1;

}

export function getExpressionIndex(v){

    let index = Math.floor(v * 10);

    if(index > 9){
        index = 9;
    }

    return index;

}
