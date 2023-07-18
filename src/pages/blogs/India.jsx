import { useMediaQuery } from 'react-responsive';
import Header from '../../components/Header';
import { MutatingDots } from 'react-loader-spinner'
import React, { useEffect, useState } from 'react';
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
  text_big: {
    fontFamily: 'Sorts Mill Goudy',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 76,
    lineHeight: '109px',
  },
};

export default function India() {

  const navigate = useNavigate();

  const moveTo = (value) => {
    navigate(`${value}`, { replace: true });
    window.scrollTo(0, 0);
  }



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

  styles.bottom_img = {
    background: `no-repeat center/100% url('../img/blog/india_main.png')`
  }

  if (isMobile) {
    styles.text_min = {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: '25px',
      maxWidth: 330,
      marginTop: 4,   marginBottom: 30
    }
    styles.slider_header = {
      height: 50,
    }
  }


  return (
    <div style={{ maxWidth: 1920, width: "100%" }}>
      <Header position='right'></Header>
      <div id="content" style={isTablet ? { marginTop: 70 } : {}}>

        {isMobile ?
          <div>
            <div className='blog slide d-flex flex-direction-column'>
              <div
                className='d-flex border-bottom slide_content'
                style={styles.wrapper}
              >
                <article>
                  <div>
                    <div style={{
                      fontSize: 40,
                      lineHeight: '55px',
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontFamily: 'Sorts Mill Goudy'

                    }}>
                      <span>
                        Unforgettable{' '}
                        <img
                          alt='background'
                          src='../img/blog/india_small_1.png'
                          className='text_img'
                        ></img>{' '}
                        <br />
                        adventure
                        <br />
                        <img
                          alt='background'
                          src='../img/blog/india_small_2.png'
                          className='text_img'
                        ></img>{' '}
                        in India{' '}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p style={styles.text_min}>Sometimes it's important to just relax not to think about what others think and do what you want.</p>
                  </div>
                  <div>
                    <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Back</button>
                  </div>
                </article>
                <div
                  style={styles.bottom_img}
                  className='main_img border-top'
                ></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>
              <div className="border-bottom" style={{
                display: "flex"
              }}>
                <div><img style={{ maxWidth: 82, height: "100%" }} src={`../img/blog/india/1_sm.png`} className='border-right'></img></div>
                <div><p style={{
                  marginTop: 50,
                  marginRight: 22,
                  marginLeft: 24,
                  fontSize: 18,
                  lineHeight: "25px"
                }}>Recently I came to India. Armed with an adventurous spirit and an infectious laughter, I embarked on a journey through India, turning every step into a hilarious escapade.<br /><br />

                  My adventure began in the chaotic bazaars of Jaipur, where I first decided to try my hand at bidding. With an air of confidence, I approached a vendor of colorful Rajasthani turbans. I had no idea that my attempts at bargaining would turn into a spectacle. While I was engaged in animated negotiations, my comical expressions and exaggerated gestures caused the seller and the audience to burst out laughing. Despite my best efforts, I left with a bundle of turbans, paying more than I intended, but with memories of laughter that money couldn't buy.</p></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>
              <div><img src={`../img/blog/india/3_sm.png`} className='border-top border-bottom'></img></div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>

              <div className="border-bottom" style={{
                display: "flex",
                justifyContent: "space-between"
              }}>

                <div><p style={{
                  marginTop: 50,
                  marginRight: 36,
                  marginLeft: 24,
                  marginBottom: 100,
                  fontSize: 18,
                  lineHeight: "25px"
                }}>Undeterred by his previous escapades, I ventured to the bustling streets of Mumbai, where I decided to embrace the city's vibrant dance culture. Donning colorful attire, I joined a group of enthusiastic street dancers, attempting to imitate their energetic moves. <br /><br />

                  Unbeknownst to I, my lack of coordination and rhythm transformed me dance routine into a sideshow comedy act, leaving bystanders in stitches. With every misstep, my infectious laughter filled the air, turning my failed dance routine into a joyful spectacle that brought people from all corners of the city together.</p></div>
                <div><img style={{ maxWidth: 63, height: "100%" }} src={`../img/blog/india/4_sm.png`} className='border-left'></img></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>
              <div style={{ marginBottom: 20 }}>
                <p style={{
                  maxWidth: 700,
                  marginTop: 50,
                  marginRight: 13,
                  marginLeft: 20,
                  marginBottom: 30,
                  fontSize: 18,
                  lineHeight: "25px"
                }}>
                  It was all so funny. I like that not only I laughed, but also the people around me. We brought joy to this world, what could be better than this. I am grateful to every person I met, talked to, laughed with. It is an incredible gift to treat everything with love. The people are so kind, funny and welcoming. What could be better than talking to them. Find out how they live in this country, how they look at the world, whether they are happy with life. <br /><br />

                  Saying goodbye to India, I took with me not only memories of laughter, but also a newfound understanding of the beauty of imperfection. I hope to inspire you to embrace the unpredictable and find humor in every step of your travels around the world.
                  <div style={{ fontSize: 16, marginTop: 30 }}>20.05.2023</div>
                </p>
              </div>
              <div>
                <img src={`../img/blog/india/5_sm.png`} className='border-top border-bottom'></img>
              </div>
            </div>
          </div> :
          isTablet ?
            <div>
              <div className='blog slide d-flex flex-direction-column'>
                <div
                  className='d-flex border-bottom slide_content'
                  style={styles.wrapper}
                >
                  <article>
                    <div>
                      <div style={styles.text_big}>
                        <span>
                          Unforgettable{' '}
                          <img
                            alt='background'
                            src='../img/blog/india_small_1.png'
                            className='text_img'
                          ></img>{' '}
                          <br />
                          adventure
                          <br />
                          <img
                            alt='background'
                            src='../img/blog/india_small_2.png'
                            className='text_img'
                          ></img>{' '}
                          in India{' '}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p style={styles.text_min}>Sometimes it's important to just relax not to think about what others think and do what you want.</p>
                    </div>
                    <div>
                      <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Back</button>
                    </div>
                  </article>
                  <div
                    style={styles.bottom_img}
                    className='main_img border-top'
                  ></div>
                </div>
                <div
                  className='border-bottom'
                  style={{ height: 100 }}
                ></div>
                <div className="border-bottom" style={{
                  display: "flex"
                }}>
                  <div><img style={{ maxWidth: 267, height: "100%" }} src={`../img/blog/india/1_mid.png`} className='border-right'></img></div>
                  <div><p style={{
                    maxWidth: 448,
                    marginTop: 75,
                    lineHeight: "normal",
                    marginRight: 60,
                    marginLeft: 60,
                    fontSize: 28
                  }}>Recently I came to India. Armed with an adventurous spirit and an infectious laughter, I embarked on a journey through India, turning every step into a hilarious escapade.<br /><br />

                    My adventure began in the chaotic bazaars of Jaipur, where I first decided to try my hand at bidding. With an air of confidence, I approached a vendor of colorful Rajasthani turbans. I had no idea that my attempts at bargaining would turn into a spectacle. While I was engaged in animated negotiations, my comical expressions and exaggerated gestures caused the seller and the audience to burst out laughing. Despite my best efforts, I left with a bundle of turbans, paying more than I intended, but with memories of laughter that money couldn't buy.</p></div>
                </div>
                <div
                  className='border-bottom'
                  style={{ height: 100 }}
                ></div>
                <div><img src={`../img/blog/india/3_mid.png`} className='border-top border-bottom'></img></div>
                <div
                  className='border-bottom'
                  style={{ height: 100 }}
                ></div>

                <div className="border-bottom" style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}>

                  <div><p style={{
                    maxWidth: 397,
                    marginTop: 75,
                    lineHeight: "normal",
                    marginRight: 40,
                    marginLeft: 50,
                    marginBottom: 100,
                    fontSize: 28
                  }}>Undeterred by his previous escapades, I ventured to the bustling streets of Mumbai, where I decided to embrace the city's vibrant dance culture. Donning colorful attire, I joined a group of enthusiastic street dancers, attempting to imitate their energetic moves. <br /><br />

                    Unbeknownst to I, my lack of coordination and rhythm transformed me dance routine into a sideshow comedy act, leaving bystanders in stitches. With every misstep, my infectious laughter filled the air, turning my failed dance routine into a joyful spectacle that brought people from all corners of the city together.</p></div>
                  <div><img style={{ maxWidth: 267, height: "100%" }} src={`../img/blog/india/4_mid.png`} className='border-left'></img></div>
                </div>
                <div
                  className='border-bottom'
                  style={{ height: 100 }}
                ></div>
                <div style={{ marginBottom: 52 }}>
                  <p style={{
                    maxWidth: 700,
                    marginTop: 75,
                    lineHeight: "normal",
                    marginRight: 69,
                    marginLeft: 65,
                    marginBottom: 30,
                    fontSize: 28
                  }}>
                    It was all so funny. I like that not only I laughed, but also the people around me. We brought joy to this world, what could be better than this. I am grateful to every person I met, talked to, laughed with. It is an incredible gift to treat everything with love. The people are so kind, funny and welcoming. What could be better than talking to them. Find out how they live in this country, how they look at the world, whether they are happy with life. <br /><br />

                    Saying goodbye to India, I took with me not only memories of laughter, but also a newfound understanding of the beauty of imperfection. I hope to inspire you to embrace the unpredictable and find humor in every step of your travels around the world.
                    <div style={{ fontSize: 20, marginTop: 30 }}>20.05.2023</div>
                  </p>
                </div>
                <div>
                  <img src={`../img/blog/india/5_mid.png`} className='border-top border-bottom'></img>
                </div>
              </div>
            </div>
            :
            <div className='blog slide d-flex flex-direction-column'>
              <div
                className='d-flex border-bottom slide_content'
                style={{ flexDirection: 'row', justifyContent: "flex-end" }}
              >
                <article style={{
                  marginTop: 150,
                  marginRight: 160,
                  marginLeft: 175
                }}>
                  <div>

                    <div style={styles.text_big}>
                      <span>
                        Unforgettable{' '}
                        <img
                          alt='background'
                          src='../img/blog/india_small_1.png'
                          className='text_img'
                        ></img>{' '}
                        <br />
                        adventure
                        <br />
                        <img
                          alt='background'
                          src='../img/blog/india_small_2.png'
                          className='text_img'
                        ></img>{' '}
                        in India{' '}
                      </span>
                    </div>

                  </div>
                  <div>
                    <p style={styles.text_min}>Sometimes it's important to just relax not to think about what others think and do what you want.</p>
                  </div>
                  <div>
                    <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Back</button>
                  </div>
                  {/* <button className='btn-primary'>Application</button> */}
                </article>
                <img
                  alt='background'
                  src={`../img/blog/india_main.png`}
                  className='border-left main_first_img'
                ></img>
              </div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ display: "flex", height: 848 }} className='border-bottom'>
                <div><img src={`../img/blog/india/1.png`} style={{ height: "100%" }} className='border-right'></img></div>
                <div style={{ maxWidth: 861 }}><p style={{
                  paddingRight: 90,
                  paddingLeft: 70,
                  paddingTop: 100,
                  lineHeight: "normal",
                  fontSize: 28

                }}>
                  Recently I came to India. Armed with an adventurous spirit and an infectious laughter, I embarked on a journey through India, turning every step into a hilarious escapade.<br /><br />

                  My adventure began in the chaotic bazaars of Jaipur, where I first decided to try my hand at bidding. With an air of confidence, I approached a vendor of colorful Rajasthani turbans. I had no idea that my attempts at bargaining would turn into a spectacle. While I was engaged in animated negotiations, my comical expressions and exaggerated gestures caused the seller and the audience to burst out laughing. Despite my best efforts, I left with a bundle of turbans, paying more than I intended, but with memories of laughter that money couldn't buy.</p></div>
                <div><img src={`../img/blog/india/2.png`} style={{ height: "100%" }} className='border-left'></img></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ maxHeight: 803 }} ><img style={{ height: "100%" }} src={`../img/blog/india/3.png`} className='border-top border-bottom'></img></div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ display: 'flex' }} className='border-bottom'>
                <div><p style={{
                  paddingRight: 100,
                  paddingLeft: 175,
                  paddingTop: 75,
                  lineHeight: "normal",
                  paddingBottom: 128,
                  width: 1170,
                  fontSize: 28
                }}>Undeterred by his previous escapades, I ventured to the bustling streets of Mumbai, where I decided to embrace the city's vibrant dance culture. Donning colorful attire, I joined a group of enthusiastic street dancers, attempting to imitate their energetic moves. <br /><br />

                  Unbeknownst to I, my lack of coordination and rhythm transformed me dance routine into a sideshow comedy act, leaving bystanders in stitches. With every misstep, my infectious laughter filled the air, turning my failed dance routine into a joyful spectacle that brought people from all corners of the city together.</p></div>
                <div style={{ maxHeight: 572 }}><img style={{ height: "100%" }} src={`../img/blog/india/4.png`}></img></div>
              </div>
              <div style={{ display: 'flex' }} className='border-bottom'>
                <div><img style={{ height: "100%" }} src={`../img/blog/india/5.png`} className='border-right'></img></div>
                <div style={{ width: "100%" }}>
                  <div style={{ height: 100 }} className='border-bottom'></div>
                  <div>
                    <p style={{
                      paddingLeft: 132,
                      paddingTop: 75,
                      lineHeight: "normal",
                      paddingBottom: 128,
                      width: 700,
                      fontSize: 28
                    }}>
                      It was all so funny. I like that not only I laughed, but also the people around me. We brought joy to this world, what could be better than this. I am grateful to every person I met, talked to, laughed with. It is an incredible gift to treat everything with love. The people are so kind, funny and welcoming. What could be better than talking to them. Find out how they live in this country, how they look at the world, whether they are happy with life.<br /><br />

                      Saying goodbye to India, I took with me not only memories of laughter, but also a newfound understanding of the beauty of imperfection. I hope to inspire you to embrace the unpredictable and find humor in every step of your travels around the world.
                      <div style={{ fontSize: 20, marginTop: 30 }}>20.05.2023</div>
                    </p>
                    
                  </div>
                </div>

              </div>
            </div>
        }

      </div>
      <Header position='left'></Header>
    </div>

  )
}