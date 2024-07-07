// components/Home.js
const Home = () => {
  return (
    <div className="max-w-6xl mx-auto flex items-center py-5">
      <div className='items-center px-5'>
        <h1 className='text-4xl font-bold'>Lesson and insight</h1>
      
        <h2 className='text-3xl text-lime-600'>from 8 years</h2>
        <br />
        <p>Grow your business as photography site or social media</p>
        <br />
        <button className="bg-red-500 text-white py-1 px-1 rounded hover:bg-blue-700">Register</button>
      </div>
      <div className="flex-1">
        <img
          src="/photocpy.jpg"
          alt="bg image"
          className="rounded-3xl h-43 object-cover" // Adjusted height to h-64 (64px), object-cover for covering the container
        />
      </div>
    </div>
  );
};

export default Home;
