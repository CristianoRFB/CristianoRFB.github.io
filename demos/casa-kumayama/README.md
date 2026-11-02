# Casa Kumayama — demonstração conceitual (77)

Lead: @casakumayama, Av. Navarro de Andrade, 761, Santa Fé do Sul/SP.

**Não oficial.** A Casa Kumayama já mantém e-commerce próprio em https://www.casakumayama.com.br/. Esta demo propõe um complemento: criação de listas escolares e pré-orçamentos, atendimento e gestão ilustrativos.

## Visões
- `/cliente`: catálogo e lista com quantidades, estimativa e envio *simulado*.
- `/atendimento`: fila demonstrativa, estados de solicitação, cópia do resumo.
- `/gestao`: visibilidade e preço de produtos de exemplo, indicadores derivados do estado local.

## Escopo e limites
- HTML, CSS e JS puros; sem dependências ou servidor de dados.
- Dados da demo em `localStorage` no dispositivo. Sem sincronização entre dispositivos, sem login nem controle RBAC; a gestão não é admin real.
- Não envia pedidos ao negócio, não contém checkout, pagamentos, WhatsApp automático ou backend.
- Alguns preços foram observados em https://www.casakumayama.com.br/ em 02/11/2026; podem mudar. Outros itens foram inventados como exemplos. Não há disponibilidade de estoque garantida.
- Não há relação comercial comprovada nem direito concedido de uso oficial da marca. A marca é reproduzida apenas como referência textual conceitual.

## Rodar localmente
Abrir `index.html` no navegador para a visão cliente. Para testar rotas reais, iniciar um servidor estático com fallback ou usar o Worker em `worker.mjs`. O HTML interpreta o path atual (não altera conteúdo de produção).

## Critérios de aceite
Mobile 360 px, desktop 1440 px, cliente→atendimento, alteração gestão→cliente no mesmo navegador, navegador sem localStorage, acessibilidade básica, identificação DEMO permanente. Não confundir testes locais com homologação real.
