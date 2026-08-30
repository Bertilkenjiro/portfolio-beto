import { TechnologyCard } from '../components/TechnologyCard'
import { ThemeToggle } from '../components/ThemeToggle'
import { technologies } from '../data/technologies'
import { useTheme } from '../hooks/useTheme'

export function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className="home">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <header className="home__header">
        <h1>BETO.</h1>
        <p>Data · Systems · Development</p>
      </header>

      <section className="technologies" aria-labelledby="technologies-title">
        <h2 id="technologies-title">Things I build with</h2>

        <ul className="technologies__list">
          {technologies.map((technology) => (
            <li key={technology.name}>
              <TechnologyCard technology={technology} />
            </li>
          ))}
        </ul>
      </section>

      <footer className="home__footer" aria-label="Redes e contato">
        <span>GitHub</span>
        <span aria-hidden="true">·</span>
        <span>LinkedIn</span>
        <span aria-hidden="true">·</span>
        <span>Contato</span>
      </footer>
    </main>
  )
}
