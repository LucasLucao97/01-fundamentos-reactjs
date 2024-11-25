import { Header } from './components/Header'
import { Post } from './components/post'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LucasLucao97.png',
      name: 'Lucas Barbosa',
      role: 'Front-end Developer at @Transfero',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da RocketSeat.' },
      { type: 'link', content: 'Meu portifólio', url: 'https://bento.me/lucasbarbosa' },
    ],
    publishedAt: new Date('2024-11-15 18:01:05'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/castrolol',
      name: 'Luan Castro',
      role: 'CTO at @Transfero',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da RocketSeat.' },
      { type: 'link', content: 'Meu portifólio', url: 'https://bento.me/lucasbarbosa' },
    ],
    publishedAt: new Date('2024-11-05 18:01:05'),
  },
];

export function App() {
  return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            { posts.map( post => {
              return (
                // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            }) }
          </main>
        </div>
      </div>
  )
}