let imgBox = document.getElementById("imgbox");
let qrImg = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQRCode(){
    if(qrText.value == ""){
        alert("Please enter some text or URL");
        return;
    }
    else{
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    
}
