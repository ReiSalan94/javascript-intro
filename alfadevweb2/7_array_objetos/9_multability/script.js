//multabilidade altera um
 //obj e altera todos
 pessoa = {
    nome: 'juviliane'
 }
 pessoa2 = pessoa;
 console.log(pessoa.nome);
 console.log(pessoa2.nome);
 pessoa2.nome='Ju';
 console.log(pessoa.nome);
 console.log(pessoa2.nome);
 pessoa.nome='João';
 console.log(pessoa.nome);
 console.log(pessoa2.nome);
 pessoa3={
    nome:'Jorge'
 }
 console.log(pessoa3.nome);
 pessoa3 = pessoa;
 console.log(pessoa3.nome);