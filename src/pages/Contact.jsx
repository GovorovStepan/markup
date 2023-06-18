import { Fragment } from 'react';
import Header from '../components/Header';

export default function Contact() {
  return (
    <Fragment>
      <Header></Header>
      <div style={styles.container}>Contact page</div>
    </Fragment>
  );
}

const styles = {
  container: {},
};
