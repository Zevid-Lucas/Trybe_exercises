1 - No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ;
Resolução: Acessando o Docker Hub, ao encontrar a imagem do debian executei o comando `docker pull debian:stable-slim`

2 - Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) ;
Resolução: `docker container run -ti debian:stable-slim`

3 - Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;
Resolução: `docker container ls -l`

4 - Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;
Resolução: `docker container start 33449311e17c`

5 - Retome o container que foi criado anteriormente nesse exercício ;
Resolução `docker attach 33449311e17c`
