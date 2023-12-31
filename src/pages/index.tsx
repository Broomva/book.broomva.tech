import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import Particles from '../components/particles';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>

      
      <Particles className={styles.particles} quantity={1220}/>
      <div className="container">
      <div>
          <img 
            src="/img/logo.png"
            alt="Broomva"
            width="120"
            height="120"
          />
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Book
          </Link>
        </div>
        <div className={styles.buttons}>
          🪼
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg" 
            to="/blog">
            Blog
          </Link>
        </div> */}
        
      </div>
    </header>
    
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Broomva's Book, a continuous effort">
      <main>
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
