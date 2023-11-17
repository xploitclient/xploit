window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    })

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
        document.addEventListener('keydown', function(event) {
  if (event.altKey) {
    window.location.href = 'https://classroom.google.com';
  }
});
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

const logoP = [
  "xploit",
  "Xploit",
  "xPloit",
  "xpLoit",
  "xplOit",
  "xplOiT",
  "XpLoit",
  "XPloit",
  "xPLoit",
  "xpLOit",
  "xplOIt",
  "XplOit",
  "XPloIt",
  "XplOiT",
  "XPloIt",
  "XplOIt"
];


const logo = document.getElementsByClassName("logo");

function changeLogo() {
  const random = Math.floor(Math.random() * logoP.length);
  logo[0].innerHTML = logoP[random];
  document.title = logoP[random];
}

setInterval(changeLogo, 100);
