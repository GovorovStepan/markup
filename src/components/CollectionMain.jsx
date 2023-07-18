import React, { useContext, Fragment } from 'react';
import CollectionItem from './CollectionItem';
import './CollectionMain.css';
import { useMediaQuery } from 'react-responsive';

import { AppContext } from '../context/AppContext';

export default function CollectionMain() {

  const { dispatch, collection_filter } = useContext(AppContext);

  const changeFilter = (value) => {
    dispatch({
      type: 'SET_COLLECTION_FILTER',
      payload: value,
    });
  }

  const isTablet = useMediaQuery({ query: '(max-width: 934px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  return (
    <div id={!isTablet ? "collection_wrapper" : !isMobile ? 'collection_wrapper_medium' : 'collection_wrapper_small'}>
      <div id="filter" className={!isTablet ? 'filter_big' : !isMobile ? 'filter_medium' : 'filter_small'} >
        <span style={{borderRight: 'none' }} onClick={() => changeFilter('all')}>All</span>
        <span onClick={() => changeFilter('landscapes')}>Landscapes</span>
        <span style={{borderRight: 'none', borderLeft: 'none' }} onClick={() => changeFilter('animal')}>Animals</span>
        <span onClick={() => changeFilter('texture')}>Texture</span>
      </div>
      <div className="collection_grid">

        {collection_filter === 'all' || collection_filter === 'landscapes' ? <div className='collection_grid landscapes'>
          {!isTablet ?
            <div className='d-flex gap-30'>
              <CollectionItem key={1} img='./img/collection/all/landscape_1.png' category="all" ></CollectionItem>
              <CollectionItem key={2} img='./img/collection/all/landscape_2.png' category="all" ></CollectionItem>
              <CollectionItem key={3} img='./img/collection/all/landscape_3.png' category="all" ></CollectionItem>
              <CollectionItem key={4} img='./img/collection/all/landscape_31.png' category="all" ></CollectionItem>
            </div> : !isMobile ? <div className='d-flex gap-30'>
              <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
                <CollectionItem key={1} img='./img/collection/all/landscape_1.png' category="all" ></CollectionItem>
                <CollectionItem key={2} img='./img/collection/all/landscape_2.png' category="all" ></CollectionItem>
              </div>
              <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
                <CollectionItem key={3} img='./img/collection/all/landscape_3.png' category="all" ></CollectionItem>
                <CollectionItem key={4} img='./img/collection/all/landscape_31.png' category="all" ></CollectionItem>
              </div>
            </div> : <Fragment>
              <CollectionItem key={1} img='./img/collection/all/landscape_1.png' category="all" ></CollectionItem>
              <CollectionItem key={2} img='./img/collection/all/landscape_2.png' category="all" ></CollectionItem>
              <CollectionItem key={3} img='./img/collection/all/landscape_3.png' category="all" ></CollectionItem>
              <CollectionItem key={4} img='./img/collection/all/landscape_31.png' category="all" ></CollectionItem></Fragment>
          }

          {!isMobile ?

            <CollectionItem key={5} img='./img/collection/all/landscape_5.png' category="all" size="big"></CollectionItem>
            : <CollectionItem key={5} img='./img/collection/all/landscape_5.png' category="all"></CollectionItem>
          }

          {!isMobile ?
            <div style={{ display: "flex", gap: 30 }}>
              <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
                <CollectionItem key={6} img='./img/collection/all/landscape_6_1.png' category="all" ></CollectionItem>
                <CollectionItem key={7} img='./img/collection/all/landscape_7.png' category="all" ></CollectionItem>
              </div>
              <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
                <CollectionItem key={8} img='./img/collection/all/landscape_8.png' category="all" ></CollectionItem>
                <CollectionItem key={9} img='./img/collection/all/landscape_9.png' category="all" ></CollectionItem>
              </div>
            </div>
            : <Fragment>
              <CollectionItem key={6} img='./img/collection/all/landscape_6_1.png' category="all" ></CollectionItem>
              <CollectionItem key={7} img='./img/collection/all/landscape_7.png' category="all" ></CollectionItem>
              <CollectionItem key={8} img='./img/collection/all/landscape_8.png' category="all" ></CollectionItem>
              <CollectionItem key={9} img='./img/collection/all/landscape_9.png' category="all" ></CollectionItem>
            </Fragment>
          }


        </div> : ""}

        {collection_filter === 'all' || collection_filter === 'animal' ? <div className='collection_grid' id="animal">

          {!isTablet ? <div className='d-flex gap-30'>
            <CollectionItem key={10} img='./img/collection/all/animal_1.png' category="all" ></CollectionItem>
            <CollectionItem key={11} img='./img/collection/all/animal_2.png' category="all" ></CollectionItem>
            <CollectionItem key={12} img='./img/collection/all/animal_3.png' category="all" ></CollectionItem>
            <CollectionItem key={13} img='./img/collection/all/animal_5.png' category="all" ></CollectionItem>
          </div> : !isMobile ? <div className='d-flex gap-30'>
            <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
              <CollectionItem key={10} img='./img/collection/all/animal_1.png' category="all" ></CollectionItem>
              <CollectionItem key={11} img='./img/collection/all/animal_2.png' category="all" ></CollectionItem>
            </div>
            <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
              <CollectionItem key={12} img='./img/collection/all/animal_3.png' category="all" ></CollectionItem>
              <CollectionItem key={13} img='./img/collection/all/animal_5.png' category="all" ></CollectionItem>
            </div>
          </div> : <Fragment>
            <CollectionItem key={10} img='./img/collection/all/animal_1.png' category="all" ></CollectionItem>
            <CollectionItem key={11} img='./img/collection/all/animal_2.png' category="all" ></CollectionItem>
            <CollectionItem key={12} img='./img/collection/all/animal_3.png' category="all" ></CollectionItem>
            <CollectionItem key={13} img='./img/collection/all/animal_5.png' category="all" ></CollectionItem>
          </Fragment>}
        </div>
          : ""}

        {collection_filter === 'all' || collection_filter === 'landscapes' ? <div className='collection_grid landscapes'>
          {!isMobile ?
            <div style={{ display: "flex", gap: 30 }}>
              <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
                <CollectionItem key={14} img='./img/collection/all/landscape_14.png' category="all" ></CollectionItem>
                <CollectionItem key={15} img='./img/collection/all/landscape_15.png' category="all" ></CollectionItem>
              </div>
              <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
                <CollectionItem key={16} img='./img/collection/all/landscape_16.png' category="all" ></CollectionItem>
                <CollectionItem key={17} img='./img/collection/all/landscape_17.png' category="all" ></CollectionItem>
              </div>
            </div>
            : <Fragment>
              <CollectionItem key={14} img='./img/collection/all/landscape_14.png' category="all" ></CollectionItem>
              <CollectionItem key={15} img='./img/collection/all/landscape_15.png' category="all" ></CollectionItem>
              <CollectionItem key={16} img='./img/collection/all/landscape_16.png' category="all" ></CollectionItem>
              <CollectionItem key={17} img='./img/collection/all/landscape_17.png' category="all" ></CollectionItem>
            </Fragment>
          }

          {!isMobile ?
            <CollectionItem key={18} img='./img/collection/all/landscape_18.png' category="all" size="big"></CollectionItem> : <CollectionItem key={5} img='./img/collection/all/landscape_18.png' category="all"></CollectionItem>
          }


          {!isTablet ? <div className='d-flex gap-30'>
            <CollectionItem key={19} img='./img/collection/all/landscape_19.png' category="all" ></CollectionItem>
            <CollectionItem key={20} img='./img/collection/all/landscape_20.png' category="all" ></CollectionItem>
            <CollectionItem key={21} img='./img/collection/all/landscape_21.png' category="all" ></CollectionItem>
            <CollectionItem key={22} img='./img/collection/all/landscape_22.png' category="all" ></CollectionItem>
          </div> : !isMobile ? <div className='d-flex gap-30'>
            <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
              <CollectionItem key={19} img='./img/collection/all/landscape_19.png' category="all" ></CollectionItem>
              <CollectionItem key={20} img='./img/collection/all/landscape_20.png' category="all" ></CollectionItem>
            </div>
            <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
              <CollectionItem key={21} img='./img/collection/all/landscape_21.png' category="all" ></CollectionItem>
              <CollectionItem key={22} img='./img/collection/all/landscape_22.png' category="all" ></CollectionItem>
            </div>
          </div> : <Fragment>
            <CollectionItem key={19} img='./img/collection/all/landscape_19.png' category="all" ></CollectionItem>
            <CollectionItem key={20} img='./img/collection/all/landscape_20.png' category="all" ></CollectionItem>
            <CollectionItem key={21} img='./img/collection/all/landscape_21.png' category="all" ></CollectionItem>
            <CollectionItem key={22} img='./img/collection/all/landscape_22.png' category="all" ></CollectionItem>
          </Fragment>}


          <CollectionItem key={23} img='./img/collection/all/landscape_6.png' category="all" size="wide" ></CollectionItem>

          {!isTablet ? <Fragment>
            <CollectionItem key={24} img='./img/collection/all/landscape_23.png' category="all" ></CollectionItem>
            <CollectionItem key={25} img='./img/collection/all/landscape_24.png' category="all" ></CollectionItem>
          </Fragment> : !isMobile ? <div className='d-flex gap-30'>
            <CollectionItem key={24} img='./img/collection/all/landscape_23.png' category="all" ></CollectionItem>
            <CollectionItem key={25} img='./img/collection/all/landscape_24.png' category="all" ></CollectionItem>
          </div> : <Fragment>
            <CollectionItem key={24} img='./img/collection/all/landscape_23.png' category="all" ></CollectionItem>
            <CollectionItem key={25} img='./img/collection/all/landscape_24.png' category="all" ></CollectionItem>
          </Fragment>}


        </div> : ""}


        {collection_filter === 'all' || collection_filter === 'texture' ? <div className='collection_grid ' id="texture">

          {!isTablet ? <div className='d-flex gap-30'>
            <CollectionItem key={26} img='./img/collection/all/texture_1.png' category="all" ></CollectionItem>
            <CollectionItem key={27} img='./img/collection/all/texture_2.png' category="all" ></CollectionItem>
            <CollectionItem key={28} img='./img/collection/all/texture_3.png' category="all" ></CollectionItem>
            <CollectionItem key={29} img='./img/collection/all/texture_4.png' category="all" ></CollectionItem>
          </div> : !isMobile ? <div className='d-flex gap-30'>
            <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
              <CollectionItem key={26} img='./img/collection/all/texture_1.png' category="all" ></CollectionItem>
              <CollectionItem key={27} img='./img/collection/all/texture_2.png' category="all" ></CollectionItem>
            </div>
            <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
              <CollectionItem key={28} img='./img/collection/all/texture_3.png' category="all" ></CollectionItem>
              <CollectionItem key={29} img='./img/collection/all/texture_4.png' category="all" ></CollectionItem>
            </div>
          </div> : <Fragment>
            <CollectionItem key={26} img='./img/collection/all/texture_1.png' category="all" ></CollectionItem>
            <CollectionItem key={27} img='./img/collection/all/texture_2.png' category="all" ></CollectionItem>
            <CollectionItem key={28} img='./img/collection/all/texture_3.png' category="all" ></CollectionItem>
            <CollectionItem key={29} img='./img/collection/all/texture_4.png' category="all" ></CollectionItem>
          </Fragment>}

        </div> : ""}

        {collection_filter === 'all' || collection_filter === 'landscapes' ? <div className='collection_grid landscapes'>

          {!isMobile ?
            <div style={{ display: "flex", gap: 30 }}>
              <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
                <CollectionItem key={30} img='./img/collection/all/landscape_30.png' category="all" ></CollectionItem>
                <CollectionItem key={31} img='./img/collection/all/landscape_31.png' category="all" ></CollectionItem>
              </div>
              <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
                <CollectionItem key={32} img='./img/collection/all/landscape_32.png' category="all" ></CollectionItem>
                <CollectionItem key={33} img='./img/collection/all/landscape_26.png' category="all" ></CollectionItem>
              </div>
            </div>
            : <Fragment>
              <CollectionItem key={30} img='./img/collection/all/landscape_30.png' category="all" ></CollectionItem>
              <CollectionItem key={31} img='./img/collection/all/landscape_31.png' category="all" ></CollectionItem>
              <CollectionItem key={32} img='./img/collection/all/landscape_32.png' category="all" ></CollectionItem>
              <CollectionItem key={33} img='./img/collection/all/landscape_26.png' category="all" ></CollectionItem>
            </Fragment>
          }


          {!isMobile ?
            <CollectionItem key={34} img='./img/collection/all/landscape_25.png' category="all" size='big' ></CollectionItem> : <CollectionItem key={5} img='./img/collection/all/landscape_25.png' category="all"></CollectionItem>
          }  </div> : ""}

      </div>
    </div>
  );
}
