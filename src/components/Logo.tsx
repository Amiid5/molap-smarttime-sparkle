import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="font-dancing text-3xl font-bold tracking-wide">
        <span className="text-primary transition-all duration-300 group-hover:scale-110 inline-block">
          M
        </span>
        <span className="text-foreground">olap SmartTime</span>
      </div>
    </Link>
  );
};

export default Logo;
