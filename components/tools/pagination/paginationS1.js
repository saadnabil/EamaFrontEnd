import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import style from "./style/paginationS1.module.scss";

export const PaginationS1 = ({ links, changePagination }) => {
  return (
    <div className={style.paginationS1}>
      <ul className="">
        {links?.map((p, i) => (
          <li
            key={i}
            className={p.active && "active"}
            onClick={() => changePagination(p.url)}
          >
            {p.label === "next" ? (
              <div className="icon">
                <BsChevronRight />
              </div>
            ) : p.label === "previous" ? (
              <div className="icon">
                <BsChevronLeft />
              </div>
            ) : (
              p.label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
