import Header from '../components/Header';
import CollectionMain from '../components/CollectionMain';
import React, { useEffect, useState } from 'react';
import './Collection.css';
import { useMediaQuery } from 'react-responsive';
import { MutatingDots } from 'react-loader-spinner'

export default function Collection() {


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
      secondaryColor='black'
      radius='12.5'
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ position: "absolute", top: `${window.innerHeight / 3}px` }}
      wrapperClass=""
      visible={true} />)
  }
  return (
    <div
      className='collection'
      style={{ maxWidth: isMobile ? 600 : isTablet ? 934 : 1920, width: "100%" }}
    >
      <Header position='right'></Header>
      <div id='content'>
        <div>
          {!isTablet ?
            <div className='header_slide d-flex'>
              <div style={{ maxWidth: 575 }}>
                <img
                  style={{ height: '100%' }}
                  alt='background'
                  id="header_left_bg"
                  src='./img/collection/header_left.png'
                  className='border-right'
                ></img>
              </div>
              <div id="header_middle">
                <article>
                  <span>
                    Welcome{' '}
                    <img
                      alt='background'
                      src='./img/collection/header_text_1.png'
                      className='text_img'
                    ></img>
                  </span>
                  <br />
                  <span>to my  photo </span>
                  <br />
                  <span>
                    <img
                      alt='background'
                      src='./img/collection/header_text_2.png'
                      className='text_img'
                    ></img>{' '}
                    shop
                  </span>
                  <br />
                  <div>
                    <p>
                      You can choose here any photos you like and buy them to use in your projects.
                    </p>
                  </div>
                </article>
              </div>
              <div style={{ maxWidth: 441 }}>
                <img
                  style={{ height: '100%' }}
                  id="header_right_bg"
                  alt='background'
                  src='./img/collection/header_right.png'
                  className='border-left'
                ></img>
              </div>
            </div> : !isMobile ?
              <div className='header_slide d-flex' style={{ marginTop: 70 }}>
                <div>
                  <img
                    style={{ height: '100%' }}
                    alt='background'
                    id="header_left_bg"
                    src='./img/collection/header_left.png'
                    className='border-right'
                  ></img>
                </div>
                <div id="header_middle">
                  <article>
                    <span>
                      Welcome{' '}
                      <img
                        alt='background'
                        src='./img/collection/header_text_1.png'
                        className='text_img'
                      ></img>
                    </span>
                    <br />
                    <span>to my  photo </span>
                    <br />
                    <span>
                      <img
                        alt='background'
                        src='./img/collection/header_text_2.png'
                        className='text_img'
                      ></img>{' '}
                      shop
                    </span>
                    <br />
                    <div>
                      <p>
                        You can choose here any photos you like and buy them to use in your projects.
                      </p>
                    </div>
                  </article>
                </div>
              </div> :
              <div className='header_slide d-flex flex-direction-column' style={{ marginTop: 70 }}>
                <div id="header_small">
                  <article>
                    <span>
                      Welcome{' '}
                      <img
                        alt='background'
                        src='./img/collection/header_text_1.png'
                        className='text_img'
                      ></img>
                    </span>
                    <br />
                    <span>to my  photo </span>
                    <br />
                    <span>
                      <img
                        alt='background'
                        src='./img/collection/header_text_2.png'
                        className='text_img'
                      ></img>{' '}
                      shop
                    </span>

                    <div style={{marginTop: -10}}>
                      <p>
                        You can choose here any photos you like and buy them to use in your projects.
                      </p>
                    </div>
                  </article>
                </div>
                <div className='border-top' style={{
                  background: `no-repeat center/100% url('./img/collection/header_left.png')`,
                  height: 413,
                  marginTop: 40

                }}>
                </div>
              </div>
          }
        </div>
        <div className='second_slide slide border-top'>
          <div className='slide_header border-bottom'>Collection</div>
          <div>
            <CollectionMain />
          </div>
        </div>
      </div>

      <Header position='left'></Header>
    </div>
  );
}

const styles = {
  container: {},
};
