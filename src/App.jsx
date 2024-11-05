import { Header } from './components/Header'
import { Post } from './Post'
import './styles.css'

export function App() {
  return (
      <div>
        <Header />
        
        <Post 
          author="Lucas Barbosa"
          content=" 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Laborum pariatur perferendis quae ullam hic, 
            sapiente repudiandae dolor. 
            Architecto odit dolorum voluptas. 
            Placeat sed quam cum sequi sit fugit corrupti porro?"
        />
        <Post
          author="Gabriel Buzolin"
          content="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Sunt dolore quasi enim id veritatis, 
            sequi incidunt culpa consectetur, nisi suscipit, 
            sint fuga illum obcaecati corrupti rerum voluptate ipsa quidem nemo."
        />
      </div>
  )
}