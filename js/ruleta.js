var miRuleta = new Winwheel({
    'numSegments': 27,
    'pointerAngle': 0,
    'pointerColor': 'white',
    'textFontSize': 24,
    'textOrientation': 'vertical',
    'textAlignment': 'outer',
    'outerRadius': 380,
    'innerRadius': 75,
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
        'duration': 10,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'dibujarIndicador()'
    },

    'pointerGuide':
    {
        'display': true,
        'strokeStyle': 'black',
        'lineWidth': 5,
    }
});

function Mensaje() {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    alert("Letra seleccionada:" + SegmentoSeleccionado.text + "!" + "  " + "QUE COMIENZE EL JUEGO");
    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;
    miRuleta.draw();
    dibujarIndicador();
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