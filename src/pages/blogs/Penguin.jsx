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

export default function Penguin() {
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
      color="#4fa94d"
      secondaryColor='#4fa94d'
      radius='12.5'
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ position: "absolute", top: `${window.innerHeight / 3}px` }}
      wrapperClass=""
      visible={true} />)
  }

  styles.bottom_img = {
    background: `no-repeat center/100% url('../img/blog/penguin_main.png')`
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
                        How I became{' '}
                        <img
                          alt='background'
                          src='../img/blog/penguin_small_1.png'
                          className='text_img'
                        ></img>{' '}
                        <br />
                        friends with one
                        <br />
                        <img
                          alt='background'
                          src='../img/blog/penguin_small_2.png'
                          className='text_img'
                        ></img>{' '}
                        penguin{' '}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p style={styles.text_min}>Animals love to have fun too. Let me prove it to you.</p>
                  </div>
                  <div>
                    <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Back</button>
                  </div>
                </article>
                <div
                  style={styles.bottom_img}
                  className='main_img  border-top'
                ></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>
              <div className="border-bottom" style={{
                display: "flex"
              }}>
                <div><img style={{ maxWidth: 82, height: "100%" }} src={`../img/blog/penguin/1_sm.png`} className='border-right'></img></div>
                <div><p style={{
                  maxWidth: 247,
                  marginTop: 50,
                  marginRight: 22,
                  marginLeft: 24,
                  fontSize: 18,
                  lineHeight: "25px"
                }}>

                  Once, in the vast and icy expanses of Argentina, I managed to get into a very comical situation. Who would have thought that animals are so trusting and not afraid of people. Probably my dream came true, which appeared from the moment I saw the cartoon about penguins. They are such wonderful creatures. I immediately wanted to see them live. Look at their habitat, but the way of existence. Observe how they behave in different conditions, how they show emotions.<br /><br />

                  Little did I know that my adventures would take an unexpected turn when I met a mischievous penguin named Pablo, who became my cheerful and unexpected travel companion.
                </p></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 50 }}
              ></div>
              <div><img src={`../img/blog/penguin/3_sm.png`} className='border-bottom'></img></div>
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


                  My journey began in the picturesque town of Ushuaia, known as "The End of the World". Eager to explore the stunning Tierra del Fuego National Park, I went camping, unaware that Pablo the penguin liked my colorful backpack. Moving along untouched paths, I could not help but notice the curious glances of my comrades on the campaign. <br /><br />

                  To my surprise, when I turned around, I found that Pablo was sitting on my backpack and looking mischievously. The sight of the penguin riding a human backpack sent everyone into fits of laughter, instantly turning Diego into a celebrity among his fellow travelers.


                </p></div>
                <div><img style={{ maxWidth: 63, height: "100%" }} src={`../img/blog/penguin/4_sm.png`} className='border-left'></img></div>
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
                  My wonderful story about traveling with a penguin not only brought joy and laughter to people, but also reminded us to embrace the unexpected, find humor in the quirks of life, and cherish the unforgettable friendships we forged in our travels around the world.<br /><br />

                  Let this story become a legend, passed down from generation to generation as a testament to the whims and laughter that accompany even the most incredible adventures.
                  <br />
                  <span style={{ fontSize: 16 }}>20.05.2023</span>
                </p>
              </div>
              <div>
                <img src={`../img/blog/penguin/5_sm.png`} className='border-top border-bottom'></img>
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
                          How I became{' '}
                          <img
                            alt='background'
                            src='../img/blog/penguin_small_1.png'
                            className='text_img'
                          ></img>{' '}
                          <br />
                          friends with one
                          <br />
                          <img
                            alt='background'
                            src='../img/blog/penguin_small_2.png'
                            className='text_img'
                          ></img>{' '}
                          penguin{' '}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p style={styles.text_min}>Animals love to have fun too. Let me prove it to you.</p>
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
                  <div><img style={{ maxWidth: 267, height: "100%" }} src={`../img/blog/penguin/1_mid.png`} className='border-right'></img></div>
                  <div><p style={{
                    maxWidth: 448,
                    marginTop: 75,
                    marginRight: 60,
                    marginLeft: 60,
                    lineHeight: "normal",
                    fontSize: 28
                  }}>

                    Once, in the vast and icy expanses of Argentina, I managed to get into a very comical situation. Who would have thought that animals are so trusting and not afraid of people. Probably my dream came true, which appeared from the moment I saw the cartoon about penguins. They are such wonderful creatures. I immediately wanted to see them live. Look at their habitat, but the way of existence. Observe how they behave in different conditions, how they show emotions.<br /><br />

                    Little did I know that my adventures would take an unexpected turn when I met a mischievous penguin named Pablo, who became my cheerful and unexpected travel companion.
                  </p></div>
                </div>
                <div
                  className='border-bottom'
                  style={{ height: 100 }}
                ></div>
                <div><img src={`../img/blog/penguin/3_mid.png`} className='border-bottom'></img></div>
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
                    lineHeight: "normal",
                    fontSize: 28
                  }}>
                    My journey began in the picturesque town of Ushuaia, known as "The End of the World". Eager to explore the stunning Tierra del Fuego National Park, I went camping, unaware that Pablo the penguin liked my colorful backpack. Moving along untouched paths, I could not help but notice the curious glances of my comrades on the campaign. <br /><br />

                    To my surprise, when I turned around, I found that Pablo was sitting on my backpack and looking mischievously. The sight of the penguin riding a human backpack sent everyone into fits of laughter, instantly turning Diego into a celebrity among his fellow travelers.


                  </p></div>
                  <div><img style={{ maxWidth: 267, height: "100%" }} src={`../img/blog/penguin/4_mid.png`} className='border-left'></img></div>
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
                    My wonderful story about traveling with a penguin not only brought joy and laughter to people, but also reminded us to embrace the unexpected, find humor in the quirks of life, and cherish the unforgettable friendships we forged in our travels around the world.<br /><br />

                    Let this story become a legend, passed down from generation to generation as a testament to the whims and laughter that accompany even the most incredible adventures.
                    <br />
                    <span style={{ fontSize: 18 }}>20.05.2023</span>
                  </p>
                </div>
                <div>
                  <img src={`../img/blog/penguin/5_mid.png`} className='border-top border-bottom'></img>
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
                        How I became{' '}
                        <img
                          alt='background'
                          src='../img/blog/penguin_small_1.png'
                          className='text_img'
                        ></img>{' '}
                        <br />
                        friends with one
                        <br />
                        <img
                          alt='background'
                          src='../img/blog/penguin_small_2.png'
                          className='text_img'
                        ></img>{' '}
                        penguin{' '}
                      </span>
                    </div>

                  </div>
                  <div>
                    <p style={styles.text_min}>Animals love to have fun too. Let me prove it to you.</p>
                  </div>
                  <div>
                    <button className='btn-primary' onClick={() => { moveTo('/blog') }}> Back</button>
                  </div>
                  {/* <button className='btn-primary'>Application</button> */}
                </article>
                <img
                  alt='background'
                  src={`../img/blog/penguin_main.png`}
                  className='border-left main_first_img'
                ></img>
              </div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ display: "flex", height: 848 }} className='border-bottom'>
                <div><img src={`../img/blog/penguin/1.png`} style={{ height: "100%" }} className='border-right'></img></div>
                <div style={{ maxWidth: 861 }}><p style={{
                  paddingRight: 90,
                  paddingLeft: 70,
                  paddingTop: 75,
                  lineHeight: "normal",
                  fontSize: 28

                }}>

                  Once, in the vast and icy expanses of Argentina, I managed to get into a very comical situation. Who would have thought that animals are so trusting and not afraid of people. Probably my dream came true, which appeared from the moment I saw the cartoon about penguins. They are such wonderful creatures. I immediately wanted to see them live. Look at their habitat, but the way of existence. Observe how they behave in different conditions, how they show emotions.<br /><br />

                  Little did I know that my adventures would take an unexpected turn when I met a mischievous penguin named Pablo, who became my cheerful and unexpected travel companion.
                </p></div>
                <div><img src={`../img/blog/penguin/2.png`} style={{ height: "100%" }} className='border-left'></img></div>
              </div>
              <div
                className='border-bottom'
                style={{ height: 100 }}
              ></div>
              <div style={{ maxHeight: 803 }} ><img style={{ height: "100%" }} src={`../img/blog/penguin/3.png`} className='border-top border-bottom'></img></div>
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
                }}>
                  My journey began in the picturesque town of Ushuaia, known as "The End of the World". Eager to explore the stunning Tierra del Fuego National Park, I went camping, unaware that Pablo the penguin liked my colorful backpack. Moving along untouched paths, I could not help but notice the curious glances of my comrades on the campaign. <br /><br />

                  To my surprise, when I turned around, I found that Pablo was sitting on my backpack and looking mischievously. The sight of the penguin riding a human backpack sent everyone into fits of laughter, instantly turning Diego into a celebrity among his fellow travelers.


                </p></div>
                <div style={{ maxHeight: 572 }}><img style={{ height: "100%" }} src={`../img/blog/penguin/4.png`} className='border-left'></img></div>
              </div>
              <div style={{ display: 'flex' }} className='border-bottom'>
                <div><img style={{ height: "100%" }} src={`../img/blog/penguin/5.png`} className='border-right'></img></div>
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
                      My wonderful story about traveling with a penguin not only brought joy and laughter to people, but also reminded us to embrace the unexpected, find humor in the quirks of life, and cherish the unforgettable friendships we forged in our travels around the world.<br /><br />

                      Let this story become a legend, passed down from generation to generation as a testament to the whims and laughter that accompany even the most incredible adventures.
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