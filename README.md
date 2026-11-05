# PerfLink — Links em um só lugar

O **PerfLink** é uma aplicação web inspirada em plataformas de *link na bio*, como o [Bio Link](https://bio.link/).

A proposta é simples: reunir diferentes links, redes sociais, portfólios e canais de contato em uma única página personalizada, facilitando o compartilhamento da presença digital de pessoas, marcas e projetos.

O projeto nasceu de uma necessidade pessoal: criar páginas de apresentação para reunir os links da Natália, do projeto NG Conteúdo e do BliTeca.

Sites:
BliTeca: https://perf-link-blue.vercel.app/bliteca

NG Conteúdo: https://perf-link-blue.vercel.app/ng

Natália Gusmão: https://perf-link-blue.vercel.app/nat

## ✨ Funcionalidades

- Páginas individuais para diferentes perfis e projetos.
- Exibição de foto ou avatar.
- Nome e descrição personalizados.
- Lista de links externos.
- Botões de acesso às redes sociais e canais de contato.
- Links para portfólios, sites e aplicativos.
- Layout responsivo, adequado para acesso por dispositivos móveis.
- Navegação entre páginas por rotas.
- Identidade visual personalizada para cada perfil.
- Configuração de publicação como aplicação web estática.

## 👥 Páginas disponíveis

Atualmente, o projeto possui três páginas:

### `/nat` — Perfil pessoal

<text>**Natália Gusmão**</text>

Página pessoal com acesso às redes sociais e canais de contato.

- Instagram
- TikTok
- YouTube
- NG Conteúdo
- E-mail

### `/ng` — NG Conteúdo

Página de apresentação profissional do projeto de criação de conteúdo.

- Instagram
- Portfólios
- WhatsApp para contato
- E-mail
- Perfil pessoal da criadora

### `/bliteca` — BliTeca

Página institucional do BliTeca, reunindo os principais canais do projeto.

- Instagram
- LinkedIn
- Download do aplicativo Android
- Site oficial
- E-mail
- Política de privacidade

## 🧰 Tecnologias

| Tecnologia | Utilização |
|---|---|
| Angular 21 | Framework frontend |
| TypeScript 5.9 | Linguagem principal |
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e identidade visual |
| RxJS 7.8 | Biblioteca reativa utilizada pelo Angular |
| Angular Router | Navegação entre perfis |
| Vitest | Infraestrutura de testes |
| Vercel | Configuração de publicação |

O projeto utiliza componentes standalone do Angular, sem necessidade de módulos tradicionais (`NgModule`).

## 🏗️ Estrutura do projeto

```text
perf-link/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── perf-link-nat/
│   │   │   │   ├── perf-link-nat.component.ts
│   │   │   │   ├── perf-link-nat.component.html
│   │   │   │   └── perf-link-nat.component.css
│   │   │   │
│   │   │   ├── perf-link-ng/
│   │   │   │   ├── perf-link-ng.component.ts
│   │   │   │   ├── perf-link-ng.component.html
│   │   │   │   └── perf-link-ng.component.css
│   │   │   │
│   │   │   └── perf-link-bliteca/
│   │   │       ├── perf-link-bliteca.component.ts
│   │   │       ├── perf-link-bliteca.component.html
│   │   │       └── perf-link-bliteca.component.css
│   │   │
│   │   ├── models/
│   │   │   └── perf-link.model.ts
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── vercel.json
```

## 🧩 Organização e funcionamento

A aplicação utiliza o Angular Router para direcionar cada endereço ao componente correspondente.

As rotas estão definidas em `src/app/app.routes.ts`:

| Rota | Componente |
|---|---|
| `/nat` | `PerfLinkNatComponent` |
| `/ng` | `PerfLinkNgComponent` |
| `/bliteca` | `PerfLinkBlitecaComponent` |
| `/` | Redireciona para `/nat` |
| Qualquer rota desconhecida | Redireciona para `/nat` |

Cada componente mantém suas próprias informações de perfil e lista de links.

O modelo compartilhado em `perf-link.model.ts` define as estruturas básicas:

- `Profile`: nome, biografia e avatar.
- `Link`: nome, URL e ícone.
- `PerfLinkData`: conjunto de informações do perfil e seus links.

Essa organização permite manter páginas independentes, com identidades visuais e conteúdos próprios.

## 🚀 Executando localmente

### Pré-requisitos

- Node.js.
- npm.
- Git.

### 1. Clonar o repositório

```bash
git clone https://github.com/gbritoalves88/perf-link.git
```

Acesse a pasta:

```bash
cd perf-link
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:4200
```

Acesse diretamente os perfis:

```text
http://localhost:4200/nat
http://localhost:4200/ng
http://localhost:4200/bliteca
```

## 🏗️ Build de produção

Para gerar os arquivos otimizados:

```bash
npm run build
```

O Angular CLI gera os arquivos de distribuição no diretório `dist/`.

O projeto utiliza a configuração de produção por padrão, incluindo otimizações e controle de tamanho dos arquivos gerados.

## 🧪 Testes

Para executar os testes unitários:

```bash
npm test
```

O projeto utiliza Vitest como executor de testes configurado pelo Angular CLI.

## ☁️ Publicação

O repositório possui um arquivo `vercel.json` com regras para servir os arquivos estáticos e direcionar as rotas da aplicação para `index.html`.

Essa configuração permite que páginas como `/nat`, `/ng` e `/bliteca` sejam acessadas diretamente pelo navegador, sem depender de uma navegação iniciada pela página principal.

Para publicar uma nova versão:

1. Gere o build de produção.
2. Publique os arquivos gerados em um serviço de hospedagem estática.
3. Configure o fallback de rotas para `index.html`.
4. Verifique o acesso direto às páginas individuais.

## 💡 Possibilidades de evolução

Algumas ideias que podem ampliar o projeto futuramente:

- Cadastro e gerenciamento de perfis.
- Criação de páginas sem precisar desenvolver um novo componente.
- Personalização de cores, fontes e temas.
- Inclusão de links em destaque.
- QR Code individual para cada página.
- Estatísticas de acesso e cliques.
- Painel administrativo para gerenciar links.
- Integração com banco de dados para armazenar perfis dinamicamente.

Essas são possibilidades futuras, não funcionalidades implementadas atualmente.

---

## 🎯 Objetivo do projeto

O PerfLink surgiu de uma necessidade real: centralizar os links de pessoas e projetos em páginas simples, bonitas e fáceis de compartilhar.

Além de atender aos perfis pessoais e profissionais, também funciona como uma página de divulgação do BliTeca.

Um projeto pequeno, prático e desenvolvido para resolver um problema do dia a dia.

---

Desenvolvido por [Gabriel Brito](https://github.com/gbritoalves88).
