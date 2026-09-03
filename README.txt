EliteFlow — Página de Vendas Mobile FIX V3

FOCO DESTA VERSÃO
Correção específica para navegadores internos/WebViews (Linktree, Instagram e Facebook), além de navegadores mobile normais.

CORREÇÕES
- A viewport mobile não é mais a área de rolagem.
- A página fica presa à tela e .page-shell faz somente rolagem vertical.
- Body/html não podem ser arrastados horizontalmente.
- Remove overscroll horizontal que revelava área preta/vazia.
- Elementos decorativos que extrapolam a tela continuam desativados no mobile.
- Faixa de benefícios deixa de usar rolagem horizontal no celular.
- Navegação por âncoras foi adaptada ao novo contêiner de rolagem.
- CSS e JS receberam nomes novos para evitar cache antigo de WebViews.
- _headers força o index.html a não ficar preso em cache no Netlify.

ARQUIVOS VERSIONADOS
- css/styles-mobile-v3.css?v=3
- js/main-mobile-v3.js?v=3

IMPORTANTE APÓS O DEPLOY
Se o Linktree ainda abrir uma cópia antiga, altere o URL cadastrado nele adicionando ao final:
?v=3
Exemplo:
https://SEU-SITE.netlify.app/?v=3
Isso cria uma URL nova para o navegador interno e evita reaproveitar a página antiga em cache.

LINK DE CADASTRO
O CTA continua apontando para:
https://barberflow-saas.onrender.com/cadastro.html


V4: CTA móvel de 7 dias movido para fora do contêiner rolável para permanecer fixo no rodapé em Linktree/Instagram WebView.
