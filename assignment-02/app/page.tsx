import ImageCardsSection from './components/ImageCardsSection';
import ImageSlider from './components/imageslider'
export default function Home() {
  return (
    <main>
    <div className="p-8">
      <section className="py-12 bg-gray-100">
  <div className="max-w-3xl mx-auto text-center px-4">
    <h2 className="text-3xl font-bold mb-6">Unlock Your Potential: Learn AI Today!</h2>
    <p className="text-gray-700 mb-4">
      Artificial Intelligence is transforming industries and shaping the future. Whether youre a student, professional, or lifelong learner, mastering AI can open doors to exciting opportunities and empower you to create impactful solutions.
    </p>
    <ul className="list-disc list-inside text-left mb-6">
      <li><strong>Enhance Your Career:</strong> AI skills are highly sought after in todays job market.</li>
      <li><strong>Drive Innovation:</strong> Develop cutting-edge technologies that solve real-world problems.</li>
      <li><strong>Make a Difference:</strong> Use AI to contribute to advancements in healthcare, education, and more.</li>
      <li><strong>Boost Analytical Skills:</strong> Improve your problem-solving and critical thinking abilities.</li>
    </ul>
    <p className="text-gray-700 mb-6">
      With abundant resources and communities available, theres never been a better time to dive into AI. Embrace the future, expand your knowledge, and be a part of the technological revolution.
    </p>
    <a href="/." className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
      Start Learning AI
    </a>
  </div>
</section>
    </div>
    <ImageCardsSection/>
    <ImageSlider/>
    </main>
    );
}