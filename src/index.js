/**
 * @author Ricardo Azzi <ricardo.azzi@viavarejo.com.br>
 * 
 * Biblioteca que permite que você execute blocos de códigos através da escrita de
 * uma palavra em qualquer parte do sistema.
 *
 * Esta biblioteca serve exclusivamente para ser utilizada de forma auxiliar no
 * período de desenvolvimento do sistema.
 */
window.Cheat = (function(){
	var me = this;
	me.sequencias = {};

	window.onload = function(){
		document.body.addEventListener('keypress', function(e){
			var letra = String.fromCharCode(e.which);
			for (var palavra in me.sequencias) {
				(function(seq, palavra){
					var i = seq.contador;
					if (palavra[i] == letra)
						i = ++seq.contador;
					
					else
						seq.contador = 0;

					if (palavra.length == i) {
						(Object(seq.fn) instanceof Function) && seq.fn();
						seq.contador = 0;
					}
					
					
				})(me.sequencias[palavra], palavra);
			}
		}, false);
	};

	return me;
}).apply({

	/**
	 * @property {Object} sequencias 
	 * Variável que administra as frases vinculadas as funções e diz
	 * quando uma função será executada
	 * 
	 * @private
	 */
	sequencias: null,

	/**
	 * Este método será usado quando você deseja vincular uma
	 * frase com uma função
	 * 
	 * @param  {String} sequencia
	 * Frase que irá chamar a função quando for digitada
	 * 
	 * @param  {Function} callback
	 * Função que será chamada
	 */
	on: function(sequencia, call){
		if (typeof sequencia != 'string') { throw "Sequência deve ser uma string"; }
		sequencia = sequencia.toLowerCase();

		var me = this;
		me.sequencias[sequencia] = {
			target:		sequencia,

			fn:			call,

			contador:	0
		};
	},

	/**
	 * Quando você deseja remover uma frase que tem um callback vinculado.
	 * 
	 * @param  {String} sequencia
	 * Frase que você deseja retirar o callback
	 * 
	 * @return {Boolean}
	 * Retorna se o callback foi ou não tirado da frase.
	 */
	un: function(sequencia){
		var me = this;

		if (me.sequencias[sequencia])
			return (delete me.sequencias[sequencia]);

		return true;
	}
});