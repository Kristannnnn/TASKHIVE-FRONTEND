import logo from "@/assets/logo.png";
import SecondaryTextLabel from "./SecondaryTextLabel";
interface HeaderProps {
  headerText: string;
}

const AppHeader: React.FC<HeaderProps> = ({ headerText }) => {
  return (
    <header>
      <div className="mt-10 w-screen flex items-center pl-5 gap-4 pb-3 border-b-4 ">
        <img src={logo} className="w-30" />
        <SecondaryTextLabel content={headerText} />
      </div>
    </header>
  );
};

export default AppHeader;
