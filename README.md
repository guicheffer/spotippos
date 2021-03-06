# Cool accomplishment

Teste em produção http://cool-accomplishment-guicheffer.herokuapp.com/ (please, non-ssl!)

Repositório https://github.com/guicheffer/cool-accomplishment

Coisinhas bem importantes:
-------------------------

- Utilizando **npm** _~3.8.9_
- Utilizando **Node.js** _>=5.1.1_
- Default branch **origin/develop**
- ~~Production branch **origin/master**~~

Setup
-----
Baixe o projeto e rode ~~(it takes a bit of time)~~:
```
make i
```
ou
```
npm i
```

##### EM SEGUIDA.....

Rode-o _just like that_:
```
make serve
```
ou
```
npm run start:dev
```

Agora acesse http://localhost:3000/ para testar a área _front_ do Cool Accomplishment e realizar seu sonho de encontrar um belo imóvel :)

Deploy
------

Se você deseja apenas visualizar a cara do _site_ funcionando, entre em: http://cool-accomplishment-guicheffer.herokuapp.com/ (no ssl certificate) ...

...ele foi compilado utilizando o seguinte comando(que se rodado, ele compilará os arquivos e dependências em *js* e *css* diretamente pra prod e servirá a pasta `build/` ):
```
make deploy
```
ou
```
npm start
```

Heroku (Server)
------
Se você quiser diretamente aplicar em um novo bucket no Heroku este projeto, clique abaixo:

<a href="https://heroku.com/deploy">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

Testes
-----

Para rodar os testes em dev/prod:

Isso já é rodado pelo `heroku/tests` antes de ser feito o deploy em produção seguindo a _task_ `npm run test:ci` do _package.json_.
```
make test
```
ou
```
npm test
```

Observações
-----------

> “Dependendo da sua experiência e/ou das ferramentas escolhidas, você pode precisar de mais ou menos tempo para realizar o desafio.”

:arrow_up: *that explains me to take a little while.* **_lol_**

O projeto está completamente responsivo porém faltando **BASTANTE** testes para que o deploy fique seguro antes de subir e que as funcionalidades sejam livres de bugs (sou um mero aprendiz em testes automatizados em frontend). Porém me preocupei bastante com a experiência do usuário na plataforma através do layout fornecido até que certo ponto poderíamos ainda mais preencher com informações relevantes que não virão, inicialmente, fazer parte do sistema. Portanto listei tecnicamente o que achei que poderia ser útil:

- ~~Desculpe os commits pré-entrega, foi só por questão de deixar o entregável ainda mais interativo e conquistável!~~

- Optei por utilizar as seguintes tecnologias abaixo (calma, explicarei o porquê 😝)

	- React.js (from facebook)
	- Redux.js (from React thing)
    - lodash for immutable objects
    - functional programming
    - UglifyJS
    - ES6 Lint
	- ... w/ es6 and es6Lint (using babel)
	- Stylus
	- ... PostCSS
    - ... OOCSS + Self organizing
	- Webpack as a module bundler
    - Nightwatch.js + ~~Karma~~
	- ~~CDN (not settled up)~~

- Primeiramente decidi utilizar as tecnologias em JS justamente pela questão da preferência e conforto em trabalhar no dia a dia com as mesmas por mais que já tenho experienciado frameworks como Angular 1/2 e Meteor.

- React com Redux simplesmente me deixou apaixonado pela agilidade e simplicidade na hora de codar camadas _only-view_, tanto que venho brincado com o mesmo há 2 anos em outros projetos. **PORÉM** também já brinquei e participei de projetos utilizando Angular e Vanilla.js (só estou falando isso pq eu ACHO q o Viva Real [vocês aí] utilizam Angular/Vanilla.js! LOL)

- Stylus? AMO como é escrito...como eu disse: pura preferência; OOCSS? Comecei com a brincadeira na Folha de S. Paulo, viciei na maneira de como é escrito, apesar de preferir BEM como organização do CSS e achar que funciona melhor para compreensão.

- Webpack pq é modinha. MENTIRA: a forma de como os pacotes são modularizados e compactados em um bundle realmente me convence a largar os _task runners_ e daí aprendi bastante a maneira de como o Webpack trabalha juntamente as suas rotinas e seus loaders.

- Nighwatch.js foi pq eu já usava PhantomJS em outro projeto e essa biblioteca me ajudou a migrar a maneira de como é compilado...porém a sintaxe é bem similar e continou praticamente a mesma utilizando _Selenium_ como driver.

- De qualquer forma, fica a dica pra desencargo 😝  rs:

- > Minha preferência ~~política~~(técnica) é o nada aquém do mínimo ético.

- Adicionalmente, fiz os filtros workarem juntamente as firulas implantadas com parte do código desenvolvida para deixar o UX ainda mais agradável como no layout :)

Melhorias [o que não deu tempo lol]
---------
* ~~Animações UI~~ :ok_hand:
* ~~Sidebar flutuando~~ :ok_hand:
* ~~Testes manuais~~ :ok_hand:
* ~~Testes end-to-end~~ :ok_hand:
* ~~Organização das layers do container principal~~ :ok_hand:
* ~~Corrigir warnings React (Caso bem parecido: https://github.com/martyjs/marty/issues/336)~~ :ok_hand:
* ~~Testes unitários :hourglass_flowing_sand:
* Testes de UI (css) :hourglass_flowing_sand:~~
* Inserir badges no `README.md` do repositório :hourglass_flowing_sand:
* Refatoração do core em js :hourglass_flowing_sand:
