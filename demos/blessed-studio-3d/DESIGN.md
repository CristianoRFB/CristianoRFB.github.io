# DESIGN — Blessed Studio 3D (DEMO)
Data: 2026-11-02

## Contexto e proveniência
- Confirmado pelos prints fornecidos: @blessedstudio3d, serviço de impressão 3D, promessa "do imaginário ao real", atendimento por WhatsApp e Instagram, localização São Paulo/SP. Há posts com fidgets, miniaturas, polvinho e peças criativas.
- Não confirmado: estoque, preços, materiais, prazos, formas de envio, política comercial e autorização de uso de marca/fotos. Todos são **dados de demonstração**.
- Identidade gráfica proposta: referências ao azul e laranja do avatar, sem reproduzir a arte original do negócio.

## Direção de arte
Três atributos: **inventivo**, **preciso**, **acolhedor**.
- Navy #08131d (hero e menu), off-white #f5f6f3 (catálogo), azul #377bf7 (detalhe), laranja #ff9b58 (CTA), mint #bceee7 (destaque).
- Tipografia: stack de sistema Inter / Segoe UI / Arial, sem download de fontes.
- Layout: largura máxima 1170px, grids 3/2/1 no catálogo, conteúdo prioritário a 360–430px.
- Componentes: filtros de produtos, catálogo com SVGs próprios, formulário de orçamento, rastreio demonstrativo, dashboard de produção, CSV, restauração dos fixtures.
- Motion: elevação de cards e anel na composição; reduced-motion respeitado.

## Três visões e tarefa principal
1. **Cliente / vitrine**: explorar peças, filtrar, selecionar e criar solicitação fictícia.
2. **Acompanhamento**: consultar número recebido, visualizar etapas, copiar resumo.
3. **Gestão**: buscar e filtrar encomendas, alterar etapa e verificar mudança no acompanhamento.

## Segurança e limites
Prototipagem 100% estática. Sem backend, login real, pagamento, WhatsApp automático, uploads, disparos, mensagens ou dados reais. Fictícios guardados apenas no localStorage deste navegador e resetáveis. Sem acesso compartilhado entre dispositivos. Nenhum asset proprietário do Instagram reutilizado: ilustrações são SVGs criados para demo.

## Aceite
Ações principais demonstráveis e totalmente identificadas como DEMO. Layout responsivo, labels, estado vazio, feedback, teclado e foco; status persistente no mesmo navegador; CSV protegido contra injeção de fórmulas. Antes de produção: validar marca, contratar domínio, autenticacão, banco, regras de autorização e LGPD.