<h1>Login Json Web Token</h1>

<h3>Sobre:</h3>
<h6>Um sistema de login conectado ao banco de dados Mongo.
Utiliza-se a biblioteca espress para configurar as rotas com o Router.
criamos um modelo schema com os pré requisitos para se registrar.
Na rota de usuarios deve ter duas funções com o metodo post uma para se regsistar e outra para logar.

Um dos problemas que encontramos é fazer com que nosso banco de dados não tenha acesso a senha do usuario, para resolver esse problema nós vamos o bcrypt para codificar a senha do usuario e salvala no nosso banco de dados.
isso gera um outro problema que é com nosso schema. nós não podemos aceitar uma senha com menos 8 digito mas como o bcrypt gera um codigo aleatorio de grande complexidade ele acaba passando pelo filtro do schema.
para resolver isso vamos usar o hapi/joi que basicamente vai fazer o mesmo serviço do schema porem dessa vez interceptando o dado que veio do html e mantendo a descrição da senha no banco de daodos.
 </h6>

<h3>Tecnologias:</h3>
<h6>Java Script
Node
insomnia
</h6>
<h3>Bibliotecas:<h3>
<h6>mongoose
bcrypt
jsonwebtoken
@hapi/joi</h6>