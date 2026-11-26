# 🚀 GenildoBurgos.tech — Portfólio & Hub Open Source

[![Next.js](https://img.shields.io/badge/Next.js-16+-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub API](https://img.shields.io/badge/GitHub_API-Live-181717?style=for-the-badge&logo=github&logoColor=white)](https://docs.github.com/rest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Este é o repositório oficial do site pessoal e portfólio profissional conectado ao domínio [**genildoburgos.tech**](https://genildoburgos.tech).

O projeto foi projetado com uma arquitetura **developer-first**, enxuta, altamente escalável e totalmente aberta ao ecossistema de código aberto (Open Source). Ele consome a API do GitHub em tempo real para exibir métricas consolidadas (estrelas, forks, repositórios públicos) e alimenta uma galeria de repositórios vivos com busca instantânea e filtros por linguagem.

---

## ⚡ Principais Características

- **🌐 Single-Page Application (SPA) Enxuta**: Navegação fluida por seções sem recarregamentos desnecessários.
- **📡 Integração Viva com a API do GitHub**:
  - Contadores no **Header** e no **Footer** com o número de estrelas acumuladas e repositórios.
  - Grade de **Cards Vivos** com nome, descrição, tópicos/tags, linguagem principal e link direto para o repositório no GitHub.
  - Mecanismo de busca instantânea e filtragem dinâmica por linguagem direto no client.
- **🔄 Performance Máxima com ISR (Incremental Static Regeneration)**:
  - Cache inteligente de 1 hora (`revalidate = 3600`) para garantir tempos de resposta abaixo de 50ms e evitar limites de taxa (*rate limits*) da API pública.
  - Fallback gracioso automático garantindo 100% de disponibilidade mesmo em instabilidades de rede.
- **🎨 Design Tech Tradicional & Profissional**:
  - Cabeçalho (*Header*) clássico com status luminoso de disponibilidade e links de navegação.
  - Rodapé (*Footer*) técnico com 4 colunas estruturadas, métricas de ecossistema, status de API e copyright dinâmico.
  - Suporte nativo a Dark Mode / Light Mode respeitando a preferência do sistema.
- **📁 Padrão de Engenharia Limpo**:
  - **100% em Inglês no código-fonte** (componentes, tipagens, funções e utilitários).
  - **100% em Português na interface e documentação** (copy, labels, SEO e README).

---

## 📂 Estrutura do Projeto

```text
genildoburgos-tech/
├── public/                 # Arquivos estáticos, favicons e imagens locais
│   └── assets/             # Diretório dedicado para mídias e banners
├── src/
│   ├── app/
│   │   ├── globals.css     # Estilos globais e tokens Tailwind CSS v4
│   │   ├── layout.tsx      # Layout raiz com metadata e OpenGraph configurados
│   │   └── page.tsx        # Página principal (Server Component com ISR)
│   ├── components/
│   │   ├── Header.tsx      # Barra de navegação com métricas e badge vivo
│   │   ├── Hero.tsx        # Apresentação, avatar oficial do GitHub e métricas rápidas
│   │   ├── RepositorySection.tsx # Galeria viva com pesquisa e filtros
│   │   ├── RepositoryCard.tsx    # Card de repositório individual com métricas
│   │   ├── TechStack.tsx   # Grade organizada de competências e stacks
│   │   ├── AboutSection.tsx# Trajetória, princípios de engenharia e foco em IA
│   │   ├── ContactSection.tsx    # Canais de contato direto e redes
│   │   ├── Footer.tsx      # Rodapé tradicional com 4 colunas e dados do GitHub
│   │   └── icons.tsx       # Ícones SVG leves e fiéis (GitHub, LinkedIn)
│   ├── lib/
│   │   └── github.ts       # Funções de busca, cache ISR e fallbacks da API do GitHub
│   └── types/
│       └── github.ts       # Tipagens TypeScript estritas da API do GitHub
├── .env.example            # Exemplo de variáveis de ambiente
├── next.config.ts          # Configurações do Next.js e domínios de imagem
├── package.json            # Dependências e scripts de execução
├── tsconfig.json           # Configurações do TypeScript
└── README.md               # Documentação completa em português
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18.18+ ou 20+)
- `npm`, `pnpm` ou `yarn`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/genildoburgos/genildoburgos-tech.git
   cd genildoburgos-tech
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **(Opcional) Configure as variáveis de ambiente:**
   Copie o arquivo de exemplo caso deseje apontar para outro usuário ou usar um token autenticado:
   ```bash
   cp .env.example .env.local
   ```
   *Nota: O projeto já funciona perfeitamente sem nenhuma variável configurada, consultando a API pública do usuário `@genildoburgos`.*

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

5. **Para testar a compilação de produção:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Conectando com o Domínio `genildoburgos.tech`

Para publicar este projeto e conectar ao seu domínio próprio na [Vercel](https://vercel.com):

1. **Crie um repositório no seu GitHub** e suba este código:
   ```bash
   git add .
   git commit -m "feat: initial commit of genildoburgos.tech open source portfolio"
   git remote add origin https://github.com/genildoburgos/genildoburgos-tech.git
   git push -u origin main
   ```
2. **Importe o projeto na Vercel**:
   - Acesse seu painel na Vercel e clique em **Add New... -> Project**.
   - Selecione o repositório `genildoburgos-tech` e clique em **Deploy**.
3. **Configure o Domínio**:
   - No painel do projeto na Vercel, vá em **Settings -> Domains**.
   - Adicione `genildoburgos.tech` e `www.genildoburgos.tech`.
   - No seu registrador de domínio (onde comprou o `.tech`), adicione os registros DNS indicados pela Vercel:
     - **Tipo A**: `@` apontando para `76.76.21.21`
     - **CNAME**: `www` apontando para `cname.vercel-dns.com`
   - O certificado SSL gratuito é gerado automaticamente em poucos minutos.

---

## 🤝 Como Contribuir

Contribuições, sugestões e melhorias são sempre bem-vindas!

1. Faça um **Fork** deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas alterações (`git commit -m 'feat: adiciona nova funcionalidade'`).
4. Envie para o branch principal (`git push origin feature/minha-feature`).
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto é distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

Desenvolvido por **[Genildo Burgos](https://github.com/genildoburgos)**.
