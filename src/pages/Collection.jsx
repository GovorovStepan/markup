import Header from '../components/Header';
import './Collection.css';

export default function Collection() {
  return (
    <div
    className='collection'
    style={{ maxWidth: 1920 }}
  >
    <Header position='right'></Header>
    <div>
      <div className='header_slide border-top'>
       </div>
    </div>
    <Header position='left'></Header>
  </div>
  );
}

const styles = {
  container: {},
};
