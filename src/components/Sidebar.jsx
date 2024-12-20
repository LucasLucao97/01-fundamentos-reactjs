import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt='Cover'
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/LucasLucao97.png" />
        <strong >Lucas Barbosa</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="google.com">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside> 
  )
}