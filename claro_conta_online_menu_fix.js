/*
*	Versão 0.2
* 14 Abril de 2009
*	Leandro Cesquini Pereira - leandro.cesquini@gmail.com
*
*	Atenção: Se quiser fazer alterações, fique a vontade,
*	apenas mantenha os créditos originais.
*
* Baseado nos códigos encontrados em http://diveintogreasemonkey.org
* E o menu "drop-down" foi baseado em
* http://www.htmldog.com/articles/suckerfish/dropdowns/
* Bom proveito ;-)
*
* Histórico
*		Versão 0.1 (Hello World)
*		Para esta versão, o código pode não estar perfeito,
*		o objetivo principal era funcionar =)
*		Afinal usar o IE6 via WINE não é nada legal.
*
*		Versão 0.2
*		Alterados os includes e excludes, agora espero que carregue em todas
*		as páginas corretamente
*/

// ==UserScript==
// @name           Claro Conta Online Menu Fix
// @namespace      claro.com.br
// @description    Cria um menu no topo do site Claro Conta Online (https://contaonlinepf.claro.com.br), idêntico ao menu original, que não funciona no Firefox.
// @author				 Leandro Cesquini Pereira
// @include        https://contaonlinepf.claro.com.br/webbow/*
// @exclude				 https://contaonlinepf.claro.com.br/webbow/login/initPF_oqe.do
// @exclude				 https://contaonlinepf.claro.com.br/webbow/login/logoutPJ.do
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('#menutop { background-color: #FFF; font-size: 12px; font-family:"Lucida Grande", verdana, arial, helvetica, sans-serif; }');
addGlobalStyle('#menutop img { border: 0; }');
addGlobalStyle('#menutop a { color: #000; }');
addGlobalStyle('#menutop a:hover { color: #F35B5A; }');
addGlobalStyle('#menutop { clear: both; }');

addGlobalStyle('#nav, #nav ul {padding: 0; margin: 0; list-style: none; }');
addGlobalStyle('#nav a {display: block; width: 200px;}');
addGlobalStyle('#nav li {float: left; width: 200px; background-color: #FFF;}');
addGlobalStyle('#nav li ul {position: absolute; width: 200px; left: -999em; border: 1px solid #999}');
addGlobalStyle('#nav li {padding-bottom: 5px;}');
addGlobalStyle('#nav li:hover ul { left: auto;}');

addGlobalStyle('#contato {float: right;}');
addGlobalStyle('#contato a {color: #5252DC; font-weight: bold;}');

var menuTop = document.createElement("div");
menuTop.setAttribute("id", "menuTop");

var menuDiv = <>
		<ul id="nav">
			<li><a href="#"><img src="https://contaonlinepf.claro.com.br/webbow/images/itemAdm.gif" alt="Administração" /></a>
				<ul>
					<li><a href="https://contaonlinepf.claro.com.br/webbow/dataRegister/loadCustomer.do">Dados Cadastrais</a></li>
					<li><a href="https://contaonlinepf.claro.com.br/webbow/login/changePasswordInit.do">Alterar Senha</a></li>
					<li><a href="https://contaonlinepf.claro.com.br/webbow/unsign/init.do">Descadastramento</a></li>
				</ul>
			</li>
			<li><a href="#"><img src="https://contaonlinepf.claro.com.br/webbow/images/itemPagamentos.gif" alt="Pagamentos" /></a>
				<ul>
					<li><a href="https://contaonlinepf.claro.com.br/webbow/payment/makeSlip.do">Boleto para Pagamento</a></li>
					<li><a href="https://contaonlinepf.claro.com.br/webbow/payment/makeBarCode.do">Pagamentos</a></li>
					<li><a href="https://contaonlinepf.claro.com.br/webbow/payment/listHistory.do">Histórico de Pagamentos</a></li>
				</ul>
			</li>
			<li><a href="#"><img src="https://contaonlinepf.claro.com.br/webbow/images/itemGerenciamento.gif" alt="Gerenciamento" /></a>
				<ul>
					<li><a href="https://contaonlinepf.claro.com.br/webbow/currentMonth/initCurrentMonth.do">Chamadas não Faturadas</a></li>
					<li><a href="https://contaonlinepf.claro.com.br/webbow/previousMonths/initPreviousMonths.do">Últimas Faturas</a></li>
					<li><a href="https://contaonlinepf.claro.com.br/webbow/downloadPDF/init.do">Download de Últimas Faturas</a></li>
					<li><a href="https://contaonlinepf.claro.com.br/webbow/dynamicGraphics/initDynamicGraphics.do">Gráficos Dinâmicos</a></li>
				</ul>
			</li>
		</ul>
		<div id="contato">Claro Menu Fix<br /><a href="mailto:leandro.cesquini@gmail.com">Contato</a></div>
</>;

menuTop.innerHTML = menuDiv;

document.body.insertBefore(menuTop, document.body.firstChild);

