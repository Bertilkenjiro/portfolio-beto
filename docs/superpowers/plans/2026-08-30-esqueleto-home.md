# Plano de implementação do esqueleto da página inicial

> **Para agentes de implementação:** SUB-SKILL OBRIGATÓRIA: use `superpowers:subagent-driven-development` (recomendado) ou `superpowers:executing-plans` para executar este plano, tarefa por tarefa. Os passos usam caixas de seleção (`- [ ]`) para acompanhamento.

**Objetivo:** Substituir a tela inicial do Vite por uma home minimalista e responsiva que apresenta quatro tecnologias, com apenas Power BI habilitado.

**Arquitetura:** `App` renderiza `Home`, que lê uma lista tipada e delega cada item ao `TechnologyCard`. Os estilos globais ficam em `index.css` e o layout específico em `App.css`.

**Stack:** React 19, TypeScript 6, Vite 8 e CSS puro.

**Especificação:** `docs/superpowers/specs/2026-08-30-esqueleto-home-design.md`

## Restrições globais

- Não instalar dependências nem adicionar roteador, backend, APIs, autenticação, framework CSS ou animações.
- Power BI aponta para `/power-bi`; Python, TypeScript e React não podem ser clicados nem receber foco.
- GitHub, LinkedIn e Contato permanecem como textos até recebermos os endereços reais.
- Manter o código pequeno, tipado e ampliável por meio de `technologies.ts`.

## Estrutura de arquivos

- Criar `src/data/technologies.ts`: tipo `Technology` e conteúdo dos cards.
- Criar `src/components/TechnologyCard.tsx`: representação habilitada ou desabilitada de um item.
- Criar `src/pages/Home.tsx`: composição semântica da página.
- Modificar `src/App.tsx`: renderizar somente `Home`.
- Modificar `src/App.css`: layout da página e dos cards.
- Modificar `src/index.css`: reset, variáveis e tipografia globais.

---

### Tarefa 1: Construir o esqueleto completo da home

**Arquivos:**

- Criar: `src/data/technologies.ts`
- Criar: `src/components/TechnologyCard.tsx`
- Criar: `src/pages/Home.tsx`
- Modificar: `src/App.tsx`
- Modificar: `src/App.css`
- Modificar: `src/index.css`

**Interfaces:**

- Produz: `Technology`, com `name: string`, `description: string`, `enabled: boolean` e `path?: string`.
- Produz: `technologies: Technology[]` com os quatro itens.
- Produz: `TechnologyCard({ technology }: TechnologyCardProps)` e `Home()`.

- [ ] **Passo 1: Criar uma linha de base**

Executar `npm run lint` e `npm run build`. Ambos devem terminar com código `0` antes das alterações.

- [ ] **Passo 2: Criar os dados tipados**

Criar `src/data/technologies.ts`:

```ts
export type Technology = {
  name: string
  description: string
  enabled: boolean
  path?: string
}

export const technologies: Technology[] = [
  { name: 'Power BI', description: 'Dashboards & Analytics', enabled: true, path: '/power-bi' },
  { name: 'Python', description: 'Em breve', enabled: false },
  { name: 'TypeScript', description: 'Em breve', enabled: false },
  { name: 'React', description: 'Em breve', enabled: false },
]
```

- [ ] **Passo 3: Criar o card reutilizável**

Criar `src/components/TechnologyCard.tsx`:

```tsx
import type { Technology } from '../data/technologies'

type TechnologyCardProps = { technology: Technology }

export function TechnologyCard({ technology }: TechnologyCardProps) {
  const content = (
    <>
      <span className="technology-card__content">
        <strong>{technology.name}</strong>
        <small>{technology.description}</small>
      </span>
      {technology.enabled && <span className="technology-card__arrow" aria-hidden="true">→</span>}
    </>
  )

  if (technology.enabled && technology.path) {
    return <a className="technology-card" href={technology.path}>{content}</a>
  }

  return <div className="technology-card technology-card--disabled" aria-disabled="true">{content}</div>
}
```

- [ ] **Passo 4: Compor a página**

Criar `src/pages/Home.tsx`:

```tsx
import { TechnologyCard } from '../components/TechnologyCard'
import { technologies } from '../data/technologies'

export function Home() {
  return (
    <main className="home">
      <header className="home__header">
        <h1>BETO.</h1>
        <p>Data · Systems · Development</p>
      </header>

      <section className="technologies" aria-labelledby="technologies-title">
        <h2 id="technologies-title">Things I build with</h2>
        <ul className="technologies__list">
          {technologies.map((technology) => (
            <li key={technology.name}><TechnologyCard technology={technology} /></li>
          ))}
        </ul>
      </section>

      <footer className="home__footer" aria-label="Redes e contato">
        <span>GitHub</span><span aria-hidden="true">·</span>
        <span>LinkedIn</span><span aria-hidden="true">·</span>
        <span>Contato</span>
      </footer>
    </main>
  )
}
```

- [ ] **Passo 5: Simplificar a entrada da aplicação**

Substituir `src/App.tsx` por:

```tsx
import './App.css'
import { Home } from './pages/Home'

function App() {
  return <Home />
}

export default App
```

- [ ] **Passo 6: Aplicar os estilos globais**

Substituir `src/index.css` por:

```css
:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #242424;
  background: #fafafa;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --color-text: #242424;
  --color-muted: #767676;
  --color-border: #e5e5e5;
  --color-surface: #ffffff;
}

* { box-sizing: border-box; }
body { margin: 0; min-width: 320px; min-height: 100vh; }
a { color: inherit; }
```

- [ ] **Passo 7: Aplicar o layout da home**

Substituir `src/App.css` por:

```css
#root { min-height: 100vh; }

.home {
  width: min(100% - 40px, 640px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 96px 0 48px;
  display: flex;
  flex-direction: column;
}

.home__header h1 { margin: 0; font-size: 2rem; line-height: 1; letter-spacing: -0.06em; }
.home__header p { margin: 12px 0 0; color: var(--color-muted); font-size: 0.95rem; }
.technologies { margin-top: 72px; }
.technologies h2 { margin: 0 0 20px; color: var(--color-muted); font-size: 0.85rem; font-weight: 500; }
.technologies__list { margin: 0; padding: 0; display: grid; gap: 10px; list-style: none; }

.technology-card {
  width: 100%;
  min-height: 72px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  text-decoration: none;
}

a.technology-card:hover { border-color: #b8b8b8; }
a.technology-card:focus-visible { outline: 2px solid var(--color-text); outline-offset: 3px; }
.technology-card__content { display: grid; gap: 3px; }
.technology-card__content strong { font-size: 0.95rem; font-weight: 600; }
.technology-card__content small { color: var(--color-muted); font-size: 0.8rem; }
.technology-card__arrow { font-size: 1.1rem; }
.technology-card--disabled { color: #8a8a8a; background: transparent; }

.home__footer {
  margin-top: auto;
  padding-top: 72px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--color-muted);
  font-size: 0.8rem;
}

@media (max-width: 480px) {
  .home { width: min(100% - 32px, 640px); padding-top: 64px; }
  .technologies { margin-top: 56px; }
}
```

- [ ] **Passo 8: Validar o código**

Executar `npm run lint` e `npm run build`. Ambos devem terminar com código `0`, e o build deve gerar `dist/`.

- [ ] **Passo 9: Inspecionar manualmente**

Executar `npm run dev` e conferir desktop e largura de 375 px: quatro cards na ordem correta; apenas Power BI mostra seta, recebe foco e navega; os demais exibem `Em breve`; o rodapé é texto; não há rolagem horizontal.

- [ ] **Passo 10: Registrar a implementação**

```powershell
git add src/App.tsx src/App.css src/index.css src/components/TechnologyCard.tsx src/pages/Home.tsx src/data/technologies.ts
git commit -m "feat: create portfolio home page skeleton"
```

Resultado esperado: um commit de implementação focado, separado dos commits de documentação.
