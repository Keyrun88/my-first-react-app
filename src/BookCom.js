const inlineHeadStyle =
{
    color: '#617d98',
    fontsize: '0.75',
    marginTop: '0.5rem'
}

 const Book = ({ title, author, image }) => {

    return <article className="books">
        <img src={image} alt={"not found"}></img>
        <h2>{title}</h2>
        <h4 style={inlineHeadStyle}>{author}</h4>

    </article>
}
export default Book