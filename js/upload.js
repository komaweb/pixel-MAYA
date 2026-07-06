export function waitImage(){

    return new Promise(resolve=>{

        const input=document.getElementById("imageInput");

        input.onchange=e=>{

            const file=e.target.files[0];

            if(!file)return;

            const img=new Image();

            img.onload=()=>resolve(img);

            img.src=URL.createObjectURL(file);

        };

    });

}
