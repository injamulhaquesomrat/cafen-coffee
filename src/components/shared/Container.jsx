import { cn } from "../../lib/utils";

const Container = ({ children, className }) => {
  return (
    <div className={cn(`container mx-auto px-4 lg:px-8`, className)}>
      {children}
    </div>
  );
};

export default Container;
