import type { Technology } from '../data/technologies'

type TechnologyCardProps = {
  technology: Technology
}

export function TechnologyCard({ technology }: TechnologyCardProps) {
  const content = (
    <>
      <span className="technology-card__content">
        <strong>{technology.name}</strong>
        <small>{technology.description}</small>
      </span>

      {technology.enabled && (
        <span className="technology-card__arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  )

  if (technology.enabled && technology.path) {
    return (
      <a className="technology-card" href={technology.path}>
        {content}
      </a>
    )
  }

  return (
    <div
      className="technology-card technology-card--disabled"
      aria-disabled="true"
    >
      {content}
    </div>
  )
}
