import Header from '../components/Header';
import React, { useEffect, useState } from 'react';
import BlogSlide from '../components/BlogSlide';
import './Blog.css';
import { useMediaQuery } from 'react-responsive';
import { MutatingDots } from 'react-loader-spinner'
const styles = {
  text_big: {
    fontFamily: 'Sorts Mill Goudy',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 76,
    lineHeight: '109px',
  },
  text_big_mobile: {
    fontFamily: 'Sorts Mill Goudy',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: "40px",
    lineHeight: '58px',

  }
};

export default function Blog() {
  const isTablet = useMediaQuery({ query: '(max-width: 934px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));
      console.log('dsss', loading)

      // Toggle loading state
      setLoading(!loading);
    };

    loadData();
  }, [])
  if (loading) {
    return (<MutatingDots
      height="100"
      width="100"
      color="black"
      secondaryColor="black"
      radius='12.5'
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ position: "absolute", top: `${window.innerHeight / 3}px` }}
      wrapperClass=""
      visible={true} />)
  }
  return (
    <div
      className='blog'
      style={{ maxWidth: 1920, width: '100%' }}
    >
      <Header position='right'></Header>
      <div>
      <div id="content">
        <div className='header_slide  slide_content'>
          {!isTablet ?
            <div>
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
            :
            <div style={{ marginTop: 70 }}>
              <div id='header_main_text'>
                <div style={{ textAlign: "center" }}>
                  <span>
                    Hi! This is {' '}
                    <img
                      alt='background'
                      src='./img/blog/header_text_1.png'
                      className='text_img'
                    ></img>
                  </span><br />
                  <span>my travel blog with</span><br />
                  <span> <img
                    alt='background'
                    src='./img/blog/header_text_2.png'
                    className='text_img'
                  ></img> funny stories.</span><br />
                </div>
                <div id='description'>
                  There is always something interesting
                  <br /> happening while traveling. And I think
                  <br /> it's impossible not to tell.
                </div>
              </div>

            </div>
          }
          <div>
            {isMobile ? <div
              style={{
                background: `no-repeat center/100% url('./img/blog/header_small.png')`,
                height: 413
              }}
              className='border-bottom border-top'
            ></div> :
              <img
                alt='background'
                src='./img/blog/header_back.png'
                className='border-bottom border-top'
              ></img>}
          </div>
        </div>
        <BlogSlide
          position='right'
          text="Sometimes it's important to just relax not to think about what others think and do what you want."
          img='india_main'
          slide="india"
        >
          <div style={isMobile ? styles.text_big_mobile : styles.text_big}>
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
          slide="penguin"
        >
          <div style={isMobile ? styles.text_big_mobile : styles.text_big}>
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
          slide="life"
        >
          <div style={isMobile ? styles.text_big_mobile : styles.text_big}>
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
          slide="moment"
        >

          <div style={isMobile ? styles.text_big_mobile : styles.text_big}>
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
      </div>
      <Header position='left'></Header>
    </div>
  );
}
