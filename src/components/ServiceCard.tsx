
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className={`h-40 ${color} p-4 flex items-center justify-center`}>
        <img src={icon} alt={title} className="h-24 w-24 object-contain" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
