// builder.js — shared page builder used by the generator scripts.
// (this is not loaded by the site; it's a build utility only.)

// Generates a full HTML page given title, active nav key, screen label, and body HTML.
// The navbar `active` link is swapped automatically based on `activeKey`.

const FRAGMENTS_PROMISE = (async () => ({
  topbar: await readFile('uploads/fragment-topbar.html'),
  navbar: await readFile('uploads/fragment-navbar.html'),
  prefooter: await readFile('uploads/fragment-prefooter.html'),
  footer: await readFile('uploads/fragment-footer.html')
}));

async function buildPage({ filename, title, description, activeKey, screenLabel, body, extraHead = '', extraScript = '' }) {
  const f = await FRAGMENTS_PROMISE();

  // Swap active link class in navbar based on activeKey.
  // Map keys to hrefs in nav.
  const navMap = {
    home: 'index.html',
    sobre: 'sobre.html',
    selo: 'selo.html',
    projetos: 'projetos.html',
    conteudo: 'conteudo.html',
    contato: 'contato.html'
  };
  let navbar = f.navbar.replace(' class="active"', '');
  const activeHref = navMap[activeKey] || '';
  if (activeHref) {
    navbar = navbar.replace(`<a href="${activeHref}"`, `<a href="${activeHref}" class="active"`);
  }

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="stylesheet" href="styles.css">
<link rel="icon" href="assets/heart-mark.svg">
${extraHead}
</head>
<body data-screen-label="${screenLabel}">

${f.topbar}

${navbar}

${body}

${f.prefooter}

${f.footer}

${extraScript}

</body>
</html>
`;
}

// Export for use in script
globalThis.buildPage = buildPage;
log('builder ready');
