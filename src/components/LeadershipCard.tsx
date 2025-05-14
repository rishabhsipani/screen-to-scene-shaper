
import { Facebook, Twitter, Instagram } from "lucide-react";

interface LeadershipCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const LeadershipCard = ({ name, title, imageSrc }: LeadershipCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-gray-600 mb-4">{title}</p>
      <div className="flex justify-center gap-3 mt-auto">
        <a href="#" className="text-gray-500 hover:text-digital-blue">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-500 hover:text-digital-blue">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-500 hover:text-digital-blue">
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default LeadershipCard;
