export const isFileImage = (file: any) => {
    return file && file['type'].split('/')[0] === 'image';
}

export const getBase64Image = async (event: any) => {
    let file = event.target.files[0];
    if (!isFileImage(file)) return false;
    let canvas = document.createElement('canvas');
    let picQuality = .8
    let img = new Image();
    // let base64;
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
    // await promise.then((result) => {
    //     base64 = result
    // }).catch((err) => {
    //     console.error(err);
    // });
    return promise
};