# Programa Iara 🧜‍♀️- Rede social para mulheres na tech
## Inclusão de vagas afirmativas, cursos e sororidade em um só lugar

![Tela Inicial](https://i.pinimg.com/originals/31/c2/f6/31c2f61a368139ac11c764452a48a534.jpg)

Esta plataforma foi desenvolvida com o intuito de unir em um só ambiente online mulheres da área de tecnologia, que buscam vagas, cursos e outras amigas para conversar sobre essa área fantástica. Se encantem com o canto da sereia e navegue nesse site incrível! 

## Índice

- Visão geral
   - O desafio
   - Captura de tela
   - Links
- Meus desafios
   - Maior desafio
   - Desafio da identidade virtual
   - Desafio das cores do header(vazio)
   - Desafio dos links nas postagens(vazio)
- Construído com 
   - Introdução ao Create React App e Redux
- Desenvolvimento contínuo
- Recursos úteis 
- Saber mais
- Autora


## Visão geral

Como mostrado na matéria da uol, ['Aparência vale mais do que o cérebro':  elas relatam assédios pelo LinkedIn...](https://www.uol.com.br/universa/noticias/redacao/2021/08/20/a-rede-e-profissional-nao-de-flerte-elas-relatam-assedios-pelo-linkedin.htm?cmpid=copiaecola), um relatório da rede social Linkedin, mostrou que foram removidas mais 157 mil postagens contendo "assédio ou abuso", ou seja, muitas mulheres não se sentem seguras para se candidatar ou ser relevantes na plataforma, podendo não se destacarem no filtro dos recrutadores e perdendo oportunidades.

Esta é uma plataforma desenvolvida como possível solução para os problemas de derespeito enfrentados por mulheres na hora de procurar vagas de emprego.

Por isso essa plataforma foi pensada para trazer ambiente seguro para mulheres compartilharem vagas afirmativas dentro da área de tecnologia, trocar cursos e conhecimento para seu crescimento profissional.

### O desafio
As usuárias poderão:

- Fazer uma rede social interativa com React.
- Fazer seu cadastro com foto(url).
- Postar no feed da rede cursos, trabalhos e sobre a pessoa para gerar networking.


### Capturas de tela 

![Home](https://i.pinimg.com/originals/db/46/00/db46000a3d91760dcaff74dc3a961833.jpg)
![Cursos](https://i.pinimg.com/originals/f1/92/06/f19206f4d88a76faef8e75dba604a16e.jpg)
![Vagas](https://i.pinimg.com/originals/25/6d/b0/256db02823d347f2eb3d3731e4ad3c37.jpg)
![Network](https://i.pinimg.com/originals/53/49/0b/53490b579ba046e6588d92027e2f2bd9.jpg)


![Home](https://i.pinimg.com/564x/44/50/42/4450420c470ff46444330d73c8928998.jpg)
![Cursos](https://i.pinimg.com/564x/f4/08/10/f408104d910f1ecf67d1fd2d75126070.jpg)
![Vagas](https://i.pinimg.com/originals/d1/0a/42/d10a426cc51c39515330bb59d39003ef.jpg)
![Network](https://i.pinimg.com/originals/66/b6/64/66b664f52746ed4066af73084bce45bd.jpg)

### Links

- Site: [ProgramaIara](https://programaiara.vercel.app/)
- Site - Vídeo: [ProgramaIara](https://youtu.be/1YK723fXFKA)
- Vídeo: [Apresentação](https://youtu.be/AdVmRbU4_-o)
- Vídeo: [Como se cadastrar](https://youtu.be/6mpOp95qApc)

## Meus desafios

### Maior desafio
Exportação do firebase. Mesmo seguindo todos os passos sugestionados pela [documentação](https://firebase.google.com/docs/web/setup) do Firebase, não estava exportando o db e o auth para o feed. 
Então foi preciso utilizar uma solução do [stackoverflow](https://stackoverflow.com/questions/69044315/module-not-found-cant-resolve-firebase-in).

### Desafio da identidade visual
Construir uma identidade visual para o site, transmitindo sensibilidade, feminilidade e profissionalismo. Pensar no logo e na imagem que transmitisse a característica feminina e forte, como os contos de sereias e escolher a Iara que é uma das personas mais importante do folclore brasileiro e que abraçaria as características mencionadas acima.

<!-- #### Desafio das cores do header

#### Desafio dos links nas postagens


```html
<h1>Algum código HTML do qual me orgulho</h1>
```
```css
.proud-of-this-css {
   cor: mamão chicote;
}
```
```js
const proudOfThisFunc = () => {
   console.log('🎉')
}
``` -->




## Construído com

- HTML5 
- CSS3
- Flexbox 
- Biblioteca JS
- [React Redux](https://react-redux.js.org/) 
- [Material UI](https://mui.com/core/)
- [React Flip Move](https://www.npmjs.com/package/react-flip-move)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [React Linkify](https://www.npmjs.com/package/react-linkify)
- [The Markdown Guide](https://www.markdownguide.org/)

# Introdução ao Create React App e Redux

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app), usando o [Redux](https://redux.js.org/) e [Redux Toolkit](https://redux-toolkit.js.org/) modelo.

## Scripts disponíveis

No diretório do projeto, você pode executar:

```
npm start
```

Para executar o aplicativo no modo de desenvolvimento, abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.

Você também pode ver erros de devtools no console.

```
teste npm
```

Inicia o executor de teste no modo de observação interativo.
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.


```
npm run build
```

Cria o aplicativo para produção na pasta **build**.
Ele empacota corretamente o React no modo de produção e otimiza a compilação para obter o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

```
npm run eject
```


**Nota: esta é uma operação unidirecional. Depois de 'ejetar', você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de construção e opções de configuração, você pode `ejetar` a qualquer momento. 

Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto, para que você tenha controle total sobre eles. 

Todos os comandos, exceto `eject`, ainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto você está por conta própria.

Você nunca precisa usar `eject`. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para ela.

# Desenvolvimento contínuo
Algumas melhorias que serão desenvolvidas futuramente:

( ) Confirmação de dados cadastrais.
   
( ) Termos de uso pré-cadastro.

( ) Separar página de login e cadastro.

( ) Páginação de postagens.

( ) Edição de usuário.

( ) Inserir nome de usuário no comentário.

( ) Controlar número de curtida por pessoa.

( ) Filtro para achar postagens (busca no header).

### Recursos úteis

- [Vídeo: Let's build LinkedIn with REACT.JS! (with Redux & Firebase)](https://youtu.be/QaYts9sPmcY) - Isso me ajudou a estruturar os conhecimentos de montagem do React e treinar para criar o projeto.

## Saber mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, confira a [documentação do React](https://reactjs.org/).

## Desenvolvedora do Projeto
- Desenvolvedora: [Claudia de Jesus Dantas](https://www.instagram.com/claudiadejesusdantastudy/)

![Claudia de Jesus Dantas](https://media2.giphy.com/media/rVMwFhvflvxAc/giphy.gif?cid=ecf05e47jet4flvkfuam4im7dh9lijrtbkveodqxh36a0gq6&rid=giphy.gif&ct=g)
