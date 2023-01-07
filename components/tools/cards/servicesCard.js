import Image from "next/image";
import style from "./cards.module.scss";

export const ServicesCard = ({ data }) => {
  return (
    <div className={style.servicesCard}>
      <div className="card">
        <div className="cardBg">
          <Image src={data.image} className="backImg" layout="fill" alt="alt" />
        </div>
        <div className="content">
          <Image src={data.icon} width="50px" height="50px" alt="alt" />
          <h3 className="title">{data.title}</h3>
          <p className="desc">{data.description}</p>
        </div>
      </div>
    </div>
  );
};
