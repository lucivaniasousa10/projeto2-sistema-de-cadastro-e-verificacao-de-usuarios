//CADRASTO
const nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))


//VERIFICAÇÃO DE IDADE
if(idade < 13) {
  alert("você não tem idade suficiente, não é possivel realizar o cadastro")
}else if (idade >= 13) {
//senha e login
 let senha = prompt("Crie sua senha")

//FAZER LOGIN
let nomeLogin = prompt("Digite seu nome para fazer login")
let senhaLogin = prompt("Digite sua senha para fazer login")

//VERIFICAR SE NOME E SENHA DE LOGIN ESTAO CORRETOS
if(nomeLogin === nome && senhaLogin === senha){
alert(`Login realizado com sucesso! ${nome}.`)
}else {
    alert(`Nome ou senha incorretos. Tente novamente.`)
}
}