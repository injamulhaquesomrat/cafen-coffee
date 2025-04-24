import { cn } from "../../lib/utils";

const Container = ({ children }) => {
  return <div className={cn("container mx-auto px-4 lg:px-8")}>{children}</div>;
};

export default Container;
