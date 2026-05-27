---
name: Instituto Brasil Te Ama
colors:
  surface: '#f8faf9'
  surface-dim: '#d9dada'
  surface-bright: '#f8faf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f3'
  surface-container: '#edeeee'
  surface-container-high: '#e7e8e8'
  surface-container-highest: '#e1e3e2'
  on-surface: '#191c1c'
  on-surface-variant: '#3f4940'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#eff1f0'
  outline: '#6f7a70'
  outline-variant: '#bfc9be'
  surface-tint: '#116c3c'
  primary: '#00512a'
  on-primary: '#ffffff'
  primary-container: '#0e6b3b'
  on-primary-container: '#94e9ac'
  inverse-primary: '#85d89d'
  secondary: '#b81f22'
  on-secondary: '#ffffff'
  secondary-container: '#ff544e'
  on-secondary-container: '#5c0006'
  tertiary: '#755b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cea72c'
  on-tertiary-container: '#4f3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a0f5b8'
  primary-fixed-dim: '#85d89d'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#00522b'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb3ac'
  on-secondary-fixed: '#410003'
  on-secondary-fixed-variant: '#93000f'
  tertiary-fixed: '#ffe08e'
  tertiary-fixed-dim: '#ecc246'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#f8faf9'
  on-background: '#191c1c'
  surface-variant: '#e1e3e2'
  forest-green: '#0E6B3B'
  red-love: '#C62B2B'
  soft-gold: '#E1B83D'
  earth-terracotta: '#C76B46'
  serene-blue: '#4C6FA3'
  light-cream: '#F6F2E8'
  sand-beige: '#EAD9B4'
  textured-cream: '#F0EAD6'
  soft-charcoal: '#282B2B'
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
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  section-gap: clamp(4rem, 10vw, 8rem)
---

# Design System — Instituto Brasil Te Ama
**Versão 1.0 — Maio 2026**
*Olmeda Studio × Instituto Brasil Te Ama*

---

## 1. Identidade da Marca

### Missão
Conectar empresas, ONGs e pessoas em ações humanitárias reais — com transparência, credencial internacional e impacto documentado.

### Tagline Principal
> *"Juntos, fazemos o cuidado chegar mais longe."*

### Tagline de Rodapé
> *"O Brasil que a gente ama, precisa da gente."*

### Tom de Voz
- Coletivo e acolhedor: "a gente", "juntos", "faça parte"
- Direto e confiável — nunca corporativo ou distante
- Sequência emocional da página: **Sente → Entende → Age**
- Sem promessas vazias — tudo documentado e verificável

---

## 2. Paleta de Cores

### Cores Principais

| Nome | Hex | Uso |
|---|---|---|
| Floresta Verde | `#0E6B3B` | Cor dominante — botões primários, headings, fundo de seções |
| Amor Vermelho | `#C62B2B` | Destaque emocional — CTAs hover, ênfase textual |
| Ouro Suave | `#E1B83D` | Detalhes decorativos — ícones de estrela, separadores, badges |
| Terracota Terra | `#C76B46` | Superfícies secundárias, acentos quentes |
| Azul Sereno | `#4C6FA3` | Uso institucional — links, estados secundários |

### Cores Neutras

| Nome | Hex | Uso |
|---|---|---|
| Creme Claro | `#F6F2E8` | Fundo principal da página |
| Bege Areia | `#EAD9B4` | Fundo de cards e superfícies suaves |
| Carvão Suave | `#282B2B` | Texto principal, headers |

### Regra de Proporção
- **60%** neutros (creme, bege, branco)
- **30%** cores principais (verde, vermelho)
- **10%** ouro (detalhes, ícones, ornamentos)

### Variáveis CSS

```css
:root {
  /* Cores principais */
  --color-green:     #0E6B3B;
  --color-red:       #C62B2B;
  --color-gold:      #E1B83D;
  --color-terracota: #C76B46;
  --color-blue:      #4C6FA3;

  /* Neutras */
  --color-cream:     #F6F2E8;
  --color-sand:      #EAD9B4;
  --color-charcoal:  #282B2B;

  /* Superfícies */
  --surface-white:      #FFFFFF;
  --surface-cream-tex:  #F0EAD6;
  --surface-sand:       #EAD9B4;
  --surface-green-deep: #0E6B3B;
  --surface-terracota:  #C76B46;
}
```

---

## 3. Tipografia

### Fonte de Títulos — Esperança
- **Uso:** H1, H2, títulos de seção, chamadas de destaque
- **Estilo:** Serifada elegante, peso regular e bold
- **Fallback:** Georgia, "Times New Roman", serif

### Fonte de Corpo — Inter
- **Uso:** Parágrafos, labels, navegação, rodapé, botões
- **Estilo:** Sans-serif, peso regular (400) e medium (500)
- **Fallback:** -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Escala Tipográfica

```css
/* Títulos */
h1 { font-family: 'Esperança', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; line-height: 1.1; }
h2 { font-family: 'Esperança', serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; line-height: 1.2; }
h3 { font-family: 'Esperança', serif; font-size: clamp(1.2rem, 2vw, 1.6rem); font-weight: 600; line-height: 1.3; }

/* Corpo */
body  { font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.7; color: var(--color-charcoal); }
.label { font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; }
.caption { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: var(--color-terracota); }
```

---

## 4. Componentes de UI

### Botões

#### Primário — "Aplique o Selo →"
```css
.btn-primary {
  background-color: var(--color-red);
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.btn-primary:hover { background-color: #A82020; }
```

#### Secundário — "Conheça o Instituto →"
```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-red);
  border: 2px solid var(--color-red);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 12px 26px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background-color: var(--color-red);
  color: #FFFFFF;
}
```

#### Terciário — Link com seta
```css
.btn-link {
  color: var(--color-charcoal);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.btn-link:hover { color: var(--color-green); }
```

#### Ícone Circular (variantes)
- **Verde:** fundo `#0E6B3B`, ícone branco — Comunidade
- **Vermelho:** fundo `#C62B2B`, ícone branco — Amor / Impacto
- **Ouro:** fundo `#E1B83D`, ícone branco — Selos / Destaque
- **Verde outline:** borda `#0E6B3B`, ícone verde — Ações neutras

---

## 5. Ícones

### Ícones Principais (simbólicos, preenchidos)
| Ícone | Significado |
|---|---|
| Cruz dourada | Fé e Propósito |
| Estrela de 8 pontas | Impacto Real |
| Flor de 6 pétalas azul | Respaldo Internacional |
| Ramo de folhas verde | Cuidado e Esperança |
| Grupo de pessoas | Comunidade e União |

### Ícones Secundários (lineares, outline)
Handshake · Escudo · Documento · Coração · Folha · Pessoas · Colunas · Globo

**Regra:** Ícones de navegação, cards de identificação e CTAs secundários usam sempre versão **linear (outline)** — nunca preenchidos nesse contexto.

---

## 6. Elementos Gráficos

### Formas Orgânicas
- Ramos e folhas verdes — bordas de seções, ilustrações decorativas
- Estrelas de 8 pontas douradas (`#E1B83D`) — separadores, detalhes ornamentais

### Padrões Geométricos (Azulejos)
- Inspirados em azulejos portugueses e arte popular brasileira
- Aplicação: fundos de cards, elementos decorativos de seção
- Cores: vermelho, verde, azul, dourado sobre fundo bege

### Imagem em Forma de Coração
- Hero visual: colagem de fotos em formato de coração
- Combina paisagens naturais do Brasil com retratos de pessoas atendidas
- Badge do Selo sobreposto no canto inferior direito da composição

---

## 7. Sombras e Superfícies

```css
/* Cards */
--shadow-soft:   0 2px 8px rgba(0, 0, 0, 0.06);   /* Cards em repouso */
--shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.12);  /* Cards em destaque */
--shadow-strong: 0 8px 24px rgba(0, 0, 0, 0.18);  /* Hover / botão CTA */
```

### Superfícies Disponíveis
| Nome | Valor | Uso |
|---|---|---|
| Branco Limpo | `#FFFFFF` | Cards limpos, modais |
| Creme Texturizado | `#F0EAD6` | Seções de separação |
| Bege Areia | `#EAD9B4` | Fundo secundário |
| Verde Profundo | `#0E6B3B` | Seções de destaque escuro |
| Terracota Natural | `#C76B46` | Seções quentes / CTA final |

---

## 8. Estrutura da Homepage

Hierarquia de seções em ordem de implementação:

```
NAVEGAÇÃO (sticky)
  ├── Logo + Menu principal
  └── CTA fixo: "Aplique o Selo →"

SEÇÃO 1 — HERO (#hero)
  ├── H1: "Juntos, fazemos o cuidado chegar mais longe."
  ├── Subtítulo (max 2 linhas)
  ├── CTA Primário: "Aplique o Selo no meu negócio →"
  └── CTA Secundário: "Como funciona ↓" (âncora #como-funciona)

SEÇÃO 2 — IDENTIFICAÇÃO DE PÚBLICO (#para-voce)
  ├── Card A: "Tenho uma empresa" → /empresas
  ├── Card B: "Tenho uma ONG" → /ongs
  └── Card C: "Sou consumidor e vi o Selo..." → /sobre

SEÇÃO 3 — O QUE É O BRASIL TE AMA (#como-funciona)
  ├── H2: "Um sistema de participação e impacto — não uma campanha."
  ├── Frase âncora: "Campanhas acabam. Sistemas continuam."
  ├── Infográfico de fluxo (4 etapas)
  └── Linha de credencial: CNPJ + fundação + atuação

SEÇÃO 4 — POR QUE AGORA (#por-que-agora)
  ├── H2: "Seu cliente já está pronto. Sua empresa está?"
  ├── 3 dados de mercado (83% / 76% / 85%) com fontes
  └── CTA: "Entenda como aplicar o Selo →"

SEÇÃO 5 — PROVA SOCIAL (#o-que-fazemos)
  ├── H2: "O que a gente faz, aparece."
  ├── Card 1: Quarta do Cidadão (Defensoria DF)
  ├── Card 2: Atleta Edilson (Esporte)
  ├── Card 3: Lançamento Abril 2025
  └── Barra de imprensa: Metrópoles · Agência Brasília · Defensoria DF · Lo Scudo

SEÇÃO 6 — SELO NA PRÁTICA (#selo-na-pratica)
  ├── H2: "Como o Selo aparece no dia a dia da sua empresa"
  ├── Grid 2×2: Na embalagem · No PDV · Nas redes · No balcão
  └── CTA: "Quero aplicar o Selo no meu negócio →"

SEÇÃO 7 — CREDIBILIDADE (#credibilidade)
  ├── H2: "Uma rede com estrutura de verdade."
  ├── Bloco 1: OSJ Knights of Malta
  ├── Bloco 2: Liderança (Franco Nicoletti + Shirin Vafaein)
  └── Bloco 3: Reconhecimentos verificáveis

SEÇÃO 8 — CTA FINAL (#faca-parte)
  ├── H2: "Pronto para fazer parte?"
  ├── Bloco A: "Para empresas e vendedores" → Botão primário
  ├── Bloco B: "Para ONGs" → Botão secundário
  └── Texto de redução de fricção (sem taxa, retorno em 48h)

SEÇÃO NOVA — OUTROS CAMINHOS (#outros-caminhos)
  ├── Item: Imprensa → /contato?tipo=imprensa
  ├── Item: Voluntários → /contato?tipo=voluntario
  └── Item: Pessoas que buscam apoio → /projetos

SEÇÃO 9 — FAQ (#perguntas-frequentes)
  ├── H2: "Perguntas frequentes"
  ├── 8 perguntas em acordeão (primeiro item aberto por padrão)
  └── Link rodapé: "Ainda tem dúvida? → Fale com o Instituto"

RODAPÉ (#rodape)
  ├── Logo + Descrição institucional + CNPJ
  ├── Ícones sociais (com links ativos — BLOQUEADOR)
  ├── 4 colunas de navegação
  └── Copyright + Idiomas (PT | EN | ES | IT)
```

---

## 9. Hierarquia de H-tags (SEO)

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
| Card Projeto 1 — Quarta do Cidadão | Ação humanitária da Quarta do Cidadão em parceria com a Defensoria Pública do DF | 800×500px |
| Card Projeto 2 — Atleta Edilson | Atleta Edilson com medalhas conquistadas aos 75 anos, apoiado pelo Instituto Brasil Te Ama | 800×500px |
| Card Projeto 3 — Lançamento Abril 2025 | Lançamento do Instituto Brasil Te Ama em abril de 2025 com líderes e diplomatas em Brasília | 800×500px |
| Selo na Prática — Embalagem | Produto com o Selo Brasil Te Ama aplicado na embalagem | 600×400px |
| Selo na Prática — PDV | Adesivo do Selo Brasil Te Ama em vitrine de loja parceira | 600×400px |
| Selo na Prática — Redes | Post de empresa parceira no Instagram com o Selo Brasil Te Ama | 600×600px |
| Selo na Prática — Balcão | Vendedor explicando o Selo Brasil Te Ama para cliente no balcão | 600×400px |
| Liderança — Franco Nicoletti | S.E. Dr. Franco Nicoletti, fundador do Instituto Brasil Te Ama e Gran Priore do Brasil — OSJ Knights of Malta | 400×400px |
| Liderança — Shirin Vafaein | Shirin Vafaein, presidente do Instituto Brasil Te Ama | 400×400px |
| Knights of Malta — Brasão | Brasão do OSJ Knights of Malta — Cavaleiros de Malta, apoio estrutural do Instituto Brasil Te Ama | 200×200px |
| Open Graph | Instituto Brasil Te Ama — ações humanitárias reais com credencial internacional | **Exato 1200×630px** |

**Regras:**
- Formato preferencial: **WebP** (fallback JPG)
- Lazy loading em todas as imagens abaixo do fold
- Tratamento fotográfico: luz natural · contraste suave · cores acolhedoras · foco em pessoas · clima de esperança

---

## 11. Navegação

### Menu Principal
```
[Logo] | Home · Sobre · Liderança · Selo Brasil Te Ama · Projetos · Notícias · Transparência · Contato
                                                                              [Aplique o Selo →] ← sticky
```

### Idiomas disponíveis
PT · EN · ES · IT

### Mapa de Links Internos (principais)

| Elemento | Destino |
|---|---|
| CTA fixo menu | `/empresas` |
| Hero — CTA primário | `/empresas` |
| Hero — CTA secundário | `#como-funciona` |
| Card A — Empresa | `/empresas` |
| Card B — ONG | `/ongs` |
| Card C — Consumidor | `/sobre#como-funciona` |
| Cards de projeto | `/blog/[slug]` |
| Liderança | `/lideranca` |
| Transparência | `/transparencia` |
| CTA final A | `/empresas` |
| CTA final B | `/ongs` |
| FAQ rodapé | `/contato` |

---

## 12. Metadados SEO

```html
<!-- Title -->
<title>Instituto Brasil Te Ama — Seja parte de algo maior</title>

<!-- Meta Description -->
<meta name="description"
  content="O Selo Brasil Te Ama conecta empresas a ações humanitárias reais,
  com credencial dos Cavaleiros de Malta e transparência total.
  Parceria simples, impacto documentado.">

<!-- Open Graph -->
<meta property="og:title"
  content="Instituto Brasil Te Ama — Juntos, fazemos o cuidado chegar mais longe.">
<meta property="og:description"
  content="O Selo Brasil Te Ama conecta empresas a ONGs verificadas com credencial
  dos Cavaleiros de Malta. Impacto real e documentado. Parceria em 48h.">
<meta property="og:image" content="[URL 1200×630px]">
<meta property="og:type"  content="website">

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="Instituto Brasil Te Ama — Seja parte de algo maior">
<meta name="twitter:description"
  content="Empresas, ONGs e pessoas conectadas em ações humanitárias reais.
  Credencial internacional. Transparência total.">
```

**Palavras-chave semânticas (aplicar no corpo, não em meta keywords):**
`instituto humanitário brasil` · `selo responsabilidade social empresa` · `ong parceira empresa brasil` · `cavaleiros de malta brasil` · `como associar empresa a causa social` · `rede humanitária brasil`

---

## 13. Dados Institucionais

| Campo | Valor |
|---|---|
| Nome completo | Instituto Brasil Te Ama |
| CNPJ | 49.458.362/0001-10 |
| Fundação | 2022 |
| Sede | Brasília – DF |
| Atuação | Brasil e Nigéria |
| Frentes ativas | 10 |
| Respaldo | OSJ Knights of Malta (reconhecido em +100 países) |
| Fundador | S.E. Dr. Franco Nicoletti — Gran Priore do Brasil |
| Presidente | Shirin Vafaein |
| Site | instituto-brasil-te-ama.olmedatech.com |
| E-mail | contato@brasilteama.org.br |
| Telefone | (61) 9 8165-6421 |

---

## 14. Alertas de Implementação

> ⚠️ **BLOQUEADOR:** Os ícones de redes sociais no rodapé estão sem link ativo no site atual. Corrigir antes de qualquer publicação — isso impacta diretamente a credibilidade institucional.

> ⚠️ **Hero:** Substituir a imagem atual (evento com mesa institucional) por foto de ação humanitária em campo com pessoas reais atendidas.

> ⚠️ **FAQ Schema:** Implementar `FAQPage` JSON-LD com todas as 8 perguntas para Featured Snippets e respostas de IA (Google SGE, Perplexity, ChatGPT).

> ⚠️ **Accordion:** Usar `<details>` e `<summary>` nativos do HTML — não JavaScript pesado. Primeiro item aberto por padrão com atributo `open`.

> ℹ️ **CTA do menu:** Texto correto é "Aplique o Selo →" — não "Quero ser parceiro".

---

*Instituto Brasil Te Ama × Olmeda Studio — Design System v1.0 — Maio 2026*
