# 🤟 Sinaliza — Plataforma Gamificada para Ensino de Libras

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database%20%26%20Auth-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Acessibilidade](https://img.shields.io/badge/WCAG%202.1-N%C3%ADvel%20AA-success?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

> **"Conectando Mundos pelas Mãos"**  
> Aplicação web educacional inspirada na microaprendizagem gamificada do Duolingo, projetada especificamente para o ensino da Língua Brasileira de Sinais (Libras), com identidade própria, acessibilidade nativa e respeito irrestrito aos parâmetros linguísticos da língua.

---

## 🎯 Sobre o Projeto

A Libras é uma língua viva, natural e de modalidade espaço-visual, oficializada pela **Lei Federal nº 10.436/2002** e regulamentada pelo **Decreto nº 5.626/2005**. Ela **não é** mero "Português Sinalizado" ou mímica: possui léxico, morfologia e sintaxe autônomas baseadas no espaço tridimensional.

O **Sinaliza** foi arquitetado sob os **Cinco Parâmetros Fonológicos Quíntuplos da Libras**:
1. **Configuração de Mão (CM):** Forma adotada pelos dedos e mão.
2. **Ponto de Articulação (PA):** Local no corpo ou espaço neutro onde o sinal se realiza.
3. **Movimento (M):** Direção, trajetória e dinâmica.
4. **Orientação da Palma (O):** Direcionamento espacial da palma da mão.
5. **Expressões Não-Manuais (ENM):** Movimentos faciais e corporais distintivos obrigatórios.

---

## 🚀 Tecnologias Utilizadas

- **Framework Web:** [Next.js](https://nextjs.org/) (App Router, React Server Components e Server Actions)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita e segura)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (Design System customizado com botões táteis 3D)
- **Componentes Base:** [shadcn/ui](https://ui.shadcn.com/)
- **Backend & Autenticação:** [Supabase](https://supabase.com/) (`@supabase/ssr` com cookies seguros `HttpOnly` e Row Level Security - RLS)
- **Validações:** [Zod](https://zod.dev/) e [React Hook Form](https://react-hook-form.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)

---

## 🗺️ Estrutura de Rotas e Páginas

| Rota | Descrição |
|---|---|
| `/` | **Landing Page:** Apresentação do produto, valores de inclusão e chamada para ação |
| `/learn` | **Trilha de Aprendizagem:** Visual em zigue-zague com cartões de unidade e nós de lição com estados dinâmicos |
| `/lesson/[id]` | **Player Interativo:** Exibição do sinal em vídeo, atalhos de teclado (1-4 e Enter), feedback visual imediato e tela de vitória |
| `/dashboard` | **Painel Principal:** Resumo de ofensiva, XP, vidas, metas diárias e progresso geral |
| `/progress` | **Acompanhamento:** Histórico semanal da ofensiva, taxa de acerto e vocabulário dominado |
| `/achievements` | **Conquistas:** Galeria de medalhas e insígnias desbloqueáveis por mérito |
| `/profile` | **Perfil:** Nível do estudante, avatar e configurações de acessibilidade |
| `/login` e `/register` | **Autenticação:** Telas de acesso e cadastro com segurança |

---

## 🎮 Mecânicas de Gamificação e Inclusão

- **Vidas / Corações:** Sistema de 5 vidas com regeneração temporal (4h) e possibilidade de recarga por treino prático.
- **Ofensiva Diária (*Streak*):** Fogo aceso computado com base em dias consecutivos de dedicação.
- **Pontos de Experiência (XP):** Recompensas dinâmicas proporcionais à complexidade da lição.
- **100% Livre de Dependência de Áudio:** Todo feedback possui correspondentes visuais inequívocos (cores, ícones, banners textuais e vibração háptica em dispositivos móveis).
- **Mascote Tico:** O macaco-prego guia da plataforma, incentivando os estudos e comemorando vitórias.

---

## 📁 Estrutura do Código-Fonte

```
projeto-aprender-libras/
├── docs/                              # Documentos de engenharia e planejamento
│   ├── PLANEJAMENTO_SISTEMA_LIBRAS.md # Requisitos funcionais, não funcionais e casos de uso
│   ├── ARQUITETURA_TECNICA_LIBRAS.md  # DER, diagramas de arquitetura e segurança RLS
│   └── DESIGN_SYSTEM_E_UI_UX.md       # Identidade visual, tokens de cor e padrões táteis
├── src/
│   ├── app/                           # Rotas do Next.js App Router
│   ├── components/                    # Componentes UI (botões 3D, avatar, progress, etc.)
│   ├── features/                      # Módulos funcionais (curriculum, lesson-player, etc.)
│   ├── services/                      # Clientes Supabase e camada mock pedagógica
│   ├── types/                         # Interfaces TypeScript (database, curriculum, etc.)
│   └── lib/                           # Utilitários globais (cn)
├── tailwind.config.ts                 # Configuração do Design System
├── tsconfig.json                      # Configuração estrita do TypeScript
└── package.json
```

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18+ ou 20+ LTS recomendada)
- Gerenciador de pacotes `npm` ou `pnpm`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Rodrigueixon/projeto-aprender-libras.git
   cd projeto-aprender-libras
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Copie o arquivo de exemplo e preencha suas chaves caso utilize o Supabase:
   ```bash
   cp .env.example .env.local
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Abra no navegador:**
   Acesse [http://localhost:3000](http://localhost:3000) para explorar a aplicação.

---

## 📄 Licença e Finalidade Acadêmica

Projeto desenvolvido para fins educacionais e acadêmicos no curso de Ciência da Computação, focado em Tecnologias Assistivas, Interação Humano-Computador (IHC) e Gamificação.
