help:
	@echo "Por favor utilize 'make <target>' onde <target> é um dos comandos abaixo"
	@echo "  install		=> 	instala as dependências do arquivo package.json"
	@echo "  serve			=> 	rode o projeto em desenvolvimento"
	@echo "  test			=> 	teste todos os testes bem testados"
	@echo "  deploy		=> 	builde os arquivos diretamente para deploy"
	@echo "  gource		=> 	ver histórico animado dos commits"

install:
	npm install

i: install

dev:
	npm run start:dev

start: dev

serve: start

serve-new: clean start

test:
	npm test

clean:
	npm run clean

build:
	npm run start:build

# Be sure on testing
deploy:
	npm run deploy

gource:
	@echo "Nenhuma task 'gource' foi configurada"
	@echo "No 'gource' task was settled up"
