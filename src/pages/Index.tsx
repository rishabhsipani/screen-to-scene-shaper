
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadershipCard from "@/components/LeadershipCard";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import PartnerLogos from "@/components/PartnerLogos";
import AchievementCard from "@/components/AchievementCard";
import Footer from "@/components/Footer";
import { Wifi, Signal, Phone, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Leadership Section */}
        <section id="leadership" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <LeadershipCard 
                name="Shri Sarvottam Mandela" 
                title="Minister of Digital Services"
                imageSrc="/placeholder.svg" 
              />
              <LeadershipCard 
                name="Dr. Rameshwar Prasad Kadam" 
                title="Secretary, Digital Services"
                imageSrc="/placeholder.svg" 
              />
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Unified Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard 
                title="Broadband Services" 
                description="High-speed internet connectivity for urban and rural regions of India."
                icon="/placeholder.svg"
                color="bg-blue-50" 
              />
              <ServiceCard 
                title="Digital Identity" 
                description="Secure digital identity solutions for citizens and businesses."
                icon="/placeholder.svg"
                color="bg-purple-50" 
              />
              <ServiceCard 
                title="Mobile Services" 
                description="Affordable and reliable mobile connectivity across the nation."
                icon="/placeholder.svg"
                color="bg-orange-50" 
              />
              <ServiceCard 
                title="Smart Infrastructure" 
                description="Connected solutions for smart cities and digital governance."
                icon="/placeholder.svg"
                color="bg-green-50" 
              />
            </div>
          </div>
        </section>
        
        {/* Dashboard Section */}
        <section id="dashboard" className="py-16 bg-stats-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">DoT Dashboard</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mb-8">
              <StatCard 
                title="Overall Score" 
                value="119.032 Crore" 
                bgColor="bg-purple-700" 
                size="lg"
              />
              <StatCard 
                title="Revenue Target" 
                value="84.9%" 
                bgColor="bg-amber-600" 
                size="sm"
              />
              <StatCard 
                title="BharatNet" 
                value="9715 Crore" 
                bgColor="bg-rose-600" 
                size="sm"
              />
              <StatCard 
                title="Network" 
                value="₹72.57" 
                bgColor="bg-gradient-to-r from-purple-600 to-pink-500" 
                icon={<Wifi className="h-5 w-5 text-white/70" />}
                size="sm"
              />
              <StatCard 
                title="Device Connection" 
                value="3,00,487" 
                bgColor="bg-gradient-to-r from-violet-600 to-indigo-600" 
                icon={<Signal className="h-5 w-5 text-white/70" />}
                size="sm"
              />
              <StatCard 
                title="5G Towers" 
                value="2,47,076" 
                bgColor="bg-amber-500" 
                size="sm"
              />
              <StatCard 
                title="4G Coverage" 
                value="5,142" 
                bgColor="bg-emerald-600" 
                size="sm"
              />
              <StatCard 
                title="Service Revenue" 
                value="8,780" 
                bgColor="bg-blue-600" 
                size="sm"
              />
              <StatCard 
                title="Mobile Users" 
                value="4,85,792" 
                bgColor="bg-violet-600" 
                icon={<Phone className="h-5 w-5 text-white/70" />}
                size="sm"
              />
            </div>
            <div className="text-center">
              <a href="#" className="inline-block py-2 px-6 bg-white text-digital-blue rounded-full font-medium hover:bg-gray-100">
                Explore Full Dashboard
              </a>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <section id="partners" className="py-16 bg-partner-bg relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Empowering India Through</h2>
            <h3 className="text-2xl font-semibold text-center text-blue-300 mb-12">Strategic Partnerships</h3>
            <PartnerLogos />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
        </section>
        
        {/* Achievements Section */}
        <section id="achievements" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AchievementCard 
                title="SMARTPHONES" 
                value="#1 EXPORT" 
                icon="/placeholder.svg"
                bgColor="bg-blue-100" 
              />
              <AchievementCard 
                title="SanChar Health App" 
                value="ONE STOP SOLUTION" 
                icon="/placeholder.svg"
                bgColor="bg-green-100" 
              />
              <AchievementCard 
                title="6.19 LAKH" 
                value="4G MOBILE COVERAGE" 
                icon="/placeholder.svg"
                bgColor="bg-orange-100" 
              />
            </div>
          </div>
        </section>
        
        {/* Stats Counter */}
        <section className="py-12 bg-digital-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">38,64,240+</h2>
            <p className="text-blue-200">Total Digital Service Users</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
