import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import './Main.css';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import { MutatingDots } from 'react-loader-spinner'
import { HashLink as Link } from 'react-router-hash-link';


export default function Main() {

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

  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const moveTo = (value) => {
    navigate(`${value}`, { replace: true });
    window.scrollTo(0, 0);
  }


  const changeFilter = (value) => {
    console.log(value)
    dispatch({
      type: 'SET_COLLECTION_FILTER',
      payload: value,
    });
    moveTo('/collection')
  }


  if (loading) {
    return (<MutatingDots 
      height="100"
      width="100"
      color="black"
      secondaryColor='black'
      radius='12.5'
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{position: "absolute", top: `${window.innerHeight/3}px`}}
      wrapperClass=""
      visible={true} />)
  }

  return (
    <div
      className='main'
      style={{ maxWidth: 1920 }}
    >
      <Header position='right'></Header>
      <div>
        {isMobile ? <div id="content">
          <div>
            <article className='main_first_text first_slide_text_sm'>
              <div>
                <p>
                  <span>
                    Photographer{' '}
                    <img
                      alt='background'
                      src='./img/main/main_first_slide_text_1.png'
                      className='text_img'
                    ></img>
                  </span>
                  <br />
                  <span>wandering around</span>
                  <br />
                  <span >
                    <img
                      alt='background'
                      src='./img/main/main_first_slide_text_2.png'
                      className='text_img'
                    ></img>{' '}
                    the world
                  </span>
                  <br />
                </p>
              </div>
              <div>
                <p style={{marginTop: -12,   marginBottom: 30}}>
                  I create photos that touch your soul,
                  <br /> looking at them you will not be able to
                  <br /> remain indifferent
                </p>
              </div>
              <button className='btn-primary'><Link to='/#collection' smooth = 'true' >Learn more</Link></button>
            </article>
            <img
              alt='background'
              src='./img/main/sm/1.png'
              className='border-top border-bottom'
            ></img>
          </div>
          <div>
            <div className='slide_header_sm border-bottom'>About me</div>
            <article style={{
              maxWidth: 620, fontFamily: "Open Sans", fontSize: "18px",
              fontStyle: "normal", lineHeight: "normal",
              fontWeight: 400,
              paddingLeft: 30,
              paddingTop: 12,
              marginBottom: 50
            }}>
              <p>
                I am a photographer and  traveler who is passionate

                about capturing the beauty of  the world through my
                camera
                lens. Whether it's the vibrant
                colors of a bustling city or the
                serene landscapes of nature, I strive to capture the
                essence
                of each place I visit.
                <br /><br />
                I have compiled a collection of
                my favorite photographs from
                my travels, which can be found
                on this site.
              </p>
            </article>
            <div style={{ maxHeight: 437 }}>
              <img
                alt='background'
                src='./img/main/sm/2.png'
                className='border-bottom border-top'
              ></img>
            </div>
          </div>
          <div className='border-bottom'>
            <div className='slide_header_sm border-bottom'></div>
            <article style={{
              textAlign: "center", paddingLeft: 18,
              paddingRight: 18,
              marginBottom: 70
            }}>
              <p style={{ fontSize: 16, fontFamily: "Open Sans" }}>The world is so incredible and beautiful</p>
              <p className='article_font_sm'>
                <span>
                  I have captured{' '}
                  <img
                    alt='background'
                    src='./img/main/main_third_slide_img_1.png'
                    className='text_img'
                  ></img>
                </span>
                <br />
                <span>
                  a wide{' '}
                  <img
                    alt='background'
                    src='./img/main/main_third_slide_img_2.png'
                    className='text_img'
                  ></img>{' '}
                  range of{' '}
                </span>
                <br />
                <span>
                  {' '}
                  subjects and landscapes {' '} from my travels {' '}
                  <img
                    alt='background'
                    src='./img/main/main_third_slide_img_3.png'
                    className='text_img'
                  ></img>{' '}
                  around the world.
                </span>
                <br />
              </p>
              <p style={{ fontSize: 16, fontFamily: "Open Sans" }}>You can get in touch with him through my photos</p>
            </article>
          </div>
          <div className='border-bottom'>
            <div className='slide_header_sm border-bottom'></div>
            <div >
              <img
                alt='background'
                src='./img/main/sm/3.png'
                className='border-bottom'
              ></img>
              <article style={{
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 50,
                marginBottom: 70,
                maxWidth: 307,
                fontFamily: "Open Sans", fontSize: "18px",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400,
              }}>
                <p>
                  You're sure to find something that suits your style and taste.
                  <br /> <br />
                  To use a photograph, simply  browse through the
                  galleries on
                  this website and select the image
                  that catches your eye. Once
                  you've made your selection, you can safely
                  download everything
                  securely through our website.
                </p>
              </article>
            </div>
          </div>
          <div id="collection">
            <div className='slide_header_sm border-bottom'> Collection </div>
            <div style={{
              marginLeft: 20, marginRight: 12, marginTop: 15, marginBottom: 15, fontFamily: "Open Sans", fontSize: "16px",
              fontStyle: "normal", lineHeight: "normal",
              fontWeight: 400,
            }} > You can download my photos and use them in your project</div>
            <div>
              <div className="border-top" style={{ display: "flex", justifyContent: "center" }} onClick={() => changeFilter('all')}><span style={{
                padding: "40px 0", fontFamily: "Open Sans", fontSize: "24px",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400
              }}>All</span></div>
              <div className="border-top" style={{ display: "flex", justifyContent: "center" }} onClick={() => changeFilter('landscapes')}><span style={{
                padding: "40px 0", fontFamily: "Open Sans", fontSize: "24px",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400
              }}>Landscapes</span></div>
              <div className="border-top" style={{ display: "flex", justifyContent: "center" }} onClick={() => changeFilter('animal')}><span style={{
                padding: "40px 0", fontFamily: "Open Sans", fontSize: "24px",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400
              }}>Animals</span></div>
              <div className="border-top border-bottom" style={{ display: "flex", justifyContent: "center" }} onClick={() => changeFilter('texture')}><span style={{
                padding: "40px 0", fontFamily: "Open Sans", fontSize: "24px",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400
              }}>Texture</span></div>
            </div>
          </div>
          <div>
            <div className='slide_header_sm border-bottom'> </div>
            <div >
              <img
                alt='background'
                src='./img/main/sm/4.png'
                className='border-bottom'
              ></img>
            </div>
          </div>
          <div className='border-bottom'>
            <div className='slide_header_sm border-bottom'> </div>
            <div>
              <article id='seventh_article_1_sm' style={{
                paddingRight: 15,
                paddingLeft: 15
              }}>
                <p className='article_font_medium_sm text-align-center '>
                  You may be inspired to travel
                </p>
                <p className='article_font_big_sm text-align-center'>
                  I hope that my photographs bring you as much joy and
                  inspiration as they have brought to me through my
                  travels
                </p>
              </article>
            </div>
            <div>
              <img
                alt='background'
                src='./img/main/sm/5.png'
                style={{ height: '100%' }}
                className='border-top border-bottom'
              ></img>
            </div>
            <div>
              <article id='seventh_article_2_sm' style={{
                paddingRight: 15,
                paddingLeft: 15
              }}>
                <p className='article_font_big_sm text-align-center'>
                  When I work, I use professional
                  photography equipment.
                </p>
                <p className='article_font_medium_sm text-align-center'>
                  I want to give you as many sensations as possible
                </p>
              </article>
            </div>
          </div>
          {/* <div>
            <div className='slide_header_sm border-bottom'>Travel map</div>
            <div className='d-flex'>
              <div className='d-flex align-items-center flex-direction-column' style={{ padding: "20px 20px" }}>
                <img
                  alt='background'
                  id='map'
                  style={{ padding: 0, paddingTop: 20, paddingBottom: 40 }}
                  src='./img/main/sm/map.svg'
                ></img>
                <div>
                  <button className='btn-primary' onClick={() => { moveTo('/collection') }}> See photo</button>
                </div>
              </div>

            </div>
            <div
            >
              <img
                alt='background'
                src='./img/main/sm/6.png'
                className='border-bottom border-top'
                style={{ height: '100%' }}
              ></img>
            </div>
          </div> */}
          <div className='border-bottom'>
            <div className='slide_header_sm border-bottom' style={{ paddingLeft: '5%' }}>Blog</div>
            <div
              id='main-blog-line'
              style={{
                flexWrap: "wrap", paddingRight: 20,
                paddingLeft: 20,
                gap: 20
              }}
              className='d-flex justify-content-space-around'
            >
              <BlogCard
                header='Adventure in India'
                img='main_1.png'
                text="Sometimes it's important to just relax not to think about what others think and do what you want."
              />
              <BlogCard
                img='main_2.png'
                header='Friend penguin'
                text='Animals love to have fun too. Let me prove it to you.'
              />
              <BlogCard
                img='main_3.png'
                header='Happiest is laughter'
                text='Laughter will always help to get out of any situation. A sense of humor is definitely the most important thing in our life.'
              />
              <BlogCard
                img='main_4.png'
                header='Unexpected moments'
                text='You can’t even guess how one white lady took and changed my day 180 degrees.'
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Show more</button>
            </div>

          </div>
          <div id="contacts">
            <div className='slide_header_sm border-bottom' >Contacts</div>
            <div style={{
              display: "flex", flexDirection: "column", margin: "50px 30px", fontFamily: "Open Sans",
              fontStyle: "normal", lineHeight: "normal",
              fontWeight: 400,
            }}>
              <div style={{

              }}>
                <p style={{ margin: 0, marginBottom: 24}}>
                  <div style={{ fontSize: "12px", marginBottom: 10 }}>email</div>
                  <div style={{ fontSize: "24px" }}>
                    <a href='mailto:photobuy@gmail.com'>photobuy@gmail.com</a>
                  </div>
                </p>
                <p>
                  <div style={{ fontSize: "12px", marginBottom: 10 }}>telegram</div>
                  <div style={{ fontSize: "24px" }}>
                    <a href='https://www.telegram.com'>ann_korn</a>
                  </div>
                </p>
              </div>


              <p style={{
                marginTop: 24, fontSize: "16px", fontFamily: "Open Sans",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400,
              }}>
                If you have any questions, please don't hesitate to contact
                me. I'm always happy to help and want to ensure that you
                are completely satisfied. I will also be glad to
                communicate  with everyone who is interested in traveling.
              </p>
            </div>
          </div>
          <div >
            <img
              alt='background '
              src='./img/main/sm/7.png'
              className='border-top border-bottom'
            ></img>
          </div>
        </div> : isTablet ?
          <div id="content">
            <div>
              <article className='main_first_text first_slide_text_mid'>
                <div>
                  <p>
                    <span>
                      Photographer{' '}
                      <img
                        alt='background'
                        src='./img/main/main_first_slide_text_1.png'
                        className='text_img'
                      ></img>
                    </span>
                    <br />
                    <span>wandering around </span> {' '}
                    <br />
                    <span>
                      <img
                        alt='background'
                        src='./img/main/main_first_slide_text_2.png'
                        className='text_img'
                      ></img>{' '}
                      the world
                    </span>
                    <br />
                  </p>
                </div>
                <div>
                  <p>
                    I create photos that touch your soul,
                    <br /> looking at them you will not be able to
                    <br /> remain indifferent
                  </p>
                </div>
                <button className='btn-primary'><Link to='/#collection' smooth = 'true' >Learn more</Link></button>
              </article>
              <img
                alt='background'
                src='./img/main/mid/1.png'
              ></img>
            </div>
            <div>
              <div className='slide_header_mid border-bottom'>About me</div>
              <article style={{
                maxWidth: 620, fontFamily: "Open Sans", fontSize: "30px",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400,
                paddingLeft: 100,
                paddingTop: 75,
                marginBottom: 75
              }}>
                <p>
                  I am a photographer and  traveler who is passionate

                  about capturing the beauty of  the world through my
                  camera
                  lens. Whether it's the vibrant
                  colors of a bustling city or the
                  serene landscapes of nature, I strive to capture the
                  essence
                  of each place I visit.
                  <br /><br />
                  I have compiled a collection of
                  my favorite photographs from
                  my travels, which can be found
                  on this site.
                </p>
              </article>
              <div style={{ maxHeight: 1010 }}>
                <img
                  alt='background'
                  src='./img/main/mid/2.png'
                  className='border-bottom'
                ></img>
              </div>
            </div>
            <div className='border-bottom'>
              <div className='slide_header_mid border-bottom'></div>
              <article style={{
                textAlign: "center", paddingLeft: 30,
                paddingRight: 30,
                marginBottom: 150
              }}>
                <p style={{ fontSize: 26, fontFamily: "Open Sans" }}>The world is so incredible and beautiful</p>
                <p className='article_font_big'>
                  <span>
                    I have captured{' '}
                    <img
                      alt='background'
                      src='./img/main/main_third_slide_img_1.png'
                      className='text_img'
                    ></img>
                  </span>
                  <br />
                  <span>
                    a wide{' '}
                    <img
                      alt='background'
                      src='./img/main/main_third_slide_img_2.png'
                      className='text_img'
                    ></img>{' '}
                    range of{' '}
                  </span>
                  <br />
                  <span>
                    {' '}
                    subjects and landscapes {' '} from my travels {' '}
                    <img
                      alt='background'
                      src='./img/main/main_third_slide_img_3.png'
                      className='text_img'
                    ></img>{' '}
                    around the world.
                  </span>
                  <br />
                </p>
                <p style={{ fontSize: 26, fontFamily: "Open Sans" }}>You can get in touch with him through my photos</p>
              </article>
            </div>
            <div className='border-bottom'>
              <div className='slide_header_mid border-bottom'></div>
              <div >
                <img
                  alt='background'
                  src='./img/main/mid/3.png'
                  className='border-bottom'
                ></img>
              </div>
              <article style={{
                paddingLeft: 80,
                paddingRight: 80,
                paddingTop: 75,
                marginBottom: 75,
                maxWidth: 635,
                fontFamily: "Open Sans", fontSize: "30px",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400,
              }}>
                <p>
                  You're sure to find something that suits your style and taste.
                  <br /> <br />
                  To use a photograph, simply  browse through the
                  galleries on
                  this website and select the image
                  that catches your eye. Once
                  you've made your selection, you can safely
                  download everything
                  securely through our website.
                </p>
              </article>
            </div>
            <div id="collection">
              <div className='slide_header_mid border-bottom'> Collection </div>
              <div style={{
                marginLeft: 25, marginRight: 25, marginTop: 30, marginBottom: 30, fontFamily: "Open Sans", fontSize: "26px",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400,
              }} > You can download my photos and use them in your project</div>
              <div>
                <div className="border-top" style={{ display: "flex", justifyContent: "center" }} onClick={() => changeFilter('all')}><span style={{
                  padding: "75px 0", fontFamily: "Open Sans", fontSize: "40px",
                  fontStyle: "normal", lineHeight: "normal",
                  fontWeight: 400
                }}>All</span></div>
                <div className="border-top" style={{ display: "flex", justifyContent: "center" }} onClick={() => changeFilter('landscapes')}><span style={{
                  padding: "75px 0", fontFamily: "Open Sans", fontSize: "40px",
                  fontStyle: "normal", lineHeight: "normal",
                  fontWeight: 400
                }}>Landscapes</span></div>
                <div className="border-top" style={{ display: "flex", justifyContent: "center" }} onClick={() => changeFilter('animal')}><span style={{
                  padding: "75px 0", fontFamily: "Open Sans", fontSize: "40px",
                  fontStyle: "normal", lineHeight: "normal",
                  fontWeight: 400
                }}>Animals</span></div>
                <div className="border-top border-bottom" style={{ display: "flex", justifyContent: "center" }} onClick={() => changeFilter('texture')}><span style={{
                  padding: "75px 0", fontFamily: "Open Sans", fontSize: "40px",
                  fontStyle: "normal", lineHeight: "normal",
                  fontWeight: 400
                }}>Texture</span></div>
              </div>
            </div>
            <div>
              <div className='slide_header_mid border-bottom'> </div>
              <div >
                <img
                  alt='background'
                  src='./img/main/mid/4.png'
                  className='border-bottom'
                ></img>
              </div>
            </div>
            <div className='border-bottom'>
              <div className='slide_header_mid border-bottom'> </div>
              <div>
                <article id='seventh_article_1_mid' style={{
                  paddingRight: 50,
                  paddingLeft: 50
                }}>
                  <p className='article_font_medium text-align-center '>
                    You may be inspired to travel
                  </p>
                  <p className='article_font_big text-align-center'>
                    I hope that my photographs bring you as much joy and
                    inspiration as they have brought to me through my
                    travels
                  </p>
                </article>
              </div>
              <div>
                <img
                  alt='background'
                  src='./img/main/mid/8.png'
                  style={{ height: '100%' }}
                ></img>
              </div>
              <div>
                <article id='seventh_article_2_mid' style={{
                  paddingRight: 50,
                  paddingLeft: 50
                }}>
                  <p className='article_font_big text-align-center'>
                    When I work, I use professional
                    photography equipment.
                  </p>
                  <p className='article_font_medium text-align-center'>
                    I want to give you as many sensations as possible
                  </p>
                </article>
              </div>
            </div>
            <div>
              <div className='slide_header_mid border-bottom'>Travel map</div>
              <div className=' border-bottom' style={{
                paddingLeft: 60,
                paddingRight: 60,
                paddingTop: 25,
                paddingBottom: 20,
                fontFamily: "Open Sans", fontSize: "26px",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400,
              }}>Click on the circle and see how many places I've been</div>
              <div className='d-flex'>
                <div className='d-flex align-items-center flex-direction-column' style={{ padding: "20px 20px" }}>
                  <img
                    alt='background'
                    id='map'
                    style={{ padding: 0, paddingTop: 20, paddingBottom: 40 }}
                    src='./img/main/mid/5.png'
                  ></img>
                  <div>
                    <button className='btn-primary' onClick={() => { moveTo('/collection') }}> See photo</button>
                  </div>
                </div>

              </div>
              <div
              >
                <img
                  alt='background'
                  src='./img/main/mid/6.png'
                  className='border-bottom'
                  style={{ height: '100%' }}
                ></img>
              </div>
            </div>
            <div className='border-bottom'>
              <div className='slide_header_mid border-bottom' style={{ textAlign: "center", paddingLeft: 0 }}>Blog</div>
              <div
                id='main-blog-line'
                style={{
                  flexWrap: "wrap", paddingRight: 20,
                  paddingLeft: 20,
                  gap: 20
                }}
                className='d-flex justify-content-space-around'
              >
                <BlogCard
                  header='Adventure in India'
                  img='main_1.png'
                  text="Sometimes it's important to just relax not to think about what others think and do what you want."
                />
                <BlogCard
                  img='main_2.png'
                  header='Friend penguin'
                  text='Animals love to have fun too. Let me prove it to you.'
                />
                <BlogCard
                  img='main_3.png'
                  header='Happiest is laughter'
                  text='Laughter will always help to get out of any situation. A sense of humor is definitely the most important thing in our life.'
                />
                <BlogCard
                  img='main_4.png'
                  header='Unexpected moments'
                  text='You can’t even guess how one white lady took and changed my day 180 degrees.'
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Show more</button>
              </div>
            </div>
            <div id="contacts">
              <div className='slide_header_mid border-bottom'  >Contacts</div>
              <div style={{
                display: "flex", flexDirection: "column", margin: "100px 75px", fontFamily: "Open Sans",
                fontStyle: "normal", lineHeight: "normal",
                fontWeight: 400,
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <p>
                    <span style={{ fontSize: "16px" }}>email</span>
                    <br />
                    <span style={{ fontSize: "36px" }}>
                      <a href='mailto:photobuy@gmail.com'>photobuy@gmail.com</a>
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "16px" }}>telegram</span>
                    <br />
                    <span style={{ fontSize: "36px" }}>
                      <a href='https://www.telegram.com'>ann_korn</a>
                    </span>
                  </p>
                </div>


                <p style={{
                  marginTop: 75, fontSize: "30px", fontFamily: "Open Sans",
                  fontStyle: "normal", lineHeight: "normal",
                  fontWeight: 400,
                }}>
                  If you have any questions, please don't hesitate to contact
                  me. I'm always happy to help and want to ensure that you
                  are completely satisfied. I will also be glad to
                  communicate  with everyone who is interested in traveling.
                </p>
              </div>
            </div>
            <div >
              <img
                alt='background '
                src='./img/main/mid/7.png'
              ></img>
            </div>
          </div> : <div>
            <div className='first_slide slide '>
              <img
                alt='background'
                src='./img/main/main_1.png'
                className='main_first_img'
              ></img>
              <article className='main_first_text first_slide_text'>
                <div>
                  <p>
                    <span>
                      Photographer{' '}
                      <img
                        alt='background'
                        src='./img/main/main_first_slide_text_1.png'
                        className='text_img'
                      ></img>
                    </span>
                    <br />
                    <span>wandering around</span> {' '}
                    <br />
                    <span style={{ lineHeight: "80px" }}>
                      <img
                        alt='background'
                        src='./img/main/main_first_slide_text_2.png'
                        className='text_img'
                      ></img>{' '}
                      the world
                    </span>
                    <br />
                  </p>
                </div>
                <div>
                  <p>
                    I create photos that touch your soul,
                    <br /> looking at them you will not be able to
                    <br /> remain indifferent
                  </p>
                </div>
                <button className='btn-primary'><Link to='/#collection' smooth = 'true' >Learn more</Link></button>
              </article>
            </div>
            <div className='second_slide slide border-top'>
              <div className='slide_header border-bottom'>About me</div>
              <div className='second_slide_content'>
                <div id='main_second_slide_left_block'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <article>
                      <p>
                        I am a photographer and <br /> traveler who is passionate{' '}
                        <br />
                        about capturing the beauty of <br /> the world through my
                        camera
                        <br /> lens. Whether it's the vibrant
                        <br /> colors of a bustling city or the <br />
                        serene landscapes of nature, I<br /> strive to capture the
                        essence
                        <br /> of each place I visit.
                        <br />
                        <br /> I have compiled a collection of
                        <br /> my favorite photographs from
                        <br /> my travels, which can be found <br />
                        on this site.
                      </p>
                    </article>
                    <div style={{ maxWidth: 612 }}>
                      <img
                        alt='background'
                        src='./img/main/main_second_slide_img_1.png'
                        className='main_second_slide_img border-left'
                      ></img>
                    </div>
                  </div>
                  <div
                    className='slide_header border-top'
                    style={{
                      marginTop: '-4px',
                    }}
                  ></div>
                </div>
                <div
                  className='border-left'
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    maxWidth: 633,
                  }}
                >
                  <div></div>
                  <img
                    alt='background'
                    src='./img/main/main_second_slide_img_2.png'
                    className='main_second_slide_img border-top border-right'
                  ></img>
                </div>
              </div>
            </div>
            <div className='third_slide slide border-top'>
              <article>
                <p>The world is so incredible and beautiful</p>
                <p className='article_font_big'>
                  <span>
                    I have captured{' '}
                    <img
                      alt='background'
                      src='./img/main/main_third_slide_img_1.png'
                      className='text_img'
                    ></img>{' '}
                    a wide
                  </span>
                  <br />
                  <span>
                    range of{' '}
                    <img
                      alt='background'
                      src='./img/main/main_third_slide_img_2.png'
                      className='text_img'
                    ></img>{' '}
                    subjects and landscapes{' '}
                  </span>
                  <br />
                  <span>
                    {' '}
                    from my travels around {' '}
                    <img
                      alt='background'
                      src='./img/main/main_third_slide_img_3.png'
                      className='text_img'
                    ></img>{' '}
                    the world.
                  </span>
                  <br />
                </p>
                <p>You can get in touch with him through my photos</p>
              </article>
            </div>
            <div className='forth_slide slide border-top'>
              <div
                style={{
                  maxWidth: 869,
                  borderRight: '2px solid black',
                }}
              >
                <img
                  alt='background'
                  src='./img/main/main_forth_slide_img_1.png'
                  style={{ height: '100%' }}
                ></img>
              </div>
              <div style={{ width: '100%' }}>
                <div className='slide_header'></div>
                <div id='main_forth_slide_content'>
                  <div style={{ width: '100%' }}>
                    <article>
                      <p>
                        You're sure to find something
                        <br /> that suits your style and taste.
                        <br />
                      </p>
                      <p>
                        To use a photograph, simply <br /> browse through the
                        galleries on
                        <br /> this website and select the image
                        <br /> that catches your eye. Once
                        <br /> you've made your selection, you <br /> can safely
                        download everything
                        <br /> securely through our website.
                      </p>
                    </article>
                  </div>
                  <div
                    className='border-left border-right'
                    style={{
                      maxWidth: 384,
                    }}
                  >
                    <img
                      alt='background'
                      src='./img/main/main_forth_slide_img_2.png'
                      style={{ height: '100%' }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div id="collection" className='fifth_slide slide border-top flex-direction-column'>
              <div
                className='slide_header border-bottom text-align-center'
                style={{ width: '100%' }}
              >
                Collection
              </div>
              <div className='d-flex'>
                <div className='d-flex flex-direction-column'>
                  <div
                    className='border-bottom'
                    id='collection_action_text'
                  >
                    You can buy my photos and use them in your project
                  </div>
                  <div
                    className='d-flex'
                    style={{ height: 805 }}
                  >
                    <div style={{ width: 175 }}></div>
                    <div
                      id='collection_all'
                      className='border-left border-right'
                      style={{ width: 370 }}
                      onClick={() => changeFilter('all')}
                    >
                      <span>All</span>
                    </div>
                    <div
                      id='collection_view'
                      style={{ width: 500 }}
                      onClick={() => changeFilter('landscapes')}
                    >
                      <span>Landscapes</span>
                    </div>
                  </div>
                </div>
                <div className='border-left d-flex'>
                  <div>
                    <div
                      id='collection_animal'
                      style={{ width: 700, height: 568 }}
                      onClick={() => changeFilter('animal')}
                    >
                      <span>Animals</span>
                    </div>
                    <div
                      id='collection_texture'
                      className='border-top'
                      style={{ width: 700, height: 317 }}
                      onClick={() => changeFilter('texture')}
                    >
                      {' '}
                      <span>Texture</span>
                    </div>
                  </div>
                  <div
                    style={{ width: 175 }}
                    className='border-left'
                  ></div>
                </div>
              </div>
            </div>
            <div className='sixth_slide slide border-top'>
              <div
                className='slide_header'
                style={{ width: '100%' }}
              ></div>
              <div className='border-top'>
                <img
                  alt='background'
                  src='./img/main/main_sixth_slide_img_1.png'
                  className='border-bottom'
                ></img>
              </div>
            </div>
            <div className='seventh_slide slide'>
              <div
                className='slide_header border-bottom'
                style={{ width: '100%' }}
              ></div>
              <div id='main_seventh_slide_content'>
                <div className='main_seventh_slide_line border-bottom'>
                  <div className='main_seventh_slide_block border-right'></div>
                  <div>
                    <article id='seventh_article_1'>
                      <p className='article_font_medium text-align-center '>
                        You may be inspired to travel
                      </p>
                      <p className='article_font_big text-align-center'>
                        I hope that my photographs bring you as much joy and <br />
                        inspiration as they have brought to me through my
                        <br /> travels
                      </p>
                    </article>
                  </div>
                  <div className='main_seventh_slide_block border-left'></div>
                </div>
                <div className='main_seventh_slide_line'>
                  <div className='main_seventh_slide_block border-right'></div>
                  <div>
                    <img
                      alt='background'
                      src='./img/main/main_seventh_slide_img_1.png'
                      style={{ height: '100%' }}
                    ></img>
                  </div>
                  <div className='main_seventh_slide_block border-left'></div>
                </div>
                <div className='main_seventh_slide_line border-top'>
                  <div className='main_seventh_slide_block border-right'></div>
                  <div>
                    <article id='seventh_article_2'>
                      <p className='article_font_big text-align-center'>
                        When I work, I use professional
                        <br /> photography equipment.
                      </p>
                      <p className='article_font_medium text-align-center'>
                        I want to give you as many sensations as possible
                      </p>
                    </article>
                  </div>
                  <div className='main_seventh_slide_block border-left'></div>
                </div>
              </div>
            </div>
            <div className='eight_slide slide border-top'>
              <div className='slide_header border-bottom'>Travel map</div>
              <div className='main_eight_slide_content d-flex'>
                <div
                  style={{ width: '15%' }}
                  className='border-right'
                >
                  {' '}
                  <img
                    alt='background'
                    src='./img/main/main_eight_slide_img_1.png'
                    style={{ height: '100%' }}
                  ></img>
                </div>
                <div>
                  <div
                    id='eight_slide_content_header'
                    className='d-flex align-items-center border-bottom'
                  >
                    <p>Click on the circle and see how many places I've been</p>
                  </div>
                  <div className='d-flex'>
                    <div className='d-flex align-items-center flex-direction-column'>
                      <img
                        alt='background'
                        id='map'
                        src='./img/main/main_eight_slide_img_2.svg'
                      ></img>
                      <div>
                        <button className='btn-primary' onClick={() => { moveTo('/collection') }}> See photo</button>
                      </div>
                    </div>
                    <div
                      style={{ width: '25%' }}
                      className='border-left'
                    >
                      {' '}
                      <img
                        alt='background'
                        src='./img/main/main_eight_slide_img_3.png'
                        style={{ height: '100%' }}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='nineth_slide slide d-flex border-top flex-direction-column'>
              <div className='slide_header text-align-center border-bottom'>
                Blog
              </div>
              <div
                id='main-blog-line'
                className='d-flex'
                style={{ gap: 30, justifyContent: "center" }}
              >
                <BlogCard
                  header='Adventure in India'
                  img='main_1.png'
                  text="Sometimes it's important to just relax not to think about what others think and do what you want."
                />
                <BlogCard
                  img='main_2.png'
                  header='Friend penguin'
                  text='Animals love to have fun too. Let me prove it to you.'
                />
                <BlogCard
                  img='main_3.png'
                  header='Happiest is laughter'
                  text='Laughter will always help to get out of any situation. A sense of humor is definitely the most important thing in our life.'
                />
                <BlogCard
                  img='main_4.png'
                  header='Unexpected moments'
                  text='You can’t even guess how one white lady took and changed my day 180 degrees.'
                />
              </div>
              <div className='text-align-center'>
                <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Show more</button>
              </div>
            </div>
            <div className='tenth_slide border-top' id="contacts">
              <div className='slide_header border-bottom'>Contacts</div>
              <div className='d-flex'>
                <div className='border-right'>
                  <p id='tenth_slide_text'>
                    If you have any questions, please don't hesitate to contact{' '}
                    <br /> me. I'm always happy to help and want to ensure that you{' '}
                    <br /> are completely satisfied. I will also be glad to
                    communicate <br /> with everyone who is interested in traveling.
                  </p>
                </div>
                <div id='tenth_slide_contacts_wrapper'>
                  <div>
                    <p>
                      <span>email</span>
                      <br />
                      <span>
                        <a href='mailto:photobuy@gmail.com'>photobuy@gmail.com</a>
                      </span>
                    </p>
                  </div>
                  <br />
                  <div>
                    <span>telegram</span>
                    <br />
                    <span>
                      <a href='https://www.telegram.com'>ann_korn</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='bottom_slide border-top'>
              <img
                alt='background '
                src='./img/main/main_bottom_slide.png'
              ></img>
            </div>
          </div>}
        <Header position='left'></Header>
      </div>

    </div>
  );
}
