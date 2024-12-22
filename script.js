let imgBox = document.getElementById('imgBox');
let input = document.getElementById('js-url-input');
let qrimage = document.getElementById('qr-image');
function generateQR(){
    let url = input.value;
    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`; 
    imgBox.classList.add('show-img')
}