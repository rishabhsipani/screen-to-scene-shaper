
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-hero-pattern py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-7/12 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                INDIA LEADING THE WAY<br />
                <span className="text-yellow-400">IN AFFORDABLE INTERNET ACCESS</span>
              </h1>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block mb-6">
                <p className="text-white text-lg mb-1">Lowest Data Tariffs</p>
                <p className="text-yellow-300 font-medium text-xl">16 cents per GB in India</p>
                <p className="text-white text-sm">Among the lowest in the world.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-digital-blue hover:bg-gray-100">Explore Services</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-full md:w-5/12 flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Digital India" 
                  className="absolute inset-0 object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
