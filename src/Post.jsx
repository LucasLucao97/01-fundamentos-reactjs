//props: {author:"", content:""}

export function Post(props) {
  return (
    <div>
      <h1>
        Post
      </h1>
      <strong>
        {props.author}
      </strong>
      <p>
        {props.content}
      </p>
    </div>
  )
}