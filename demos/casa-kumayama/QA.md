# QA — Casa Kumayama v2 (02/11/2026)
## Estado: APRESENTÁVEL COM LIMITAÇÕES EXPLÍCITAS — NÃO HOMOLOGADO VISUALMENTE
- GitHub: branch demo/casa-kumayama-listas-2026, PR #2 em rascunho, main preservada.
- Publicação: Cloudflare Worker 77-casa-kumayama-conceito.
- URLs HTTP: cliente, atendimento e gestao acessíveis, com documento HTML retornado.
- JS V8: parse OK.
- Teste de eventos mock DOM: cliente, adicionar produto, alterar quantidade, drawer abrir/fechar/Escape, simular solicitação, status Orçado, gestão, abrir editor de preço, salvar, ocultar item, restaurar dados: OK.
- Medidas: CSS com regras para <350, <620, <810, <1150 px, mas isso **não prova ausência de overflow**.
- Direitos: foto sob licença Pexels, crédito no hero e documentação; produto SVG autoral.
## Pendências antes de afirmar visual homologado
- Browser visual e captura das telas em 320, 360, 390, 430, 768, 1024 e 1440 px (serviço de automação externo sem saldo nesta sessão).
- Auditoria visual de qualidade da imagem e fontes Google reais.
- Teclado completo, leitor de tela e testes automatizados de acessibilidade.
- QA ponta a ponta em navegador real, especialmente fluxo drawer + SPA e modal.
- Autorização da marca e conteúdo real antes de uso em produção.
## Segurança/limites
- Sem backend, sem integração com e-commerce real, sem pedidos reais ou contato automático.
- Dados locais fictícios; admin é simulado e não deve ser usado como dashboard verdadeiro.
- Não mesclar no portfólio pessoal sem decisão arquitetural explícita.
