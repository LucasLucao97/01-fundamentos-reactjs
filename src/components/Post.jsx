import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post (props) {
  console.log(props);

  return (
    <article className={styles.post}> 
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src="https://github.com/LucasLucao97.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Lucas Barbosa</strong>
            <span>Front-end</span>
          </div>
        </div>
        <time title='11 de Maio às 08:13:17' datetime="2022-05-11 08:13:17">Publicado há uma hora</time>
      </header>
      <div className={styles.content}>
        
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

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}