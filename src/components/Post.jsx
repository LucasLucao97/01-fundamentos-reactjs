import styles from './Post.module.css'

export function Post () {
  return (
    <article className={styles.post}> 
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/LucasLucao97.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Lucas Barbosa</strong>
            <span>Front-end</span>
          </div>
        </div>
        <time title='11 de Maio às 08:13:17' datetime="2022-05-11 08:13:17">Publicado há uma hora</time>
      </header>
      <div className={styles.content}>
        <p>Oi</p>
      </div>
    </article>
  )
}