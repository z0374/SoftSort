index();

let alf ='';
let omg ='';
let qtnm ='';
const cmp = document.querySelector('input');
var rst = [];
var bt ;






//Chamadas do botão
function ns(){
	extxt('h1', 'Sorteio');
	extxt('h2', 'Escolha o número inicial','in')
	cmp.removeAttribute('hidden');
	btn('SETAR', 'st()');
	rst = [];
	
}
function st(){
	let omg ='';
	alf = cmp.value;
	extxt('h1', `Sorteio do<br> ${alf}`, 'sth');
	extxt('h2', 'Escolha o número final')
	btn('SETAR', 'stt()');
	lmp();

}
function stt(){
	omg = cmp.value;
	extxt('h2','Escolha a quantidade de números');
	extxt('h1', `Sorteio do<br> ${alf} ao ${omg}`,'sth');
	btn('SETAR', 'sttt()');
	lmp();
}
function sttt(){
	qtnm = cmp.value;
	extxt('h1', `SORTEIO`,'sth');
	extxt('h2', `${qtnm} números do ${alf} ao ${omg}`,'rst');
	cmp.setAttribute('hidden', true);
	btn('SORTEAR', 'srt()');
	lmp();
}

//SORTEIO
function srt(){
	let nr = parseInt(Math.random() * omg + 1);
	if(nr < alf){srt();}
else{
	for( var s = 0; s < rst.length; s++) {

            if( rst[s] == nr) {

                srt()
            }
        }


		if(qtnm > rst.length){
			rst.push(nr);
			srt();
}else{
	console.log(rst);
	extxt('h1','RESULTADO','sth');
	extxt('h2',` ${rst}`,'rst');
	btn('RESET', 'ns()');
}}
}
	
	
//manusear TAGS HTML
function extxt (tag, txt,id){
	let tx = document.querySelector(tag);
	tx.innerHTML = txt;
	tx.setAttribute('id',id)
}

function btn (txt, atr){
	bt = document.querySelector('button');
	bt.innerHTML = txt;
	bt.setAttribute('onclick', atr);
	bt.removeAttribute('hidden');
}
function lmp(){
	cmp.value = '';
}

//Inicio
function index(){
	extxt('h1', 'Sorteio');
	extxt('h2', 'Clique em INICIAR para configurar')
	btn('INICIAR', 'ns()');
}