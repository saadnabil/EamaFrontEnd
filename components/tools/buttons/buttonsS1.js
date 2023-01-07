import { Button } from "antd";
import s from "./buttons.module.scss";
export default function ButtonsS1({
  text,
  iconB,
  iconA,
  className,
  type,
  loading,
  disabled = false,
}) {
  return (
    <div className={"ButtonsS1 " + s.ButtonsS1}>
      <Button
        className={className}
        htmlType={type}
        loading={loading}
        disabled={disabled}
      >
        {iconB}
        {text}
        {iconA}
      </Button>
    </div>
  );
}
