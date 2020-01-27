var convertBtn = document.querySelector('.download-button');
var URLinput = document.querySelector('.url-input');

convertBtn.addEventListener('click', () => {
    sendURL(URLinput.value);
});

function sendURL(URL) {
    window.location.href = "/download?URL="+URL;
}