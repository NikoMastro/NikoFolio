import Head from 'next/head';
import Layout from './components/Layout';
import ThreeCanvas from './components/ThreeCanvas';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Showcase of my work and skills." />
      </Head>
      {/* Main Content */}
      <section className="relative">
        <div className="absolute inset-0">
          {/* Canvas for 3D elements */}
          <ThreeCanvas />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4">A showcase of my work and skills.</p>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
