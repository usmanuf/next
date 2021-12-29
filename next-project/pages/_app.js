import '../styles/Custom.css';
import '../styles/Card.css';
import '../styles/Icon.css';
import '../styles/SocialIcon.css';
import '../styles/TextArrow.css';
import '../styles/ObjectInput.css';
import '../styles/singleBlogPage.css';
import { Layout } from '../components/Layout';
import Head from 'next/head';
function crazycarcorner({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Layout>
      <Component {...pageProps} />;
    </Layout>
    </>
  )
}

export default crazycarcorner;
