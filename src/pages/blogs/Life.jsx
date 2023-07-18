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

export default function Life() {
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
      await new Promise((r) => setTimeout(r, 10));
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
    background: `no-repeat center/100% url('../img/blog/life_main.png')`
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
                        A happy life {' '}
                        <img
                          alt='background'
                          src='../img/blog/life_small_1.png'
                          className='text_img'
                        ></img>{' '}
                        <br />
                        cannot be without
                        <br />
                        <img
                          alt='background'
                          src='../img/blog/life_small_2.png'
                          className='text_img'
                        ></img>{' '}
                        laughter{' '}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p style={styles.text_min}>Laughter will always help to get out of any situation. A sense of humor is definitely the most important thing in our life.</p>
                  </div>
                  <div>
                    <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Back</button>
                  </div>
                </article>
                <div
                  style={styles.bottom_img}
                  className='main_img border-top border-bottom'
                ></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>
              <div className="border-bottom" style={{
                display: "flex"
              }}>
                <div><img style={{ maxWidth: 82, height: "100%" }} src={`../img/blog/life/1_sm.png`} className='border-right'></img></div>
                <div><p style={{
                  maxWidth: 247,
                  marginTop: 35,
                  marginRight: 22,
                  marginLeft: 24,
                  fontSize: 18,
                  lineHeight: "25px"
                }}>
                  I lived in the tropical paradise of Bali for about 6 months. My charming personality and penchant for getting into funny situations brought laughter and joy wherever I went. I propose to join some of my stories in this place, and plunge into a noisy journey through the charming island of Bali.<br /><br />

                  At the beginning of my journey, I went to the stunning beaches of Bali. In Seminyak, I decided to try my hand at surfing, imagining how gracefully and deftly I glide through the waves. However, reality had a different plan for me. Every time I tried to stand on the surfboard, I fell into the water, my limbs entangled in a comical depiction of surf failure. Surrounded by patient instructors and merry spectators, I emerged from the waves with a bright smile that epitomized the spirit of perseverance and laughter that Bali is known for.

                </p></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>
              <div><img src={`../img/blog/life/3_sm.png`} className='border-bottom'></img></div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>

              <div className="border-bottom" style={{
                display: "flex",
                justifyContent: "space-between"
              }}>

                <div><p style={{
                  maxWidth: 252,
                  marginTop: 50,
                  marginRight: 36,
                  marginLeft: 24,
                  marginBottom: 100,
                  fontSize: 18,
                  lineHeight: "25px"
                }}>
                  The adventure continued in the bustling city of Ubud, known for its lush rice terraces and spiritual charm. In an effort to immerse myself in the local culture, I decided to take part in a master class in traditional Balinese dances. Unbeknownst to me, my enthusiasm for dancing far exceeded my actual skill level. <br /><br />

                  When I tried to imitate the instructor's graceful movements, my limbs shook in all directions, causing the other participants to burst out laughing. With a cheerful smile and unwavering determination, I turned my clumsy dance into a comedic spectacle, bringing joy and fun to everyone.


                </p></div>
                <div><img style={{ maxWidth: 63, height: "100%" }} src={`../img/blog/life/4_sm.png`} className='border-left'></img></div>
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
                  Thank you for joining me and my stories. I hope you've had fun as you embark on a noisy journey through this enchanting island. My comical encounters left an indelible mark on the hearts of both locals and fellow travelers.<br /><br />

                  Saying goodbye to Bali, I took with me not only the memories of the picturesque landscapes, but also the laughter and joy that I shared with the people I met along the way. I hope my carefree disposition and ability to find humor in any situation have left an indelible mark on the island, reminding both locals and travelers to embrace life's comedic moments and approach every adventure with a smile.
                  <div style={{ fontSize: 16, marginTop: 30 }}>20.05.2023</div>
                </p>
              </div>
              <div>
                <img src={`../img/blog/life/5_sm.png`} className='border-top border-bottom'></img>
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
                          A happy life {' '}
                          <img
                            alt='background'
                            src='../img/blog/life_small_1.png'
                            className='text_img'
                          ></img>{' '}
                          <br />
                          cannot be without
                          <br />
                          <img
                            alt='background'
                            src='../img/blog/life_small_2.png'
                            className='text_img'
                          ></img>{' '}
                          laughter{' '}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p style={styles.text_min}>Laughter will always help to get out of any situation. A sense of humor is definitely the most important thing in our life.</p>
                    </div>
                    <div>
                      <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Back</button>
                    </div>
                  </article>
                  <div
                    style={styles.bottom_img}
                    className='main_img border-top border-bottom'
                  ></div>
                </div>
                <div
                  className='border-bottom'
                  style={{ height: 100 }}
                ></div>
                <div className="border-bottom" style={{
                  display: "flex"
                }}>
                  <div><img style={{ maxWidth: 267, height: "100%" }} src={`../img/blog/life/1_mid.png`} className='border-right'></img></div>
                  <div><p style={{
                    maxWidth: 448,
                    marginTop: 50,
                    marginRight: 60,
                    marginLeft: 60,
                    lineHeight: "normal",
                    fontSize: 28
                  }}>
                    I lived in the tropical paradise of Bali for about 6 months. My charming personality and penchant for getting into funny situations brought laughter and joy wherever I went. I propose to join some of my stories in this place, and plunge into a noisy journey through the charming island of Bali.<br /><br />

                    At the beginning of my journey, I went to the stunning beaches of Bali. In Seminyak, I decided to try my hand at surfing, imagining how gracefully and deftly I glide through the waves. However, reality had a different plan for me. Every time I tried to stand on the surfboard, I fell into the water, my limbs entangled in a comical depiction of surf failure. Surrounded by patient instructors and merry spectators, I emerged from the waves with a bright smile that epitomized the spirit of perseverance and laughter that Bali is known for.

                  </p></div>
                </div>
                <div
                  className='border-bottom'
                  style={{ height: 100 }}
                ></div>
                <div><img src={`../img/blog/life/3_mid.png`} className='border-bottom'></img></div>
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
                    marginRight: 40,
                    marginLeft: 50,
                    marginBottom: 100,
                    fontSize: 28,
                    lineHeight: "normal"
                  }}>

                    The adventure continued in the bustling city of Ubud, known for its lush rice terraces and spiritual charm. In an effort to immerse myself in the local culture, I decided to take part in a master class in traditional Balinese dances. Unbeknownst to me, my enthusiasm for dancing far exceeded my actual skill level. <br /><br />

                    When I tried to imitate the instructor's graceful movements, my limbs shook in all directions, causing the other participants to burst out laughing. With a cheerful smile and unwavering determination, I turned my clumsy dance into a comedic spectacle, bringing joy and fun to everyone.


                  </p></div>
                  <div><img style={{ maxWidth: 267, height: "100%" }} src={`../img/blog/life/4_mid.png`} className='border-left'></img></div>
                </div>
                <div
                  className='border-bottom'
                  style={{ height: 100 }}
                ></div>
                <div style={{ marginBottom: 52 }}>
                  <p style={{
                    maxWidth: 700,
                    marginTop: 75,
                    marginRight: 69,
                    marginLeft: 65,
                    marginBottom: 30,
                    lineHeight: "normal",
                    fontSize: 28
                  }}>
                    Thank you for joining me and my stories. I hope you've had fun as you embark on a noisy journey through this enchanting island. My comical encounters left an indelible mark on the hearts of both locals and fellow travelers.<br /><br />

                    Saying goodbye to Bali, I took with me not only the memories of the picturesque landscapes, but also the laughter and joy that I shared with the people I met along the way. I hope my carefree disposition and ability to find humor in any situation have left an indelible mark on the island, reminding both locals and travelers to embrace life's comedic moments and approach every adventure with a smile.
                    <div style={{ fontSize: 20, marginTop: 30 }}>20.05.2023</div>
                  </p>
                </div>
                <div>
                  <img src={`../img/blog/life/5_mid.png`} className='border-top border-bottom'></img>
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
                        A happy life {' '}
                        <img
                          alt='background'
                          src='../img/blog/life_small_1.png'
                          className='text_img'
                        ></img>{' '}
                        <br />
                        cannot be without
                        <br />
                        <img
                          alt='background'
                          src='../img/blog/life_small_2.png'
                          className='text_img'
                        ></img>{' '}
                        laughter{' '}
                      </span>
                    </div>

                  </div>
                  <div>
                    <p style={styles.text_min}>Laughter will always help to get out of any situation. A sense of humor is definitely the most important thing in our life.</p>
                  </div>
                  <div>
                    <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Back</button>
                  </div>
                  {/* <button className='btn-primary'>Application</button> */}
                </article>
                <img
                  alt='background'
                  src={`../img/blog/life_main.png`}
                  className='border-left main_first_img'
                ></img>
              </div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ display: "flex", height: 848 }} className='border-bottom'>
                <div><img src={`../img/blog/life/1.png`} style={{ height: "100%" }} className='border-right'></img></div>
                <div style={{ maxWidth: 861 }}><p style={{
                  paddingRight: 90,
                  paddingLeft: 70,
                  paddingTop: 75,
                  lineHeight: "normal",
                  fontSize: 28

                }}>

                  I lived in the tropical paradise of Bali for about 6 months. My charming personality and penchant for getting into funny situations brought laughter and joy wherever I went. I propose to join some of my stories in this place, and plunge into a noisy journey through the charming island of Bali.<br /><br />

                  At the beginning of my journey, I went to the stunning beaches of Bali. In Seminyak, I decided to try my hand at surfing, imagining how gracefully and deftly I glide through the waves. However, reality had a different plan for me. Every time I tried to stand on the surfboard, I fell into the water, my limbs entangled in a comical depiction of surf failure. Surrounded by patient instructors and merry spectators, I emerged from the waves with a bright smile that epitomized the spirit of perseverance and laughter that Bali is known for.

                </p></div>
                <div><img src={`../img/blog/life/2.png`} style={{ height: "100%" }} className='border-left'></img></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ maxHeight: 803 }} ><img style={{ height: "100%" }} src={`../img/blog/life/3.png`} className='border-bottom'></img></div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ display: 'flex' }} className='border-bottom'>
                <div><p style={{
                  paddingRight: 100,
                  paddingLeft: 175,
                  paddingTop: 50,
                  // paddingBottom: 20,
                  width: 1170,
                  fontSize: 28,
                  lineHeight: "normal"
                }}>

                  The adventure continued in the bustling city of Ubud, known for its lush rice terraces and spiritual charm. In an effort to immerse myself in the local culture, I decided to take part in a master class in traditional Balinese dances. Unbeknownst to me, my enthusiasm for dancing far exceeded my actual skill level. <br /><br />

                  When I tried to imitate the instructor's graceful movements, my limbs shook in all directions, causing the other participants to burst out laughing. With a cheerful smile and unwavering determination, I turned my clumsy dance into a comedic spectacle, bringing joy and fun to everyone.


                </p></div>
                <div style={{ maxHeight: 572 }}><img style={{ height: "100%" }} src={`../img/blog/life/4.png`} className='border-left'></img></div>
              </div>
              <div style={{ display: 'flex' }} className='border-bottom'>
                <div><img style={{ height: "100%" }} src={`../img/blog/life/5.png`} className='border-right'></img></div>
                <div style={{ width: "100%" }}>
                  <div style={{ height: 100 }} className='border-bottom'></div>
                  <div>
                    <p style={{
                      paddingLeft: 132,
                      paddingTop: 100,
                      lineHeight: "normal",
                      width: 700,
                      fontSize: 28
                    }}>

                      Thank you for joining me and my stories. I hope you've had fun as you embark on a noisy journey through this enchanting island. My comical encounters left an indelible mark on the hearts of both locals and fellow travelers.<br /><br />

                      Saying goodbye to Bali, I took with me not only the memories of the picturesque landscapes, but also the laughter and joy that I shared with the people I met along the way. I hope my carefree disposition and ability to find humor in any situation have left an indelible mark on the island, reminding both locals and travelers to embrace life's comedic moments and approach every adventure with a smile.
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