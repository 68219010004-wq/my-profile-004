const greetingBtn = document.getElementById('greetingBtn');
const greetingMessage = document.getElementById('greetingMessage');
greetingBtn.addEventListener('click', function ( ){
    greetingMessage.textContent = 'สวัสดีค่ะ ยินดีที่ได้รู้จักค่ะ';
});