import Header from '../components/Header';
import BlogSlide from '../components/BlogSlide';
import './Blog.css';

const styles = {
  text_big: {
    fontFamily: 'Sorts Mill Goudy',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 76,
    lineHeight: '109px',
  },
};

export default function Blog() {
  return (
    <div
      className='blog'
      style={{ maxWidth: 1920 }}
    >
      <Header position='right'></Header>
      <div>
        <div className='slide header_slide border-top slide_content'>
          <div v>
            <div id='header_main_text'>
              <div>
                <span>
                  Hi! This is my travel blog with{' '}
                  <img
                    alt='background'
                    src='./img/blog/header_text_1.png'
                    className='text_img'
                  ></img>
                </span>
              </div>
            </div>
            <div
              id='header_sub_text'
              className='d-flex align-items-center'
            >
              <div className='d-flex align-items-center'>
                <img
                  alt='background'
                  src='./img/blog/header_text_2.png'
                  className='text_img'
                ></img>
                <span style={{ paddingLeft: 20 }}> funny stories.</span>
              </div>
              <div id='description'>
                There is always something interesting
                <br /> happening while traveling. And I think
                <br /> it's impossible not to tell.
              </div>
            </div>
          </div>

          <div>
            <img
              alt='background'
              src='./img/blog/header_back.png'
              className='border-bottom'
            ></img>
          </div>
        </div>
        <BlogSlide
          position='right'
          text="Sometimes it's important to just relax not to think about what others think and do what you want."
          img='india_main'
        >
          <div style={styles.text_big}>
            <span>
              Unforgettable{' '}
              <img
                alt='background'
                src='./img/blog/india_small_1.png'
                className='text_img'
              ></img>{' '}
              <br />
              adventure
              <br />
              <img
                alt='background'
                src='./img/blog/india_small_2.png'
                className='text_img'
              ></img>{' '}
              in India{' '}
            </span>
          </div>
        </BlogSlide>
        <BlogSlide
          position='left'
          text='Animals love to have fun too. Let me prove it to you.'
          img='penguin_main'
        >
          <div style={styles.text_big}>
            <span>
            How I became {' '}
              <img
                alt='background'
                src='./img/blog/penguin_small_1.png'
                className='text_img'
              ></img>{' '}
              <br />
              friends with one 
              <br />
              <img
                alt='background'
                src='./img/blog/penguin_small_2.png'
                className='text_img'
              ></img>{' '}
               penguin{' '}
            </span>
          </div>


        </BlogSlide>
        <BlogSlide
          position='right'
          text='Laughter will always help to get out of any situation. A sense of humor is definitely the most important thing in our life.'
          img='life_main'
        >
         <div style={styles.text_big}>
            <span>
            A happy life  {' '}
              <img
                alt='background'
                src='./img/blog/life_small_1.png'
                className='text_img'
              ></img>{' '}
              <br />
              cannot be without
              <br />
              <img
                alt='background'
                src='./img/blog/life_small_2.png'
                className='text_img'
              ></img>{' '}
               laughter{' '}
            </span>
          </div>
        </BlogSlide>
        <BlogSlide
          position='left'
          text='You can’t even guess how one white lady took and changed my day 180 degrees.'
          img='moments_main'
        >

          <div style={styles.text_big}>
            <span>
            Unexpected  {' '}
              <img
                alt='background'
                src='./img/blog/moments_small_1.png'
                className='text_img'
              ></img>{' '}
              <br />
              moments bring  
              <br />
              <img
                alt='background'
                src='./img/blog/moments_small_2.png'
                className='text_img'
              ></img>{' '}
               lives{' '}
            </span>
          </div>
        </BlogSlide>
      </div>
      <Header position='left'></Header>
    </div>
  );
}
