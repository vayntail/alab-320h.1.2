function Article({ date, title, imgSrc, content }) {
  const formattedDate = () => {
    let formatted = new Date(date);
    console.log(formatted);
    return (
      (formatted.getMonth() + 1).toString() +
      "/" +
      (formatted.getDate() + 1).toString() +
      "/" +
      formatted.getFullYear().toString().slice(-2)
    );
  };
  return (
    <>
      <section>
        <article>
          <time dateTime={date}>{formattedDate()}</time>
          <h2>{title}</h2>
          <img src={imgSrc} />
        </article>
        <p>{content}</p>
        <aside>
          <h3>Continues...</h3>
        </aside>
      </section>
    </>
  );
}

export default Article;
