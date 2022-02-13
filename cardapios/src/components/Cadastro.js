<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cardap.io</title>
    <link href="style_cadastro.css" rel="stylesheet"/>
    <link rel="icon" type="imagem/png" href="./imagens/logo-favicon.png" />
</head>
<body>
    <div id="container">
        <div class="item">
            <div class="logo-nome">
                <h1>Cardap.io</h1>
                <img src="imagens/logo.jpeg"/>
            </div>
            <div class="menu">
                <ul class="opcoes">
                    <li><a href="#">Hambúrguers</a></li>
                    <li><a href="#">Bebidas não alcoólicas</a></li>
                    <li><a href="#">Bebidas alcoólicas</a></li>
                    <li><a href="#">Porções e molhos</a></li>            
                </ul>
            </div>
        </div> 
        <div class="item a1">
            <h1>Cadastre-se</h1>
            <form class="formulario" action="">
                <input type="text" name="nome-completo" class="inputs" id="nome-completo" placeholder="Nome completo">
                <input type="text" name="cpf" class="inputs" id="cpf" placeholder="CPF">
                <input type="text" name="telefone" class="inputs" id="telefone" placeholder="Telefone celular">
                <input type="password" name="senha" class="inputs" id="senha" placeholder="Senha">
                <input type="password" name="conf-senha" class="inputs" id="conf-senha" placeholder="Confirmacao senha">
                <button class="botao-continuar">Continuar</button>                
                <p class="descricao">Já possui conta?<a href="#"> Faça login</a></p>
            </form>
        </div>
    </div>
</body>
</html>
