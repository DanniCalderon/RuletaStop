var intentos = 27;
var estado = false;
var body = document.querySelector(".container");
var miRuleta = new Winwheel({
    'numSegments': 27,
    'pointerAngle': 0,
    'pointerColor': 'white',
    'textFontSize': 24,
    'textOrientation': 'vertical',
    'textAlignment': 'outer',
    'outerRadius': 380,
    'innerRadius': 0,
    'segments': [
        { 'fillStyle': '#55efc4', 'text': " A  a" },
        { 'fillStyle': '#81ecec', 'text': " B  b" },
        { 'fillStyle': '#74b9ff', 'text': " C  c" },
        { 'fillStyle': '#a29bfe', 'text': " D  d" },
        { 'fillStyle': '#00b894', 'text': " E  e" },
        { 'fillStyle': '#00cec9', 'text': " F  f" },
        { 'fillStyle': '#0984e3', 'text': " G  g" },
        { 'fillStyle': '#6c5ce7', 'text': " H  h" },
        { 'fillStyle': '#ffeaa7', 'text': " I  i" },
        { 'fillStyle': '#fab1a0', 'text': " J  j" },
        { 'fillStyle': '#ff7675', 'text': " K  k" },
        { 'fillStyle': '#fd79a8', 'text': " L  l" },
        { 'fillStyle': '#fdcb6e', 'text': " M  m" },
        { 'fillStyle': '#e17055', 'text': " N  n" },
        { 'fillStyle': '#d63031', 'text': " Ñ  ñ" },
        { 'fillStyle': '#e84393', 'text': " O  o" },
        { 'fillStyle': '#55efc4', 'text': " P  p" },
        { 'fillStyle': '#81ecec', 'text': " Q  q" },
        { 'fillStyle': '#74b9ff', 'text': " R  r" },
        { 'fillStyle': '#a29bfe', 'text': " S  s" },
        { 'fillStyle': '#00b894', 'text': " T  t" },
        { 'fillStyle': '#00cec9', 'text': " U  u" },
        { 'fillStyle': '#0984e3', 'text': " V  v" },
        { 'fillStyle': '#6c5ce7', 'text': " W  w" },
        { 'fillStyle': '#ffeaa7', 'text': " X  x" },
        { 'fillStyle': '#fab1a0', 'text': " Y  y" },
        { 'fillStyle': '#ff7675', 'text': " Z  z" }
    ],
    'animation': {
        'type': 'spinToStop',
        'duration': 7,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'dibujarIndicador()',
        'spins': 7,
        'callbackSound': playSound,
        'soundTrigger': 'pin'
    },
    'pins': {
        'number': 36,
    },
    'pointerGuide':
    {
        'display': true,
        'strokeStyle': 'black',
        'lineWidth': 5,
    }
});

let audio = new Audio('sound/tick.mp3');
function playSound() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}



function Mensaje() {
    let audio2 = document.querySelector('#sonido2');
    var letra = document.querySelector(".letra");
    audio2.play();
    var pop = document.querySelector(".popup");
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    letra.innerHTML = SegmentoSeleccionado.text.split(' ').join('').charAt(0);
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    body.style.overflow = "hidden";
    pop.style.display = "flex";
    var btnGirar = document.querySelector('#girar');
    btnGirar.style.display = "none";
    estado = false;

}

dibujarIndicador();
function dibujarIndicador() {
    var ctx = miRuleta.ctx;
    ctx.strokeStyle = 'navy';
    ctx.fillStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(380, 0);
    ctx.lineTo(440, 0);
    ctx.lineTo(400, 50);
    ctx.lineTo(360, 0);
    ctx.stroke();
    ctx.fill();

}

function resetGame() {
    var pop = document.querySelector(".popup");
    console.log(intentos)
    if (intentos == 2) {
        var botton = document.querySelector(".botonFinal");
        botton.addEventListener("click", function () {
            window.location.reload();
        });
        botton.value = "Reiniciar ruleta";
        var letra = document.querySelector(".letra");
        document.querySelector(".mensajeFinal").style.display = "block";
        miRuleta.stopAnimation(false);
        miRuleta.deleteSegment(miRuleta.getIndicatedSegmentNumber());
        miRuleta.draw();
        letra.innerHTML = "Z  z".split(' ').join('').charAt(0);

    } else {

        if (estado == false) {
            body.style.overflow = "auto";
            pop.style.display = "none";
            miRuleta.stopAnimation(false);
            miRuleta.deleteSegment(miRuleta.getIndicatedSegmentNumber());
            intentos = intentos - 1;
            miRuleta.rotationAngle = 0;
            miRuleta.draw();
            dibujarIndicador();
            miRuleta.startAnimation();
            estado = true;
        }


    }
}
