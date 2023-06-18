const styles = {
  container: {
    border: '2px solid #000000',
    maxWidth: 370,
  },
  img_wrapper: {
    padding: '20px 0',
    maxWidth: 330,
  },
  text_wrapper: {
    padding: '0 20px 24px 20px',
  },
  header: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: '44px',
  },
  text: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    ffontSize: 16,
    lineHeight: '22px',
  },
};

export default function BlogCard({ header, img, text }) {
  return (
    <div
      style={styles.container}
      className='d-flex flex-direction-column align-items-center'
    >
      <div style={styles.img_wrapper}>
        <img alt="background" src={'./img/main/blog/' + img}></img>
      </div>
      <div style={styles.text_wrapper}>
        <article>
          <header style={styles.header}>{header}</header>
          <p style={styles.text}>{text}</p>
        </article>
      </div>
    </div>
  );
}
