'use client';

import Head from 'next/head';
import Layout from './components/Layout';
import ThreeCanvas from './components/ThreeCanvas';
// import Popup from './components/Popup';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Showcase of my work and skills." />
      </Head>
      <section className="relative flex flex-col min-h-screen">
        <div className="absolute inset-0">
          <ThreeCanvas />
        </div>
        <div className="flex flex-1 items-center justify-center">
          {/* Your main content */}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
