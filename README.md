# Avaliação técnica VEK

Este projeto se trata da parte Frontend da avaliação técnica para o processo seletivo da empresa Alelo

### Pre-requisitos

É necessário ter instalado as seguintes ferramentas para rodar o projeto:

* [Docker](https://www.docker.com/)

Este projeto depende da sua parte Backend que se encontra no seguinte repositório:
* [Backend](https://github.com/zehurzeda/alelo-frota-back)

### Rodando o projeto

Para rodar o projeto somente é necessário possuir o docker portanto os seguintes passos são necessários:

#### Imagem

Na raiz do projeto rodar o seguinte comando para criar a imagem docker:

```
docker build -t alelo/frota-front-image .
```

#### Container

Na raiz do preojto rodar o seguinte comando para criar o container docker:
```
docker run --name frota-front-container -d -p 4200:80 alelo/frota-front-image
```

Pronto temos a aplicação online!!

## Acessando a aplicação

Agora que nossa aplicação está online podemos acessa-la pelo link:

[localhost:4200](http://localhost:4200)

Também foi feito o deploy da aplicação no Heroku, podemos acessa-la pelo link:

[heroku-app](https://alelo-frota.herokuapp.com/vehicles)
