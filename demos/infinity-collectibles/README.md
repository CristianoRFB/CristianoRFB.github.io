# Infinity Collectibles — prévia não oficial

Demo isolada de prospecção para @infinitycollectiblesoficial. **Não representa parceria nem produto implantado.**

## Links de publicação
- Vitrine: https://77-infinity-collectibles-conceito.on7.workers.dev/
- Gestão DEMO: https://77-infinity-collectibles-conceito.on7.workers.dev/?view=gestao

## O que existe
- Landing responsiva com design original e catálogo de seis lotes totalmente fictícios.
- Busca, filtro por categoria, favoritos, detalhe e CTA externo para o link VIP mostrado no print.
- Painel demonstrativo de criação, edição, publicação/ocultação e restauração dos lotes.
- Persistência **somente local ao navegador**, sem backend nem sincronização entre clientes.
- Sem login, senhas, dinheiro real, usuários cadastrados, lances, WhatsApp automatizado, pagamento ou estoque real.

## Fonte e limitações
A fonte comercial é o print público entregue pelo usuário em 2026-11-02. Nada foi extraído do logotipo ou de fotos do negócio. Busca externa não permitiu confirmar outro site do mesmo estabelecimento; homônimos internacionais não foram usados. Produtos e artes vetoriais são exemplos originais.

## Como testar
1. Abra a vitrine e use os filtros e busca.
2. Favoritar e abrir o modal de um lote.
3. Abra a visão de gestão no **mesmo navegador**, use "Adicionar lote", edite e oculte.
4. Volte à vitrine para ver as alterações locais.
5. Clique em "Restaurar demonstração" se quiser recomeçar.

## Engenharia
- Fonte HTML/CSS/JS autônoma em `index.html`; Worker Cloudflare separado `77-infinity-collectibles-conceito` em `on7.workers.dev`.
- GitHub branch: `demo/infinity-collectibles-2026-11` em repositório de portfólio de desenvolvimento; não alterar main automaticamente.
- Sem fontes proprietárias; fontes da Google Fonts por HTTPS e alternativas locais.
- Segurança: CSP com script inline apenas para esta demo estática, cache desabilitado, navegação externa sob clique.
- O código ainda não integra a vertical de SaaS canônica; possível futura migração via configuração de tenant e catálogo compartilhado.

## Próximo passo
Validar com o prospecto informações reais dos produtos/condições de leilão e autorizações de marca antes de planejar um sistema de produção. O painel público **jamais** deve ser reutilizado como admin real.
