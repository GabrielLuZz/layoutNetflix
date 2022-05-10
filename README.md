# Extra - Estilizando Página Inicial de uma Plataforma de Streaming

Bom, nós já estamos trabalhando com o projeto da plataforma de streaming há um tempo agora. Até o momento você desenvolveu as duas primeiras telas de acesso à plataforma, a tela de login e a tela de escolha de usuário(aquela "Quem está assistindo"). E nada mais justo que finalizar esse projeto, desenvolvendo agora a página inicial da plataforma.

Para essa entrega, voce vai receber um repositório, contendo a estruturação inicial mínima de um projeto. Você vai fazer o fork desse repositório e a partir disso você vai trabalhar com a estilização(CSS) da página.

Arquivos base já são fornecidos, juntamente com algumas imagens para você poder se preocupar apenas com o código. Também foram disponibilizadas todas as especificações necessárias: cores, fontes, tamanhos, etc.

## Especificações

### Projeto

Recomendamos que você analise toda a estrutura HTML proposta para esse projeto, é importante entender como tudo foi estruturado antes de colocar a mão na massa. 

Não tenha pressa para conhecer o projeto antes de partir para ação!

**Obs:** Não é obrigatório utilizar a estrutura sugerida, você pode construir o seu próprio HTML, se preferir.

### Estrutura de pastas

- README.md
- index.html
- /assets
    - /css
        - style.css
    - /img
        - layout.png
        - logo.png
        - user.png
        - /movies
            - amigas.jpg
            - gg.jpg
            - good.webp
            - papel.jpg
            - papel2.webp
            - ted.webp
            - tedlogo.png
    - /js
        - script.js

### Geral

- Fonte: `'Helvetica Neue',Helvetica,Arial,sans-serif;`
- Background body: `#141414`

### Container

#### Desktop

- O container possui uma largura máxima de `1735px`, caso a resolução seja menor que isso, o container possui um padding lateral de `60px`

#### Mobile

- O container possui um padding lateral de `30px`

### Header

#### Desktop

- A logo possui `92px` de largura máxima
- O ícone do usuário possui `32px` de largura
- Itens menu: `#e5e5e5`
- Item ativo menu: `#ffffff`
- Item hover menu: `#b3b3b3`
- Fonte: `14px`
- Background: `linear-gradient(to bottom, rgba(0,0,0,.7) 10%, rgba(0,0,0,0))`

#### Mobile

- A logo possui `70px` de largura máxima
- O ícone do usuário possui `28px` de largura

### Destaque

#### Button "Mais informações"

- Background: `rgba(109,109,110,0.7)`
- Background hover: `rgba(109,109,110,0.4)`
- Cor do texto: `#ffffff`

#### Button "Assistir"

- Background: `#ffffff`
- Background hover: `rgba(255,255,255,0.75)`
- Cor do texto: `#000000`

#### Desktop

- Fonte buttons: `22px`

##### Descrição

- Logo programa em destaque: `650px` de largura máxima
- Cor descrição: `#ffffff`
- Fonte descrição: `26px`
- Sombra do texto: `2px 2px 4px rgb(0 0 0 / 45%)`;
    - _Um pouco mais sobre sombras de texto_: [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
    - _Ferramenta:_ [Text Shadow CSS Generator](https://cssgenerator.org/text-shadow-css-generator.html)

#### Mobile

- Fonte buttons: `12px`

##### Descrição

- Logo programa em destaque: `160px` de largura máxima
- Fonte descrição: `12px`

### Catálogo

#### Desktop

- Cor do título: `#e5e5e5`
- Fonte título: `26px`
- Background seção 'Continuar assistindo': `linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%)`
- Cada item(programa) do catálogo possui `287px` de largura máxima

#### Mobile

- Fonte título: `17px`
- Cada item(programa) do catálogo possui `50%` de largura máxima
    - _Cada seção terá 2 itens(programas) por linha_

### Footer

- Borda: `1px solid rgb(128 128 128 / 26%)`
- Cor conteúdos: `gray`
- Ícones redes sociais: `20px` de largura
- Fonte itens do menu: `13px`
- Fonte copyright: `11px`

## Itens obrigatórios

- O site precisa ser **mobile first**
- Precisa estar **publicado no gitlab pages**

## Repositório

[Link para fazer o fork do projeto](https://gitlab.com/kenzie-academy-brasil/se/fe/sprint-3-css-week/assessment-styling-streaming-platform-home-page)

### Você vai utilizar os seguintes layouts como base:

A imagem também está dentro do repositório também, então você pode abrir na sua máquina, caso ache melhor.

#### Mobile:

<!-- ![Template Mobile](https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/sprint3/streaming1.png) -->

[Ver em tela cheia](https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/sprint3/streaming1.png)

#### Desktop:

<!-- ![Template Desktop](https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/sprint3/streaming2.png) -->

[Ver em tela cheia](https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/sprint3/streaming2.png)



