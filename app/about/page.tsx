// pages/about.tsx
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          Hi, I'm Nikolas Contessotto, a passionate software engineer and technology enthusiast with a specialization in full-stack development and interactive 3D experiences.
          My primary tools include <strong>Three.js</strong>, <strong>Vue.js</strong>, and a range of modern web technologies that allow me to craft visually compelling, high-performance applications.
        </p>
        <p className="text-lg mb-4">
          Over the course of my career, I've contributed to projects spanning multiple industries, including cutting-edge 3D visualizations and scalable web platforms.
          My diverse background in both development and design helps me bridge the gap between technical excellence and intuitive user experiences. I thrive in fast-paced environments where innovation and problem-solving are key.
        </p>
        <p className="text-lg mb-4">
          I'm always looking to grow and collaborate, whether it's through open-source projects or by staying up-to-date with the latest trends in technology. When I'm not coding,
          I enjoy diving into creative projects, digital art, and exploring the limitless potential of emerging web technologies.
        </p>
        <p className="text-lg">
          Let's connect and build something incredible together.
        </p>
      </div>
    </Layout>
  );
}
