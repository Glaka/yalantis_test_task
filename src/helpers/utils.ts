export const isFileImage = (file: any) => {
    return file && file['type'].split('/')[0] === 'image';
}

export const getBase64Image = async (event: any) => {
    let file = event.target.files[0];
    if (!isFileImage(file)) return false;
    let canvas = document.createElement('canvas');
    let picQuality = .8
    let img = new Image();
    img.src = URL.createObjectURL(file);
    let promise = new Promise(function (resolve) {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            let ctx = canvas.getContext('2d');
            ctx!.drawImage(img, 0, 0);
            let dataURL = canvas.toDataURL('image/jpeg', picQuality);
            resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ''));
        };
    });
    return promise
};

export const getTooltipPos = (pos: string) => {
    switch (pos) {
        case 'right':
            return {
                right: '0',
                top: '50%',
                transform: 'translate(0,-50%)',
            };
        case 'top':
            return {
                left: '50%',
                top: '0',
                transform: 'translate(-50%,0)',
            };
        case 'bottom':
            return {
                left: '50%',
                bottom: '0',
                transform: 'translate(-50%,0)',
            };

        default:
            return {
                left: '0',
                top: '50%',
                transform: 'translate(0,-50%)',
            };
    }
};