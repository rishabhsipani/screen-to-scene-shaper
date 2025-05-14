
const PartnerLogos = () => {
  // This would normally be replaced with actual partner logos
  const partners = Array(12).fill(null).map((_, i) => ({
    id: i,
    name: `Partner ${i + 1}`,
  }));

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
      {partners.map((partner) => (
        <div 
          key={partner.id} 
          className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform hover:-translate-y-1"
        >
          <div className="text-white font-semibold text-xs">{partner.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PartnerLogos;
