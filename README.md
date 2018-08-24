# session-login

Login com JS, Local e Session Storage

Utilize os comandos abaixo na CLI de sua escolha (Powershell, cmd, console do linux...)

O mesmo pode ser utilizado por programas como [Git GUI](https://git-scm.com/docs/git-gui), [Github Desktop](https://desktop.github.com/), [Sourcetree APP](https://www.sourcetreeapp.com/), [Git Kraken](https://www.gitkraken.com/)

## Fork

Faça um fork para você ter o código mais atualizado.

Para isso utilize o botão fork (logo abaixo da sua foto).

## Clonando

Após feito o fork traga o repositório para a sua máquina utilizando o comando clone:

```git clone https://github.com/<usuário>/session-login/```

> Não esqueça de subistituir `<usuário>` pelo seu nome de usuário, ou copiar a url do navegador

## Edição local

Agora é possível realizar alterações em sua própria máquina, crie modifique conforme quiser! :metal:

## Versionando

Após realizar alguma alteração precisamos jogar os arquivos modificados/criados para o servidor do Github.

> testar e verificar se está tudo funcionando
> 
> Recomendo realizar pequenas alterações fazendo pequenos commits

### Adicionando arquivos

Primeiramente devemos informar ao git os arquivos que queremos adicionar:

```git add .```

> O comando acima adiciona todos os arquivos alterados/criados

### Criando um commit

Agora vamos criar um pacote com uma informação do que foi alterado:

```git commit -m "<mensagem>"```

> Utilizando-se das pequenas alterações, fica bem mais fácil de escrever uma mensagem
> Ex.:
> 
> ```git commit -m "adicionado uma tela listando os usuários"```

### Subindo as alterações

Por fim precisamos encaminhar os pacotes com os commits para o servidor:

```git push origin master```

O sistema irá solicitar seu login e senha e, informando corretamente, podemos atualizar a página do repositório no site do github!
