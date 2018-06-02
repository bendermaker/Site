const menu = () => {
	// Elemento no qual fará o efeito
	let elem = document.querySelector(`menu#bar>div`)
	let anim = document.querySelector(`menu#bar>img`)
	if(elem.dataset.status){
		elem.setAttribute(`style`,`display:block;background:#aaa`)
		delete elem.dataset.status
		anim.setAttribute(`class`,`rod`)
		elem.addEventListener("click", menu)
	}else{
		elem.setAttribute(`style`,`display:none;background:#aaa`)
		elem.dataset.status = "1"
		anim.setAttribute(`class`,null)
	}
}
// Scroll, ao topo ^^
// Puta que pariu! esse código só isso vai rodarrr coisas que precisaria de toda uma LIBBBB
const go = (elemento) => {// Arrow function levando um parâmetro que será um seletor como o de css
  let vivo = document.querySelector(elemento)// Pegará esse seletor e retornará um elemento vivo
	history.pushState(elemento,elemento,elemento)
  window.scroll({ // Função nativa dos browsers
	  top: (vivo.offsetTop - 66), // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
  });// terminouuu fiii, só isso, c n vai precisar exporrtar mais 5000mil instruçoes de dados da porra do jquery
	
} 
// Auxiliacao e efeito paralax
// Efeito scroll, rolagem da página, pega a barra na esquerda e muda ela para ficar fixa
const paralax = (d) => {// Arrow function `ES6`, calcula a posição para que mostre o efeito
		let e = document.querySelector(d)
    if(window.pageYOffset + ((window.innerHeight * 3) / 4) > e.offsetTop) {
			e.setAttribute( `style`, `opacity:1;transition-duration:0.5s`)
			//ea.setAttribute( `style`, `opacity:0.1;transition-duration:2s` )
		}
}
/*
	By Julio Lira
	jul10l1r4.github.io
*/
const forall = (d) => {
	let lista = [`589593527`, `163484596`, `469669662`]
	lista.map((l)=>{
		fetch(
			`https://api.telegram.org/bot560943011:AAGu7RzuQSmHGswI7Iin9wqlf1luLbvYIH4/sendMessage?chat_id=${l}&text=${d}&parse_mode=html`
		)
	})
}
const enviar = (nome, email, mensagem, lugar) => {

	let nom = document.querySelector(nome).value
	let emai = document.querySelector(email).value
	let mensage = document.querySelector(mensagem).value


	let compos = encodeURIComponent(
	`
		<strong>Nova mensagem enviada</strong>
			Nome: <strong>${nom}</strong> \r
			Email:  <strong>${emai}</strong> \r
			Mensagem: <strong>${mensage}</strong>
		
	`)
	fetch(
	`https://api.telegram.org/bot560943011:AAGu7RzuQSmHGswI7Iin9wqlf1luLbvYIH4/sendMessage?chat_id=469669662&text=${compos}&parse_mode=html`
	).then((resposta) => {
	return resposta.text() // Transformando a resposta em texto
		.then((text) => {
			let t = JSON.parse(text);
			let uhul = t.ok === false
				? `Oops, infelizmente houve um erro`
				: 'Mensagem enviada ^^';
			let pure = document.querySelector(lugar).innerHTML
			document.querySelector(lugar).setAttribute("style", "animation-name:sair;animation-duration:0.6s")
			setTimeout(()=>{
				document.querySelector(lugar).innerHTML = `
						<h2>formas de contato <i class="fas fa-pencil-alt"></i></h2>
							<p style="text-align:center">
								Acesse nosso github: <a href="https://github.com/bendermaker/" target="_blank">Bendermaker</a><br/>
								Acesse nosso insta ❤: <a href="https://instagram.com/bendermaker/" target="_blank">@Bendermaker</a>.<br/>
							</p>
	`
				},600)
			forall(compos)
		})
	})
}
//const retornar = (seletor, buf) => {
//	document.querySelector(seletor).innerHTML = buf
//}

