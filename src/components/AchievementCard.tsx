
interface AchievementCardProps {
  title: string;
  value: string;
  icon: string;
  bgColor: string;
}

const AchievementCard = ({ title, value, icon, bgColor }: AchievementCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`${bgColor} p-4 flex items-center justify-between`}>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <img src={icon} alt={title} className="h-16 w-16 object-contain" />
      </div>
      <div className="p-4 flex justify-between">
        <a href="#" className="text-digital-blue text-sm hover:underline">View Details</a>
        <button className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">Share</button>
      </div>
    </div>
  );
};

export default AchievementCard;
