import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom'


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

export default function BlogSlide({ position, text, img, slide, children }) {
  const navigate = useNavigate();

  const openBlog = (value) => {

    navigate(`/blog/${value}`, { replace: true });
    window.scrollTo(0, 0);
  }

  const isTablet = useMediaQuery({ query: '(max-width: 934px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  if (!isTablet && !isMobile) {
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

    styles.bottom_img = {
      background: `no-repeat center/100% url('./img/blog/${img}.png')`
    }

    if (isMobile) {
      styles.text_min = {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: '25px',
        maxWidth: 330,
      }
      styles.slider_header = {
        height: 50,
      }
    }

  }
  return (
    <Fragment>
      {!isTablet ?
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
              <button className='btn-primary' onClick={() => openBlog(slide)} >See</button>
            </article>
          </div>
        </div>
        :
        <div className='blog slide d-flex flex-direction-column'>
          <div
            className='border-bottom'
            style={styles.slider_header}
          ></div>
          <div
            className='d-flex border-bottom slide_content'
            style={styles.wrapper}
          >
            <article>
              <div>{children}</div>
              <div>
                <p style={styles.text_min}>{text}</p>
              </div>
              <button className='btn-primary' onClick={() => openBlog(slide)}>See</button>
            </article>
            <div
              style={styles.bottom_img}
              className='main_img'
            ></div>
          </div>
        </div>}
    </Fragment>
  );
}
