import { Button } from "./Button";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <Button text="rules" />
      <Logo />
      <Button text="restart" />
    </div>
  );
};
