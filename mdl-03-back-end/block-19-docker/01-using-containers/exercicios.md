1 - No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ;
Resolução: Acessando o Docker Hub, ao encontrar a imagem do debian executei o comando `docker pull debian:stable-slim`

2 - Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) ;
Resolução: `docker container run -ti debian:stable-slim`
