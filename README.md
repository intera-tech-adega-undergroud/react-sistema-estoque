# Sistema de Estoque em React

Guia rápido para qualquer pessoa rodar o projeto no computador, mesmo sem experiência avançada.

## O que você precisa antes

- Node.js instalado (versão 18 ou superior)
- NPM instalado (normalmente já vem com o Node)
- Um terminal aberto na pasta do projeto

## Como rodar em modo de desenvolvimento

1. Abra o terminal na pasta do projeto.
2. Instale as dependências (só na primeira vez).
3. Inicie o servidor de desenvolvimento.

	npm install
	npm run dev

4. Abra o endereço mostrado no terminal no navegador.

Em geral será algo como:

	http://localhost:5173

## Como gerar a versão de produção

Se quiser testar o build final:

	npm run build

Para visualizar esse build localmente:

	npm run preview

## Problemas comuns

### Porta já em uso

Se aparecer erro de porta ocupada, feche outros projetos rodando ou finalize processos que estejam usando a porta.

### Dependências quebradas

Se algo estranho acontecer após atualizar pacotes, tente apagar a pasta node_modules e instalar novamente:

	rm -rf node_modules package-lock.json
	npm install

## Resumo rápido

- Instalar dependências: npm install
- Rodar projeto: npm run dev
- Build de produção: npm run build
- Preview de produção: npm run preview
