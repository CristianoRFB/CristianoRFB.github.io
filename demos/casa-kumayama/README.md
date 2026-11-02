# Casa Kumayama — proposta de lista escolar (77)
**DEMONSTRAÇÃO NÃO OFICIAL**. Este projeto é uma proposta feita a partir de informações públicas. Não há contrato, login real, recebimento de encomendas ou consentimento de uso de imagem da empresa.

## Links públicos
- Cliente: https://77-casa-kumayama-conceito.on7.workers.dev/cliente
- Atendimento: https://77-casa-kumayama-conceito.on7.workers.dev/atendimento
- Gestão: https://77-casa-kumayama-conceito.on7.workers.dev/gestao

## Redesign v2 — novembro de 2026
A versão anterior usava hero em degradê escuro, emojis e cartões genéricos. A nova linguagem é varejo editorial: hero de papelaria com fotografia licenciada, referências à tradição da Casa Kumayama, tipografia Fraunces + DM Sans, paleta creme/azul-marinho/vinho, ilustrações SVG específicas de materiais, catálogo 2–3 colunas, busca, filtros, lista lateral desktop e gaveta mobile.

O atendimento tem fila filtrável, detalhes, atualização de status e cópia do resumo. A gestão exibe apenas métricas derivadas dos dados de simulação, edição de preço em diálogo próprio, controle de visibilidade e confirmação de limpeza.

## Diferencial do produto
Complementar o e-commerce real da empresa (https://www.casakumayama.com.br/) com a possibilidade de o cliente preparar uma lista escolar e solicitar orçamento organizado. A necessidade real deve ser validada com a loja antes da venda.

## Como os dados se comportam
Tudo roda no browser. LocalStorage mantém os dados entre as visões **no mesmo dispositivo/navegador**, sem autenticação e sem backend. Não sincroniza dispositivos, não envia WhatsApp nem pedidos, não garante estoque e não cobra. Os preços são ilustrativos; alguns valores são baseados na página pública da empresa, mas podem estar desatualizados. Fotos ambientacionais não representam a loja.

## Arquivos
- index.html: interface original e jornadas cliente, atendimento, gestão.
- worker.mjs: serviço estático isolado em Cloudflare (pode ser publicado como Worker JavaScript module).
- DESIGN.md: briefing, tokens, referências, licença da fotografia e limites.
- test-smoke.mjs: testes de fluxo e eventos em Node.js, sem dependências.
- QA.md: evidências e pendências.

## Validação
Execute em Node.js 20+: node demos/casa-kumayama/test-smoke.mjs (a partir da raiz do repo). Não requer npm install.
A URL publicada foi verificada por fetch HTTP e por leitura do conteúdo em todas as rotas. O JavaScript foi compilado em V8 e interações simuladas foram testadas. **Ainda é necessária uma passagem visual real e E2E em navegador com viewports 320/360/390/430/768/1024/1440 antes da homologação visual definitiva.**

## Direitos
Foto do hero: The Design Lady / Pexels, sob licença Pexels, https://www.pexels.com/photo/neatly-arranged-school-supplies-on-desk-28503364/. Nenhuma foto real de produto ou logo oficial foi extraída do Instagram. Elementos vetoriais são próprios da demonstração.
