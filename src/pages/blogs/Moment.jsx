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

export default function Moment() {
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
    background: `no-repeat center/100% url('../img/blog/moments_main.png')`
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
                        Unexpected{' '}
                        <img
                          alt='background'
                          src='../img/blog/moments_small_1.png'
                          className='text_img'
                        ></img>{' '}
                        <br />
                        moments bring
                        <br />
                        <img
                          alt='background'
                          src='../img/blog/moments_small_2.png'
                          className='text_img'
                        ></img>{' '}
                        lives{' '}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p style={styles.text_min}>You can’t even guess how one white lady took and changed my day 180 degrees.</p>
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
                <div><img style={{ maxWidth: 82, height: "100%" }} src={`../img/blog/moment/1_sm.png`} className='border-right'></img></div>
                <div><p style={{
                  maxWidth: 247,
                  marginTop: 50,
                  marginRight: 22,
                  marginLeft: 24,
                  fontSize: 18,
                  lineHeight: "25px"
                }}>
                  I came to Italy by accident. My comedic failures have turned my journey into a fun adventure. Let's dive into a bustling expedition through the historic cities and scenic landscapes of Italy, where laughter followed in my footsteps.<br /><br />

                  Heading towards the picturesque Amalfi Coast, I couldn't resist taking a leisurely boat ride along the stunning coastline. Imagine warmth, freshness from water, music from restaurants, laughter of passers-by, and you are in it all, you are part of this wonderful moment. I took ice cream to add the amazing taste of Italian ice cream to it all. And I thought that this day would pass as calmly as it had never happened before.

                </p></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>
              <div><img src={`../img/blog/moment/3_sm.png`} className='border-bottom'></img></div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>

              <div className="border-bottom" style={{
                display: "flex"
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
                  However, my journey took an unexpected turn when a mischievous seagull decided to join him. Aiming flawlessly, the seagull dived and snatched the ice cream from my hands, leaving me in a state of disbelief and laughter.<br /><br />

                  Can you imagine this? You are in complete serenity and suddenly something medium-sized flies at you and takes away your long-awaited delicacy. The sight of me participating in a tug-of-war with a seagull for a tasty treat brought smiles to the faces of locals and fellow travelers, creating quirky memories of Italy's coastal beauty.


                </p></div>
                <div><img style={{ maxWidth: 63, height: "100%" }} src={`../img/blog/moment/4_sm.png`} className='border-left'></img></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>
              <div style={{ marginBottom: 52 }}>
                <p style={{
                  maxWidth: 700,
                  marginTop: 50,
                  marginRight: 13,
                  marginLeft: 20,
                  marginBottom: 30,
                  fontSize: 18,
                  lineHeight: "25px"
                }}>
                  Saying goodbye to Italy, I took with me not only the memories of breathtaking landscapes and rich history, but also the laughter and joy that I shared with people from all walks of life. I hope my unintentional comedy adventures will remind everyone that laughter knows no language or boundaries.
                  <br />
                  <span style={{ fontSize: 16 }}>20.05.2023</span>
                </p>

              </div>
              <div>
                <img src={`../img/blog/moment/5_sm.png`} className='border-top border-bottom'></img>
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
                          Unexpected{' '}
                          <img
                            alt='background'
                            src='../img/blog/moments_small_1.png'
                            className='text_img'
                          ></img>{' '}
                          <br />
                          moments bring
                          <br />
                          <img
                            alt='background'
                            src='../img/blog/moments_small_2.png'
                            className='text_img'
                          ></img>{' '}
                          lives{' '}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p style={styles.text_min}>You can’t even guess how one white lady took and changed my day 180 degrees.</p>
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
                  <div><img style={{ maxWidth: 267, height: "100%" }} src={`../img/blog/moment/1_mid.png`} className='border-right'></img></div>
                  <div><p style={{
                    maxWidth: 448,
                    marginTop: 75,
                    marginRight: 60,
                    marginLeft: 60,
                    lineHeight: "normal",
                    fontSize: 28
                  }}>
                    I came to Italy by accident. My comedic failures have turned my journey into a fun adventure. Let's dive into a bustling expedition through the historic cities and scenic landscapes of Italy, where laughter followed in my footsteps.<br /><br />

                    Heading towards the picturesque Amalfi Coast, I couldn't resist taking a leisurely boat ride along the stunning coastline. Imagine warmth, freshness from water, music from restaurants, laughter of passers-by, and you are in it all, you are part of this wonderful moment. I took ice cream to add the amazing taste of Italian ice cream to it all. And I thought that this day would pass as calmly as it had never happened before.

                  </p></div>
                </div>
                <div
                  className='border-bottom'
                  style={{ height: 100 }}
                ></div>
                <div><img src={`../img/blog/moment/3_mid.png`} className='border-bottom'></img></div>
                <div
                  className='border-bottom'
                  style={{ height: 100 }}
                ></div>

                <div className="border-bottom" style={{
                  display: "flex"
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

                    However, my journey took an unexpected turn when a mischievous seagull decided to join him. Aiming flawlessly, the seagull dived and snatched the ice cream from my hands, leaving me in a state of disbelief and laughter.<br /><br />

                    Can you imagine this? You are in complete serenity and suddenly something medium-sized flies at you and takes away your long-awaited delicacy. The sight of me participating in a tug-of-war with a seagull for a tasty treat brought smiles to the faces of locals and fellow travelers, creating quirky memories of Italy's coastal beauty.



                  </p></div>
                  <div><img style={{ maxWidth: 267, height: "100%" }} src={`../img/blog/moment/4_mid.png`} className='border-righ'></img></div>
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
                    Saying goodbye to Italy, I took with me not only the memories of breathtaking landscapes and rich history, but also the laughter and joy that I shared with people from all walks of life. I hope my unintentional comedy adventures will remind everyone that laughter knows no language or boundaries.
                    
                    <br />
                    <span style={{ fontSize: 18 }}>20.05.2023</span>
                  </p>
                </div>
                <div>
                  <img src={`../img/blog/moment/5_mid.png`} className='border-top border-bottom'></img>
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
                        Unexpected{' '}
                        <img
                          alt='background'
                          src='../img/blog/moments_small_1.png'
                          className='text_img'
                        ></img>{' '}
                        <br />
                        moments bring
                        <br />
                        <img
                          alt='background'
                          src='../img/blog/moments_small_2.png'
                          className='text_img'
                        ></img>{' '}
                        lives{' '}
                      </span>
                    </div>

                  </div>
                  <div>
                    <p style={styles.text_min}>You can’t even guess how one white lady took and changed my day 180 degrees.</p>
                  </div>
                  <div>
                    <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Back</button>
                  </div>
                  {/* <button className='btn-primary'>Application</button> */}
                </article>
                <img
                  alt='background'
                  src={`../img/blog/moments_main.png`}
                  className='border-left main_first_img'
                ></img>
              </div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ display: "flex", height: 848 }} className='border-bottom'>
                <div><img src={`../img/blog/moment/1.png`} style={{ height: "100%" }} className='border-right'></img></div>
                <div style={{ maxWidth: 861 }}><p style={{
                  paddingRight: 90,
                  paddingLeft: 70,
                  paddingTop: 75,
                  lineHeight: "normal",
                  fontSize: 28

                }}>

                  I came to Italy by accident. My comedic failures have turned my journey into a fun adventure. Let's dive into a bustling expedition through the historic cities and scenic landscapes of Italy, where laughter followed in my footsteps.<br /><br />

                  Heading towards the picturesque Amalfi Coast, I couldn't resist taking a leisurely boat ride along the stunning coastline. Imagine warmth, freshness from water, music from restaurants, laughter of passers-by, and you are in it all, you are part of this wonderful moment. I took ice cream to add the amazing taste of Italian ice cream to it all. And I thought that this day would pass as calmly as it had never happened before.

                </p></div>
                <div><img src={`../img/blog/moment/2.png`} style={{ height: "100%" }} className='border-left'></img></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ maxHeight: 803 }} ><img style={{ height: "100%" }} src={`../img/blog/moment/3.png`} className='border-bottm'></img></div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ display: 'flex' }} className='border-bottom'>
                <div><p style={{
                  paddingRight: 100,
                  paddingLeft: 175,
                  paddingTop: 100,
                  width: 1170,
                  fontSize: 28,
                  lineHeight: "normal"
                }}>

                  However, my journey took an unexpected turn when a mischievous seagull decided to join him. Aiming flawlessly, the seagull dived and snatched the ice cream from my hands, leaving me in a state of disbelief and laughter.<br /><br />

                  Can you imagine this? You are in complete serenity and suddenly something medium-sized flies at you and takes away your long-awaited delicacy. The sight of me participating in a tug-of-war with a seagull for a tasty treat brought smiles to the faces of locals and fellow travelers, creating quirky memories of Italy's coastal beauty.



                </p></div>
                <div style={{ maxHeight: 572 }}><img style={{ height: "100%" }} src={`../img/blog/moment/4.png`} className='border-left'></img></div>
              </div>
              <div style={{ display: 'flex' }} className='border-bottom'>
                <div><img style={{ height: "100%" }} src={`../img/blog/moment/5.png`} className='border-right'></img></div>
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

                      Saying goodbye to Italy, I took with me not only the memories of breathtaking landscapes and rich history, but also the laughter and joy that I shared with people from all walks of life. I hope my unintentional comedy adventures will remind everyone that laughter knows no language or boundaries.
                      <br />
                      <span style={{ fontSize: 18 }}>20.05.2023</span>
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