const Login = ({ title, content, img}) => {
  return (
    <>
      <div id="myArticle" className="article-container">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div>
        <img src={img} alt={title} />
      </div>
    </>
  )
}

