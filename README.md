# ProgramaIara - Rede social para inclusão de vagas afirmativas

Esta é uma plataforma desenvolvida como possível solução para os problemas de derespeito enfrentados por mulheres na hora de procurar vagas de emprego.


## Índice

- Visão geral
   - O desafio
   - Captura de tela (vazio)
   - Links (vazio)
- Meu processo
   - Construído com 
   - Introdução ao Create React App e Redux
   - O que aprendi (vazio)
   - Desenvolvimento contínuo (vazio)
   - Recursos úteis (vazio)
- Autora
- Agradecimentos (vazio)
- Saber mais


## Visão geral


### O desafio

Como mostrado na matéria da uol, ['Aparência vale mais do que o cérebro':  elas relatam assédios pelo LinkedIn...](https://www.uol.com.br/universa/noticias/redacao/2021/08/20/a-rede-e-profissional-nao-de-flerte-elas-relatam-assedios-pelo-linkedin.htm?cmpid=copiaecola), um relatório da rede social Linkedin, mostrou que foram removidas mais 157 mil postagens contendo "assédio ou abuso", ou seja, muitas mulheres não se sentem seguras para se candidatar ou ser relevantes na plataforma, podendo não se destacarem no filtro dos recrutadores e perdendo oportunidades.

Por isso essa plataforma trará um ambiente seguro para mulheres compartilharem vagas afirmativas dentro da área de tecnologia, trocar cursos e conhecimento para seu crescimento profissional.

As usuárias devem ser capazes de:

- Fazer seu cadastro;
- Colocar suas hard-skills e soft-skills em destaque.
- Postar no feed da rede.

### Captura de tela

![](./captura de tela.jpg)

Adicione uma captura de tela da sua solução. A maneira mais fácil de fazer isso é usar o Firefox para visualizar seu projeto, clicar com o botão direito do mouse na página e selecionar "Tirar uma captura de tela". Você pode escolher uma captura de tela de altura total ou cortada com base no tamanho da página. Se for muito longo, talvez seja melhor cortá-lo.

Como alternativa, você pode usar uma ferramenta como [FireShot](https://getfireshot.com/) para tirar a captura de tela. O FireShot tem uma opção gratuita, então você não precisa comprá-lo.

Em seguida, corte/otimize/edite sua imagem como quiser, adicione-a ao seu projeto e atualize o caminho do arquivo na imagem acima.

**Observação: exclua esta observação e os parágrafos acima ao adicionar sua captura de tela. Se preferir não adicionar uma captura de tela, sinta-se à vontade para remover toda esta seção.**

### Links

- URL da solução: [Adicionar URL da solução aqui](https://your-solution-url.com)
- URL do site ao vivo: [Adicione URL do site ao vivo aqui](https://your-live-site-url.com)

## Meus desafios

#### Maior desafio
Exportação do firebase. Mesmo seguindo todos os passos sugestionados pela [documentação](https://firebase.google.com/docs/web/setup) do Firebase, não estava exportando o db e o auth para o feed. 
Então foi preciso utilizar uma solução do [stackoverflow](https://stackoverflow.com/questions/69044315/module-not-found-cant-resolve-firebase-in).

#### Desafio da identidade visual





### Construído com

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

### O que eu aprendi

Use esta seção para recapitular alguns de seus principais aprendizados enquanto trabalhava neste projeto. Escrevê-los e fornecer amostras de código das áreas que você deseja destacar é uma ótima maneira de reforçar seu próprio conhecimento.

Para ver como você pode adicionar trechos de código, veja abaixo:

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
```

Se você quiser mais ajuda para escrever remarcações, recomendamos verificar  para saber mais.

**Observação: exclua esta observação e o conteúdo desta seção e substitua por seus próprios aprendizados.**

### Desenvolvimento contínuo

() Confirmação de dados cadastrais.
   () termos de uso pré-cadastro.
() Separar página de login e cadastro.
() Páginação de postagens.
() Edição de usuário.
() Funcionamento dos botões das postagens.
() Filtro para achar postagens (busca no header).

### Recursos úteis

- [Exemplo de recurso 1](https://www.example.com) - Isso me ajudou pelo motivo XYZ. Eu realmente gostei desse padrão e vou usá-lo daqui para frente.
- [Exemplo de recurso 2](https://www.example.com) - Este é um artigo incrível que me ajudou a finalmente entender XYZ. Recomendo a todos que ainda estão aprendendo esse conceito.

**Observação: exclua esta observação e substitua a lista acima pelos recursos que o ajudaram durante o desafio. Isso pode ser útil para qualquer pessoa que esteja visualizando sua solução ou para você mesmo quando olhar para trás neste projeto no futuro.**

## Autora

- Desenvolvedora: [Claudia de Jesus Dantas](https://github.com/claudiadejesusdantas)

## Saber mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, confira a [documentação do React](https://reactjs.org/).