window.Cheat=function(){var a=this;return a.sequencias={},window.onload=function(){document.body.addEventListener("keypress",function(b){var c=String.fromCharCode(b.which);for(var d in a.sequencias)!function(a,b){var d=a.contador;b[d]==c?d=++a.contador:a.contador=0,b.length==d&&(Object(a.fn)instanceof Function&&a.fn(),a.contador=0)}(a.sequencias[d],d)},!1)},a}.apply({sequencias:null,on:function(a,b){if("string"!=typeof a)throw"Sequência deve ser uma string";a=a.toLowerCase();var c=this;c.sequencias[a]={target:a,fn:b,contador:0}},un:function(a){var b=this;return!b.sequencias[a]||delete b.sequencias[a]}});