# Home Page Skeleton Design

## Goal

Replace the default Vite screen with the first, intentionally small version of Beto's personal portfolio home page. The page presents the portfolio as a personal technology hub while keeping future areas visibly planned but unavailable.

## Scope

The home page contains:

- The identity `BETO.` and the tagline `Data · Systems · Development`.
- A `Things I build with` section.
- Cards for Power BI, Python, TypeScript, and React.
- Power BI as the only enabled link, pointing to `/power-bi`.
- The other technologies in a clearly disabled `Em breve` state.
- GitHub, LinkedIn, and Contato footer labels using safe placeholders until their real destinations are provided.

This increment does not add routing, a Power BI page, backend services, APIs, authentication, third-party UI libraries, or animation.

## Architecture

`App.tsx` remains the application entry component and renders `Home`. `Home.tsx` owns the semantic page composition. `TechnologyCard.tsx` owns the visual and accessible representation of one technology. `technologies.ts` contains the typed content used to render the card list.

The technology data has a name, description, enabled state, and optional path. Enabled cards render as links. Disabled cards render as non-interactive elements and expose their unavailable state in text, rather than relying only on color.

## Styling

Global defaults and design tokens live in `index.css`. Page and component layout styles live in `App.css` for this first increment, avoiding premature stylesheet fragmentation.

The design uses a restrained neutral palette, system fonts, generous whitespace, a narrow centered content column, subtle borders, and a responsive single-column layout. Interaction styling is limited to clear hover and keyboard-focus feedback on enabled links.

## Behavior and Accessibility

The page is usable without JavaScript-driven interactions beyond React rendering. Power BI behaves as a normal link. Disabled technologies are not focusable or clickable. Semantic headings, list markup, visible focus styles, and sufficient state labels support keyboard and assistive-technology users.

Because routing is outside this increment, following `/power-bi` may display the Vite development fallback but no dedicated page content is promised yet.

## Verification

Run `npm run lint` to validate source quality and `npm run build` to validate TypeScript and the production Vite build. Manually inspect the home at desktop and narrow viewport widths to confirm hierarchy, spacing, enabled/disabled states, and keyboard focus.

## Versioning

Work happens on `feature/home-page`. The implementation will be recorded as one focused Conventional Commit: `feat: create portfolio home page skeleton`.
