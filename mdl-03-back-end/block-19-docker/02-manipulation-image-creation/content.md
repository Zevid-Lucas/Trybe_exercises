Baixa, inicia, nomeia um container solicitando um terminal no container que consiga imprimir retoro dos comandos e estabelaça uma interface
de comunicação fisíca com esse terminal, usando a imagem do ubuntu
-> `docker run --name meu_container -it ubuntu`

Iniciamos o container, acoplando-se ao terminal do conteiner e podendo imprimir os retorno do terminal e especificando o container pelo nome atribuido.
-> `docker start -ai meu_container`

No comando `docker run -d -P httpd:2.4`, o menos -P pede ao docker para fazer o mapeamento de portas automático.

O -p no comando permite que esoecifiquemos a porta em seguida passando a PORTA-SO-HOSPEDEIRO:PORTA-SO-CONVIDADO. **OBS**: é importante saber a porta que a aplicação
vai usar antes de rodar o parâmetro -p.
-> `docker run -d -p <PORTA_SO_HOSPEDEIRO>:<PORTA_SO_CONVIDADO>`

Criando Dockerfile para aplicação react

FROM node:14-alpine AS build _->_ Informamos de onde nossa imagem será baseada
WORKDIR /app _->_ Define diretório de trabalho, usado para base de execução dos comandos.
COPY package\*.json ./ _->_ Copiar diretórios e arquivos para dentro da nossa imagem.
RUN npm install _->_ Irá executar uma lista de comandos durante a criação da imagem.
COPY . .  
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80 _->_ Evidenciar qual porta de acesso externo será utilizada pela nossa imagem
ENTRYPOINT ["nginx", "-g", "daemon off;"] _->_ Executar comando sem que sejam sobrescritos pelo run ao executar o container.

Exercicio 04 Builde e execute um container baseado em sua imagem sem passar nenhum comando.
-> `docker image build ./ -t cowsay`
