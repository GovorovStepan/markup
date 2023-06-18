import { useMediaQuery } from 'react-responsive';

const styles = {
  slider_header: {
    height: 100,
  },
  text_min: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 24,
    lineHeight: '33px',
    maxWidth: 500,
  },
};

export default function BlogSlide({ position, text, img, children }) {
  const isTablet = useMediaQuery({ query: '(max-width: 934px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  console.log('isMobile', isMobile, 'isTablet', isTablet);
  if (window.screen.width > 900) {
    if (position === 'right') {
      styles.wrapper = {
        flexDirection: 'row',
      };
      styles.text = {
        marginTop: 150,
        marginLeft: 200,
      };
    } else {
      styles.wrapper = {
        flexDirection: 'row-reverse',
      };
      styles.text = {
        marginTop: 150,
        marginRight: 230,
      };
    }
  } else {
    if (position === 'right') {
    } else {
    }
  }

  return (
    <div className='blog slide d-flex flex-direction-column'>
      <div
        className='border-bottom'
        style={styles.slider_header}
      ></div>
      <div
        className='d-flex border-bottom slide_content'
        style={styles.wrapper}
      >
        <img
          alt='background'
          src={`./img/blog/${img}.png`}
          className='main_first_img'
        ></img>
        <article style={styles.text}>
          <div>{children}</div>
          <div>
            <p style={styles.text_min}>{text}</p>
          </div>
          <button className='btn-primary'>Application</button>
        </article>
      </div>
    </div>
  );
}
