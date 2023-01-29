export const PageHeading_section = ({ data }) => {
  return (
    <div
      className="pageHeading  overlay"
      style={{ backgroundImage: `url(${data?.image})` }}
    >
      <div className="content container_">
        {/* {data?.title && <div className="subTitle">{data?.title}</div>} */}
        <h1 className="subTitle">{data?.description}</h1>
      </div>
    </div>
  );
};
