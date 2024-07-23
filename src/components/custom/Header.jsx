import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate();

  const onClickHandler = () => {
    navigation("/");
    window.location.reload();
  };
  return (
    <div className="p-3 flex justify-between items-center px-5 shadow-sm">
      <div
        onClick={onClickHandler}
        className="flex justify-center cursor-pointer"
      >
        <div>
          <img src="/Logo.svg" />
        </div>
        <div className="pr-4 text-2xl font-bold">Yatra Sathi</div>
      </div>
      <div>
        <Button>Sign in</Button>
      </div>
    </div>
  );
}

export default Header;
