import { ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment () {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} className={styles.avatar} src="https://github.com/LucasLucao97.png" alt="" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.AuthorAndTime}>
              <strong>Lucas Barbosa</strong>
              <time title='11 de Maio às 08:13:17' datetime="2022-05-11 08:13:17">Cerca de 1hr atrás</time>
            </div>

            <button type="button" title="Deletar comentário">
              <trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!!!</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp />
            Aplaudir  <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}