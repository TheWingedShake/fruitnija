class AssetsManager{

    constructor(){
        this.images = {};
        this.sounds = {};
    }

    loadImage(images = []){
        const p1 = new Promise((resolve) => {
            const preload = new createjs.LoadQueue();
            
            images.forEach(item => {
                preload.loadFile(item);
            });
            preload.addEventListener("fileload", res => {
                this.images[res.item.id] = res.result;
            });
            preload.addEventListener("complete", () => {
                resolve();
            });
        });
        return p1;
    }

    loadSounds(sounds = []){
        sounds.forEach(item => {
            createjs.Sound.registerSound(item.src, item.id);
        });
    }

    getImage(id){
        return this.images[id] || false;
    }

    getSound(id){
        return this.sounds[id] || false;
    }

}

export const assetsManager = new AssetsManager();