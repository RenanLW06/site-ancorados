# Site do GC Ancorados

Site estático (HTML, CSS e JavaScript puros). Não precisa instalar nada: abra o `index.html` ou envie a pasta inteira para qualquer hospedagem.

## Onde fica cada coisa

```
index.html          conteúdo e textos da página
css/
  variables.css     cores, fontes, tamanhos e espaços (comece por aqui)
  base.css          reset, tipografia, layout base, acessibilidade
  components.css    botões, cabeçalho, fotos, divisor de corda
  sections.css      cada seção da página + ajustes para tablet e celular
js/
  animations.js     aparecer ao rolar (discreto)
  interactions.js   linha no cabeçalho ao rolar
  main.js           liga tudo (carregar por último)
assets/
  logo.webp         logo completa
  logo-sm.webp      logo pequena (cabeçalho)
  favicon.svg       ícone da aba
  images/           fotos reais do GC (versão normal e -sm para celular) e og.jpg (compartilhamento)
```

## Como editar

- **Número do WhatsApp:** no `index.html`, procure `5585987990440` (aparece nos botões) e troque em todos.
- **Horários:** estão no hero e na seção "Para quem está chegando pela primeira vez". GC (sábado) e culto (domingo) ficam sempre separados.
- **Trocar uma foto:** substitua o arquivo em `assets/images/` mantendo o nome. Use WebP, com cerca de 1000 px de largura e uma versão `-sm` de 640 px.
- **Imagem de compartilhamento:** em `index.html`, troque `assets/images/og.jpg` pelo endereço completo (com https://) depois que o site estiver no ar.

## Para completar quando tiver a informação

- Endereço do culto (para criar o botão "Como chegar").
- Roteiro real de um sábado (para trocar a lista da seção "O que rola" por uma linha do tempo).
- Local do GC de sábado, se um dia for fixo.
