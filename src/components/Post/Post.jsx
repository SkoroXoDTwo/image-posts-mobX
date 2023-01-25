import "./Post.scss"

const Post = ({ title, id, description }) => {
  return (
    <li>
      <article className="post">
        <img className="post__img" src={`https://picsum.photos/1500/1500.jpg?random=${id}`} />
        <div className="post__cover">
          <h2 className="post__title">{title}</h2>
          <p className="post__description">{description}</p>
        </div>
      </article>

    </li>
  )
}

export default Post;
