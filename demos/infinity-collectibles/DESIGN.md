# Infinity Collectibles — Design Brief da demo
Data: 2026-11-02
Estado: lead prospectado, sem parceria e sem contrato.

## Fatos do print
- Instagram: @infinitycollectiblesoficial (Infinity Collectibles).
- Bio anuncia figures, estátuas, Funko Pop alternativo, leilões e ofertas diárias.
- Bio anuncia envio para todo o Brasil e link de grupo VIP de WhatsApp.
- Print disponibilizado pelo usuário; não há autorização para incorporar logo/fotos/posts.

## Hipóteses
- Catálogo público pode organizar lotes e reduzir perguntas repetidas.
- Painel de edição simples pode facilitar publicar e ocultar colecionáveis.
- A vitrine deve complementar o grupo VIP, não disputar a conversão.
- Sem evidência de plataforma própria ou necessidade de lances on-line.

## Solução proposta
2 visões: vitrine pública e painel demonstrativo público, ambos 100% sintéticos.
Interação principal: filtrar, favoritar, abrir detalhe; depois editar ou criar lote no painel e ver mudança na vitrine do mesmo navegador.

## Arte
Três atributos: mística, premium, pop-geek.
Paleta: canvas #101017; superfície #1b1a25; texto #f8f5f0; dourado #f0c678; roxo #9167ee; hairline #353342.
Tipografia: Outfit para títulos e DM Sans para interfaces, com fallbacks do sistema.
Layout: mobile-first 320/360/390/430 e desktop 768/1024/1440; grid 2 ou 3 colunas, fluxo hero -> vitrine -> funcionamento -> VIP.
Ícones/figures: vetores originais inline criados para demonstração, sem copiar personagens, fotos ou logotipos reais.
Motion: 180 ms para hover/foco e transições; respeita prefers-reduced-motion.
Acessibilidade: labels, teclado, dialog com Escape, trap de foco, estados e aria-live.

## Segurança e integridade
Todos os preços e descrições são inventados e sinalizados como ilustrativos.
Dados ficam apenas em localStorage do navegador; sem backend, sem sincronização entre dispositivos, sem autenticação de produção.
Não existe leilão com lance real, cobrança ou captura de dados pessoais.
Link externo do grupo VIP copiado do print; verificar junto ao estabelecimento antes de produção.
O aviso de envio nacional deriva apenas da bio, precisa confirmação contratual.

## Critérios de aceite
- 2 URLs acessíveis; confirmação de conteúdo da página após deploy.
- JS analisado sintaticamente e compatível com navegador moderno.
- Fluxos de interação precisam de validação manual em navegador antes de uso como prova funcional avançada.
- Não instalar backend nem publicar main.
