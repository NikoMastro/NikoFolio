import Layout from '../components/Layout';

export default function Projects() {
  return (
    <Layout>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Project 1</h2>
        <p className="mt-2">Description of project 1.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Project 2</h2>
        <p className="mt-2">Description of project 2.</p>
      </div>
    </div>
    </Layout>
  );
}
