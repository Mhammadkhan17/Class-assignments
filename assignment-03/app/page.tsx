import HeroSection from './components/HeroSection';
import PromoSection from './components/PromoSection';
import FeaturedNewCars from './components/FeaturedCars';


export default function Home() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 h-96 bg-cover bg-center" style={{ backgroundImage: "url('/image-1.jpg')" }}></div>
      <div className="absolute inset-0 h-96 backdrop-filter backdrop-blur-sm"></div>
      <div className="absolute inset-0 h-96 bg-black opacity-60"></div>
      <HeroSection />
      <PromoSection/>
      <FeaturedNewCars/>
    </div>
  );
}
