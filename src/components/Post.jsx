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
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da RocketSeat.</p>
        <p><a href="https://bento.me/lucasbarbosa">Meu portifólio</a></p>
        <p>
          <p>#NovoProjeto</p>
          <p>#Nlw</p>
          <p>#RocketSeat</p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}