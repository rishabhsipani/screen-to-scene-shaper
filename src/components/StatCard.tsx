
interface StatCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  bgColor: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

const StatCard = ({ title, value, icon, bgColor, textColor = "text-white", size = "md" }: StatCardProps) => {
  const sizeClasses = {
    sm: "col-span-1",
    md: "col-span-2",
    lg: "col-span-3",
  };
  
  return (
    <div className={`${sizeClasses[size]} ${bgColor} rounded-lg p-4 shadow-md flex flex-col gap-2 transition-transform hover:-translate-y-1 hover:shadow-lg`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-sm font-medium ${textColor === "text-white" ? "text-white/70" : "text-gray-700"}`}>{title}</h3>
        {icon && <div>{icon}</div>}
      </div>
      <div className={`text-2xl font-bold ${textColor}`}>{value}</div>
    </div>
  );
};

export default StatCard;
