# Design do esqueleto da página inicial

## Objetivo

Substituir a tela padrão do Vite pela primeira versão, intencionalmente pequena, da página inicial do portfólio pessoal do Beto. A página apresentará o portfólio como um hub pessoal de tecnologia, mantendo visíveis as áreas planejadas que ainda não estão disponíveis.

## Escopo

A página inicial conterá:

- A identificação `BETO.` e o subtítulo `Data · Systems · Development`.
- Uma seção chamada `Things I build with`.
- Cards para Power BI, Python, TypeScript e React.
- Power BI como o único link habilitado, apontando para `/power-bi`.
- As outras tecnologias em um estado desabilitado identificado por `Em breve`.
- GitHub, LinkedIn e Contato no rodapé, inicialmente como textos não interativos até que os endereços reais sejam fornecidos.

Este incremento não adicionará roteamento, página de Power BI, serviços de backend, APIs, autenticação, bibliotecas de interface de terceiros ou animações.

## Arquitetura

O `App.tsx` permanecerá como o componente de entrada da aplicação e renderizará `Home`. O `Home.tsx` será responsável pela composição semântica da página. O `TechnologyCard.tsx` será responsável pela representação visual e acessível de uma tecnologia. O `technologies.ts` armazenará os dados tipados usados para renderizar a lista de cards.

Os dados de cada tecnologia terão nome, descrição, estado de habilitação e caminho opcional. Cards habilitados serão renderizados como links. Cards desabilitados serão elementos não interativos e informarão sua indisponibilidade por texto, sem depender somente da cor.

## Estilos

Os estilos globais e as variáveis visuais ficarão no `index.css`. Os estilos de layout da página e dos componentes ficarão no `App.css` neste primeiro incremento, evitando a separação prematura em muitos arquivos.

O design usará uma paleta neutra e discreta, fontes do sistema, bastante espaço em branco, uma coluna de conteúdo estreita e centralizada, bordas sutis e um layout responsivo de coluna única. Os estilos de interação serão limitados a feedback claro de foco por teclado e de passagem do cursor nos links habilitados.

## Comportamento e acessibilidade

A página não dependerá de interações controladas por JavaScript além da renderização do React. Power BI funcionará como um link comum. As tecnologias desabilitadas não poderão receber foco nem ser clicadas. Títulos semânticos, marcação em lista, estilos visíveis de foco e textos de estado darão suporte à navegação por teclado e às tecnologias assistivas.

Como o roteamento está fora deste incremento, acessar `/power-bi` poderá exibir o fallback de desenvolvimento do Vite, mas ainda não haverá conteúdo específico para essa página.

## Verificação

Executaremos `npm run lint` para validar a qualidade do código e `npm run build` para validar o TypeScript e a compilação de produção do Vite. Também faremos uma inspeção manual da página em larguras de desktop e de dispositivos estreitos para conferir hierarquia, espaçamento, estados habilitado e desabilitado e foco por teclado.

## Versionamento

O trabalho será realizado na branch `feature/home-page`. A implementação será registrada em um commit Conventional Commit específico: `feat: create portfolio home page skeleton`.
