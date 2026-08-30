# BarberFlow — Página de Vendas

Landing page estática em HTML/CSS/JS, pronta para GitHub + Netlify.

## Antes de publicar

Edite `js/main.js` e substitua `WHATSAPP_NUMBER` pelo número comercial do BarberFlow com DDI + DDD, somente números.

Exemplo:

```js
const WHATSAPP_NUMBER = '5586999999999';
```

## GitHub

Crie um repositório vazio, por exemplo `barberflow-vendas`, e rode na pasta do projeto:

```bash
git init
git add .
git commit -m "Publica pagina de vendas BarberFlow"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## Netlify

1. Add new project
2. Import an existing project
3. GitHub
4. Selecione `barberflow-vendas`
5. Build command: deixe vazio
6. Publish directory: `.`
7. Publish

O `netlify.toml` já contém a configuração de publicação e headers básicos de segurança.
