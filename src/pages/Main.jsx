import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import './Main.css';

export default function Main() {
  return (
    <div
      className='main'
      style={{ maxWidth: 1920 }}
    >
      <Header position='right'></Header>
      <div>
        <div className='first_slide slide border-top'>
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
                <span>wandering around</span>
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
            <button className='btn-primary'>Application</button>
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
                from my travels around
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
                >
                  <span>All</span>
                </div>
                <div
                  id='collection_view'
                  style={{ width: 500 }}
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
                >
                  <span>Animals</span>
                </div>
                <div
                  id='collection_texture'
                  className='border-top'
                  style={{ width: 700, height: 317 }}
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
                    <button className='btn-primary'> Show more</button>
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
            className='d-flex justify-content-space-around'
          >
            <BlogCard
              header='Name article'
              img='main_1.png'
              text='You can buy my photos and use them in your project. You can buy my photos and use them in your project'
            />
            <BlogCard
              img='main_2.png'
              header='Name article'
              text='You can buy my photos and use them in your project. You can buy my photos and use them in your project'
            />
            <BlogCard
              img='main_3.png'
              header='Name article'
              text='You can buy my photos and use them in your project. You can buy my photos and use them in your project'
            />
            <BlogCard
              img='main_4.png'
              header='Name article'
              text='You can buy my photos and use them in your project. You can buy my photos and use them in your project'
            />
          </div>
          <div className='text-align-center'>
            <button className='btn-primary'> Show more</button>
          </div>
        </div>
        <div className='tenth_slide border-top'>
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
      </div>
      <Header position='left'></Header>
    </div>
  );
}
