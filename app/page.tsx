import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/arqueriapro_logo_white.svg"
              alt="Arqueria.pro Logo"
              className={styles.vercelLogo}
              width={180}
              height={74}
              priority
            />
          </a>
        </div>
      </div>

      <div>
        <Image
          src="/field.png"
          width={500}
          height={500}
          alt="Picture of archery field" />
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.arqueria.pro/docs/registro_puntos"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Registros <span>-&gt;</span>
          </h2>
          <p>Puntos en el entranamiento y la competencia.</p>
        </a>

        <a
          href="https://www.arqueria.pro/docs/analisis"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Análisis <span>-&gt;</span>
          </h2>
          <p>Explota al máximo tus datos en fabulosas gárficas intereactivas!</p>
        </a>

        <a
          href="https://www.arqueria.pro/docs/seguimiento"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Seguimiento <span>-&gt;</span>
          </h2>
          <p>De tus avances en conjunto con tu entrenador.</p>
        </a>

        <a
          href="https://www.arqueria.pro/docs/social"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Comparte <span>-&gt;</span>
          </h2>
          <p>
            Tus logros con tu equipo y amistades..
          </p>
        </a>
      </div>
    </main>
  )
}
