---
name: Instituto Brasil Te Ama
colors:
  # ─── SURFACES (warm cream page + pure white cards) ───────────────────────
  background:                '#F6F2E8'   # warm cream — page background
  on-background:             '#282B2B'
  surface:                   '#F6F2E8'   # warm cream — default surface
  surface-dim:               '#DDD9CE'
  surface-bright:            '#FFFFFF'   # pure white — elevated surfaces
  surface-container-lowest:  '#FFFFFF'   # pure white — floating cards, buttons
  surface-container-low:     '#FDFCF8'   # near-white — subtle elevation
  surface-container:         '#F6F2E8'   # cream — mid containers
  surface-container-high:    '#F0EAD6'   # light sand — higher containers
  surface-container-highest: '#EAD9B4'   # sand beige — highest containers
  on-surface:                '#282B2B'   # Carvão Suave — matches reference exactly
  on-surface-variant:        '#4A4435'
  inverse-surface:           '#312E22'
  inverse-on-surface:        '#F5EFE0'
  outline:                   '#7A7260'
  outline-variant:           '#C9C2A8'
  surface-tint:              '#0E6B3B'
  surface-variant:           '#F0EAD6'   # warm — not cold gray

  # ─── PRIMARY — Floresta Verde #0E6B3B ─────────────────────────────────────
  # Tonal palette (tone 10→99): dark→light
  primary:                   '#0E6B3B'   # tone 35 — main action color
  on-primary:                '#FFFFFF'
  primary-container:         '#B8F0CE'   # tone 85 — light green tint for containers
  on-primary-container:      '#002113'   # tone 10 — dark text on light container
  inverse-primary:           '#6FD49A'   # tone 65 — on dark surfaces
  primary-fixed:             '#B8F0CE'   # same as container (light theme)
  primary-fixed-dim:         '#6FD49A'   # dimmed version
  on-primary-fixed:          '#002113'
  on-primary-fixed-variant:  '#084F2A'

  # ─── SECONDARY — Amor Vermelho #C62B2B ────────────────────────────────────
  secondary:                 '#C62B2B'   # tone 40 — CTAs, emotional accents
  on-secondary:              '#FFFFFF'
  secondary-container:       '#FFDAD6'   # tone 90 — very light blush for containers
  on-secondary-container:    '#410003'   # tone 10 — dark text on light container
  inverse-secondary:         '#FFB3AC'
  secondary-fixed:           '#FFDAD6'
  secondary-fixed-dim:       '#FFB3AC'
  on-secondary-fixed:        '#410003'
  on-secondary-fixed-variant:'#8C1616'

  # ─── TERTIARY — Ouro Suave #E1B83D ────────────────────────────────────────
  tertiary:                  '#E1B83D'   # Ouro Suave — exact brand gold, FAB & icon buttons
  on-tertiary:               '#1A1200'   # dark text on gold (not white — better contrast)
  tertiary-container:        '#FDEEA0'   # tone 90 — soft gold tint
  on-tertiary-container:     '#261A00'   # tone 10 — dark text on gold container
  tertiary-fixed:            '#FDEEA0'
  tertiary-fixed-dim:        '#ECC246'
  on-tertiary-fixed:         '#261A00'
  on-tertiary-fixed-variant: '#5C4700'

  # ─── ERROR ────────────────────────────────────────────────────────────────
  error:                     '#BA1A1A'
  on-error:                  '#FFFFFF'
  error-container:           '#FFDAD6'
  on-error-container:        '#93000A'

  # ─── BRAND TOKENS (extended — used in CSS vars and Stitch component overrides) ─
  forest-green:              '#0E6B3B'
  red-love:                  '#C62B2B'
  soft-gold:                 '#E1B83D'
  earth-terracotta:          '#C76B46'
  serene-blue:               '#4C6FA3'
  light-cream:               '#F6F2E8'
  sand-beige:                '#EAD9B4'
  textured-cream:            '#F0EAD6'
  soft-charcoal:             '#282B2B'
  deep-green-surface:        '#003821'   # dark section backgrounds
  red-hover:                 '#A82020'   # button hover state

typography:
  h1:
    fontFamily: notoSerif
    fontSize: clamp(2.5rem, 5vw, 4rem)
    fontWeight: '700'
    lineHeight: '1.1'
  h2:
    fontFamily: notoSerif
    fontSize: clamp(1.8rem, 3.5vw, 2.8rem)
    fontWeight: '700'
    lineHeight: '1.2'
  h3:
    fontFamily: notoSerif
    fontSize: clamp(1.2rem, 2vw, 1.6rem)
    fontWeight: '600'
    lineHeight: '1.3'
  body:
    fontFamily: inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.7'
  label-caps:
    fontFamily: inter
    fontSize: 0.75rem
    fontWeight: '500'
    letterSpacing: 0.12em
  caption:
    fontFamily: inter
    fontSize: 0.85rem
    fontWeight: '400'
    lineHeight: '1.4'

rounded:
  sm:      0.375rem
  DEFAULT: 0.75rem    # 12px — cards, inputs (NOT buttons)
  button:  9999px     # pill — buttons only
  md:      1rem        # 16px — cards, inputs
  lg:      1.5rem
  xl:      2rem
  full:    9999px

spacing:
  base:        4px
  xs:          8px
  sm:          16px
  md:          24px
  lg:          48px
  xl:          80px
  section-gap: clamp(4rem, 10vw, 8rem)
---

# Design System — Instituto Brasil Te Ama
**Versão 1.4 — Maio 2026**
*Olmeda Studio × Instituto Brasil Te Ama*

---

## Changelog v1.0 → v1.2

| Token | v1.0 (errado) | v1.1 (corrigido) | Motivo |
|---|---|---|---|
| `background` / `surface` | `#f8faf9` (verde-acinzentado) | `#F6F2E8` (creme quente) | Fundo da marca é creme, não cinza |
| `primary` | `#00512a` (muito escuro) | `#0E6B3B` (verde exato da marca) | Tom correto do brand |
| `primary-container` | `#0e6b3b` (igual ao primary!) | `#B8F0CE` (verde claro tonal) | Container deve ser o tom claro |
| `on-primary-container` | `#94e9ac` (verde claro — ilegível) | `#002113` (verde quase preto) | Texto precisa contrastar com container |
| `secondary` | `#b81f22` (próximo, mas escuro) | `#C62B2B` (vermelho exato da marca) | Tom correto do brand |
| `secondary-container` | `#ff544e` (laranja vivo — errado) | `#FFDAD6` (blush claro tonal) | Container deve ser tom pastel do hue |
| `on-secondary-container` | `#5c0006` | `#410003` | Alinhado ao tonal correto |
| `tertiary` | `#755b00` | `#7A6000` | Ouro escuro para texto/ícones |
| `tertiary-container` | `#cea72c` (saturado) | `#FDEEA0` (amarelo pastel suave) | Container deve ser claro |
| `surface-container` | `#edeeee` (cinza frio) | `#EAD9B4` (bege areia) | Superfícies da marca são quentes |
| `surface-container-lowest` | `#ffffff` (OK, mas chain errada) | `#FFFFFF` cards + `surface-bright: #FFFFFF` | Cartas flutuantes precisam de branco puro como base |
| `surface-container-low` | `#f2f4f3` (cinza frio) | `#FDFCF8` (quase branco quente) | Elevação leve mantém warmth |
| `surface-container` | correto mas chain errada | `#F6F2E8` → cream | Background da página, não dos cards |
| `rounded DEFAULT` | `0.25rem` (4px — invisível) | `0.75rem` (12px) | Cards com cantos arredondados visíveis |
| `rounded lg/xl` | `0.5 / 0.75rem` (muito pequeno) | `1.5rem / 2rem` | Generoso como no layout de referência |

---

## 1. Identidade da Marca

### Missão
Conectar empresas, ONGs e pessoas em ações humanitárias reais — com transparência, credencial internacional e impacto documentado.

### Taglines
> *"Juntos, fazemos o cuidado chegar mais longe."* — Principal
> *"O Brasil que a gente ama, precisa da gente."* — Rodapé

### Tom de Voz
- Coletivo e acolhedor: "a gente", "juntos", "faça parte"
- Direto e confiável — nunca corporativo ou distante
- Sequência emocional: **Sente → Entende → Age**
- Sem promessas vazias — tudo documentado e verificável

---

## 2. Paleta de Cores

### Cores Principais

| Nome | Hex | Papel MD3 |
|---|---|---|
| Floresta Verde | `#0E6B3B` | `primary` |
| Amor Vermelho | `#C62B2B` | `secondary` |
| Ouro Suave | `#E1B83D` | `tertiary-fixed-dim` / detalhes |
| Terracota Terra | `#C76B46` | `earth-terracotta` (custom) |
| Azul Sereno | `#4C6FA3` | `serene-blue` (custom) |

### Cores Neutras

| Nome | Hex | Papel MD3 |
|---|---|---|
| Creme Claro | `#F6F2E8` | `background` / `surface` |
| Bege Areia | `#EAD9B4` | `surface-container` |
| Carvão Suave | `#282B2B` | `on-surface` (aproximado) |

### Regra de Proporção
- **60%** neutros (creme, bege, branco)
- **30%** cores principais (verde, vermelho)
- **10%** ouro (detalhes, ícones, ornamentos)

### Variáveis CSS (para implementação)

```css
:root {
  /* Cores da marca */
  --color-green:       #0E6B3B;
  --color-red:         #C62B2B;
  --color-gold:        #E1B83D;
  --color-terracota:   #C76B46;
  --color-blue:        #4C6FA3;

  /* Neutras */
  --color-cream:       #F6F2E8;
  --color-sand:        #EAD9B4;
  --color-charcoal:    #282B2B;

  /* Superfícies */
  --surface-white:        #FFFFFF;
  --surface-cream-tex:    #F0EAD6;
  --surface-sand:         #EAD9B4;
  --surface-green-deep:   #003821;
  --surface-terracota:    #C76B46;

  /* Estados */
  --color-red-hover:   #A82020;
  --color-green-dark:  #084F2A;

  /* Sombras */
  --shadow-soft:   0 2px 8px rgba(0,0,0,0.06);
  --shadow-medium: 0 4px 16px rgba(0,0,0,0.12);
  --shadow-strong: 0 8px 24px rgba(0,0,0,0.18);
}
```

---

## 3. Tipografia

### Fonte de Títulos — Noto Serif (Google Stitch) / Esperança (brand)
- **Uso:** H1, H2, H3, chamadas de destaque
- **Peso:** 600 e 700
- **Nota:** "Esperança" é a fonte custom do brand. Em Stitch usar `notoSerif` como equivalente serifado.

### Fonte de Corpo — Inter
- **Uso:** Parágrafos, labels, navegação, botões, rodapé
- **Peso:** 400 (regular) e 500 (medium)

### Escala Tipográfica

```css
h1 { font-size: clamp(2.5rem, 5vw, 4rem);   font-weight: 700; line-height: 1.1; }
h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; line-height: 1.2; }
h3 { font-size: clamp(1.2rem, 2vw, 1.6rem);  font-weight: 600; line-height: 1.3; }

body        { font-size: 1rem;    line-height: 1.7; }
.label-caps { font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; }
.caption    { font-size: 0.85rem; line-height: 1.4; }
```

---

## 4. Componentes de UI

### Botões

#### Primário — "Aplique o Selo →"
- Fundo: `#C62B2B` (vermelho — `secondary`)
- Texto: `#FFFFFF`
- Hover fundo: `#A82020`
- Border-radius: `4px`
- Padding: `14px 28px`
- Font: Inter 600, 0.95rem

#### Secundário — "Conheça o Instituto →"
- Fundo: transparente
- Borda: `2px solid #C62B2B`
- Texto: `#C62B2B`
- Hover: inverter (fundo vermelho, texto branco)

#### Terciário — Link com seta
- Texto: `#282B2B`
- Hover: `#0E6B3B`
- Sem borda ou fundo

#### Botões Ícone Circular
| Variante | Fundo | Ícone |
|---|---|---|
| Verde (Comunidade) | `#0E6B3B` | branco |
| Vermelho (Impacto) | `#C62B2B` | branco |
| Ouro (Selos) | `#E1B83D` | branco |
| Outline Verde | transparente, borda `#0E6B3B` | `#0E6B3B` |

---

## 5. Ícones

### Ícones Principais (preenchidos — uso simbólico)
| Ícone | Significado |
|---|---|
| Cruz dourada | Fé e Propósito |
| Estrela de 8 pontas | Impacto Real |
| Flor de 6 pétalas (azul) | Respaldo Internacional |
| Ramo de folhas (verde) | Cuidado e Esperança |
| Grupo de pessoas | Comunidade e União |

### Ícones Secundários (outline — uso funcional)
Handshake · Escudo · Documento · Coração · Folha · Pessoas · Colunas · Globo

**Regra:** Cards de identificação de público e CTAs secundários → sempre outline. Nunca preenchidos nesses contextos.

---

## 6. Elementos Gráficos

### Formas Orgânicas
- Ramos e folhas verdes — decoração de bordas de seções
- Estrelas de 8 pontas douradas (`#E1B83D`) — separadores, ornamentos

### Padrões (Azulejos)
- Inspiração: azulejos portugueses + arte popular brasileira
- Paleta: vermelho, verde, azul, dourado sobre bege
- Aplicação: fundos de cards, detalhes decorativos

### Composição Hero
- Colagem de fotos em formato de coração
- Combina paisagens naturais + retratos de pessoas atendidas
- Badge do Selo sobreposto no canto inferior direito

---

## 7. Superfícies e Sombras

### Superfícies
| Nome | Hex | Uso |
|---|---|---|
| Branco Limpo | `#FFFFFF` | Cards, modais |
| Creme Texturizado | `#F0EAD6` | Seções de separação |
| Bege Areia | `#EAD9B4` | Fundo secundário de seções |
| Verde Profundo | `#003821` | Seções escuras de destaque |
| Terracota Natural | `#C76B46` | Seções quentes / variação CTA |

### Sombras
```css
--shadow-soft:   0 2px 8px  rgba(0,0,0,0.06);  /* cards repouso */
--shadow-medium: 0 4px 16px rgba(0,0,0,0.12);  /* destaque */
--shadow-strong: 0 8px 24px rgba(0,0,0,0.18);  /* hover */
```

---

## 8. Estrutura da Homepage

```
NAVEGAÇÃO (sticky)
  ├── Logo + Menu: Home · Sobre · Liderança · Selo · Projetos · Notícias · Transparência · Contato
  └── CTA fixo: [Aplique o Selo →]  ← botão vermelho sólido

SEÇÃO 1 — HERO (#hero)
  ├── Fundo: foto de ação humanitária em campo (NÃO evento institucional)
  ├── H1: "Juntos, fazemos o cuidado chegar mais longe."
  ├── Subtítulo: max 2 linhas
  ├── [Aplique o Selo no meu negócio →]  ← botão primário
  └── [Como funciona ↓]  ← link simples, âncora #como-funciona

SEÇÃO 2 — IDENTIFICAÇÃO DE PÚBLICO (#para-voce)
  ├── Label: "Com quem você quer fazer parte desta rede?"
  ├── Card A: "Tenho uma empresa" → [Quero o Selo →] → /empresas
  ├── Card B: "Tenho uma ONG" → [Cadastrar minha ONG →] → /ongs
  └── Card C: "Sou consumidor e vi o Selo..." → [Entender o Selo →] → /sobre

SEÇÃO 3 — O QUE É O BRASIL TE AMA (#como-funciona)
  ├── H2: "Um sistema de participação e impacto — não uma campanha."
  ├── Destaque: "Campanhas acabam. Sistemas continuam."
  ├── Infográfico 4 etapas: Empresa aplica → Instituto organiza → ONGs recebem → Impacto documentado
  └── Rodapé de credencial: CNPJ · Fundado 2022 · Brasil e Nigéria · 10 frentes ativas

SEÇÃO 4 — POR QUE AGORA (#por-que-agora)
  ├── H2: "Seu cliente já está pronto. Sua empresa está?"
  ├── Dado 1: 83% — preferência por empresas alinhadas com valores (Accenture)
  ├── Dado 2: 76% — preferência por marcas que apoiam causas (PwC Brasil)
  ├── Dado 3: 85% — se sentem melhor comprando de marcas com impacto (Unilever)
  └── [Entenda como aplicar o Selo →] → /empresas

SEÇÃO 5 — PROVA SOCIAL (#o-que-fazemos)
  ├── H2: "O que a gente faz, aparece."
  ├── Card 1: Quarta do Cidadão · Brasília DF · Defensoria Pública
  ├── Card 2: Atleta Edilson · 75 anos · Esporte e Superação
  ├── Card 3: Lançamento Abril 2025 · Líderes e Diplomatas
  └── Barra imprensa: Metrópoles · Agência Brasília · Defensoria DF · Lo Scudo (25 artigos)

SEÇÃO 6 — SELO NA PRÁTICA (#selo-na-pratica)
  ├── H2: "Como o Selo aparece no dia a dia da sua empresa"
  ├── Grid 2×2: Na embalagem · No ponto de venda · Nas redes sociais · No balcão
  └── [Quero aplicar o Selo no meu negócio →] → /empresas

SEÇÃO 7 — CREDIBILIDADE (#credibilidade)
  ├── H2: "Uma rede com estrutura de verdade."
  ├── Bloco 1: OSJ Knights of Malta — +100 países
  ├── Bloco 2: S.E. Dr. Franco Nicoletti + Shirin Vafaein
  └── Bloco 3: Defensoria DF · Metrópoles · Lo Scudo · CNPJ · 10 frentes

SEÇÃO 8 — CTA FINAL (#faca-parte)
  ├── H2: "Pronto para fazer parte?"
  ├── Subtítulo: "Sem complicação. Nosso time responde em até 48h."
  ├── Bloco A: Para empresas → [Solicitar parceria →] (botão primário)
  ├── Bloco B: Para ONGs → [Cadastrar minha ONG →] (botão outline)
  └── Rodapé: "Sem taxa de inscrição. Sem burocracia."

SEÇÃO NOVA — OUTROS CAMINHOS (#outros-caminhos)
  ├── Imprensa → /contato?tipo=imprensa
  ├── Voluntários e colaboradores → /contato?tipo=voluntario
  └── Pessoas que buscam apoio → /projetos

SEÇÃO 9 — FAQ (#perguntas-frequentes)
  ├── H2: "Perguntas frequentes"
  ├── 8 perguntas em acordeão (<details>/<summary> — primeiro item open por padrão)
  └── "Ainda tem dúvida? → Fale com o Instituto" → /contato

RODAPÉ (#rodape)
  ├── Logo + Descrição + CNPJ 49.458.362/0001-10
  ├── Ícones sociais: YouTube · Facebook · LinkedIn · Instagram (TODOS com links ativos)
  ├── Col 1: Institucional | Col 2: Para Empresas | Col 3: Para ONGs
  └── Copyright © 2026 · Powered by OlmedaTech · Idiomas: PT | EN | ES | IT
```

---

## 9. Hierarquia H-tags (SEO)

```
H1 → Juntos, fazemos o cuidado chegar mais longe.
  H2 → Com quem você quer fazer parte desta rede?
    H3 → Tenho uma empresa
    H3 → Tenho uma ONG
    H3 → Sou consumidor e vi o Selo — quero entender o que significa.
  H2 → Um sistema de participação e impacto — não uma campanha.
  H2 → Seu cliente já está pronto. Sua empresa está?
  H2 → O que a gente faz, aparece.
    H3 → Parceria com a Defensoria Pública do DF amplia atendimentos humanitários
    H3 → Aos 75 anos, Edilson prova que superação não tem prazo de validade
    H3 → Uma noite que marcou o início de uma rede
  H2 → Como o Selo aparece no dia a dia da sua empresa
    H3 → Na embalagem
    H3 → No ponto de venda
    H3 → Nas redes sociais da sua empresa
    H3 → No balcão — em uma frase
  H2 → Uma rede com estrutura de verdade.
    H3 → OSJ Knights of Malta — Cavaleiros de Malta
    H3 → S.E. Dr. Franco Nicoletti
    H3 → Shirin Vafaein
    H3 → Reconhecido. Documentado. Verificável.
  H2 → Pronto para fazer parte?
    H3 → Para empresas e vendedores
    H3 → Para ONGs
  H2 → Outros caminhos dentro da rede
    H3 → Imprensa
    H3 → Voluntários e colaboradores
    H3 → Pessoas que buscam apoio
  H2 → Perguntas frequentes
    H3 → O que é o Instituto Brasil Te Ama?
    H3 → O que é o Selo Brasil Te Ama e como funciona?
    H3 → Quanto custa para minha empresa aderir ao Selo?
    H3 → O consumidor paga mais por produtos com o Selo?
    H3 → Como uma ONG pode participar da rede do Instituto?
    H3 → O Instituto Brasil Te Ama tem credibilidade comprovada?
    H3 → O Instituto atua só no Distrito Federal?
    H3 → Em quanto tempo recebo retorno após me cadastrar?
```

---

## 10. Especificações de Imagens

| Posição | Alt text | Tamanho |
|---|---|---|
| Hero (fundo) | Voluntários e profissionais do Instituto Brasil Te Ama em ação humanitária no Distrito Federal | Mín. 1440×810px |
| Card Projeto 1 | Ação humanitária da Quarta do Cidadão em parceria com a Defensoria Pública do DF | 800×500px |
| Card Projeto 2 | Atleta Edilson com medalhas conquistadas aos 75 anos, apoiado pelo Instituto Brasil Te Ama | 800×500px |
| Card Projeto 3 | Lançamento do Instituto Brasil Te Ama em abril de 2025 com líderes e diplomatas em Brasília | 800×500px |
| Selo Prática 1 | Produto com o Selo Brasil Te Ama aplicado na embalagem | 600×400px |
| Selo Prática 2 | Adesivo do Selo Brasil Te Ama em vitrine de loja parceira | 600×400px |
| Selo Prática 3 | Post de empresa parceira no Instagram com o Selo Brasil Te Ama | 600×600px |
| Selo Prática 4 | Vendedor explicando o Selo Brasil Te Ama para cliente no balcão | 600×400px |
| Franco Nicoletti | S.E. Dr. Franco Nicoletti, fundador do Instituto Brasil Te Ama e Gran Priore do Brasil — OSJ Knights of Malta | 400×400px |
| Shirin Vafaein | Shirin Vafaein, presidente do Instituto Brasil Te Ama | 400×400px |
| Knights of Malta | Brasão do OSJ Knights of Malta — Cavaleiros de Malta | 200×200px |
| Open Graph | Instituto Brasil Te Ama — ações humanitárias reais com credencial internacional | **Exato 1200×630px** |

**Regras:** WebP preferencial · lazy loading abaixo do fold · luz natural · contraste suave · foco em pessoas

---

## 11. Metadados SEO

```html
<title>Instituto Brasil Te Ama — Seja parte de algo maior</title>
<meta name="description" content="O Selo Brasil Te Ama conecta empresas a ações humanitárias reais, com credencial dos Cavaleiros de Malta e transparência total. Parceria simples, impacto documentado.">
<meta property="og:title" content="Instituto Brasil Te Ama — Juntos, fazemos o cuidado chegar mais longe.">
<meta property="og:description" content="O Selo Brasil Te Ama conecta empresas a ONGs verificadas com credencial dos Cavaleiros de Malta. Impacto real e documentado. Parceria em 48h.">
<meta property="og:image" content="[URL 1200×630px]">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

---

## 12. Dados Institucionais

| Campo | Valor |
|---|---|
| Nome | Instituto Brasil Te Ama |
| CNPJ | 49.458.362/0001-10 |
| Fundação | 2022 |
| Sede | Brasília – DF |
| Atuação | Brasil e Nigéria |
| Frentes ativas | 10 |
| Respaldo | OSJ Knights of Malta (+100 países) |
| Fundador | S.E. Dr. Franco Nicoletti — Gran Priore do Brasil |
| Presidente | Shirin Vafaein |
| E-mail | contato@brasilteama.org.br |
| Telefone | (61) 9 8165-6421 |

---

## 13. Alertas de Implementação

> ⚠️ **BLOQUEADOR:** Ícones de redes sociais no rodapé sem link ativo — corrigir antes de publicar.

> ⚠️ **Hero:** Substituir imagem atual (mesa institucional) por foto de ação humanitária em campo.

> ⚠️ **FAQ Schema:** Implementar `FAQPage` JSON-LD com as 8 perguntas.

> ⚠️ **Accordion:** Usar `<details>`/`<summary>` nativo — primeiro item com atributo `open`.

> ℹ️ **CTA do menu:** "Aplique o Selo →" — não "Quero ser parceiro".

---

*Instituto Brasil Te Ama × Olmeda Studio — Design System v1.1 — Maio 2026*
