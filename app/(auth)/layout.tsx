import { Logo } from "./_components/logo";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center flex-col justify-center space-y-4">
      <Logo />
      {children}
    </div>
  );
};

export default layout;
