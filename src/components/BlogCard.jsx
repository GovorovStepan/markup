import { useMediaQuery } from 'react-responsive';
import { HashLink as Link } from 'react-router-hash-link';
const styles = {
  container: {
    border: '2px solid #000000',
    maxWidth: 370,
  },
  img_wrapper: {
    padding: '20px 20px 15px 20px ',
    maxWidth: 330,
  },
  text_wrapper: {
    padding: '0 20px 20px 20px',
  },
  header: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 28,
    lineHeight: '44px',
  },
  text: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '22px',
    marginTop: 9,
    marginBottom: 0
  },
};


export default function BlogCard({ header, img, text, link,  size = "normal" }) {

  const isTablet = useMediaQuery({ query: '(max-width: 934px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  switch (size) {
    case "mid":
      styles.container =  {
        border: '2px solid #000000',
        maxWidth: 350,
      }
      styles.img_wrapper =  {
        padding: '20px',
        maxWidth: 300,
      }
      break;
  
  }

  if(isMobile){
    styles.text = {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '22px',
      marginTop: 5,
      marginBottom: 0
    }
  }

  return (
    <div
      style={styles.container}
      className='d-flex flex-direction-column align-items-center'
    >
      <div style={styles.img_wrapper}>
        <img alt="background" src={'./img/main/blog/' + img}></img>
      </div>
      <div style={styles.text_wrapper}>
        <article style={{padding: 0}}>
          <header style={styles.header}>{header}</header>
          <p style={styles.text}>{text}</p>
        </article>
      </div>
      <div className='d-flex' style={{  width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <button className='btn-primary' style={{marginRight:20, marginBottom: 20}}><Link to={'/blog/'+link} smooth='true' >More</Link></button>
      </div>
    </div>
  );
}
