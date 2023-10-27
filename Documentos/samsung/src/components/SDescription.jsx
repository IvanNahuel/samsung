export const SDescription = ({
  title = "",
  storage = "",
  ram = "",
  mpx = "",
}) => {
  return (
    <div
      className="flex flex-col space-y-4 absolute bottom-52"
      style={{ transition: "5s" }}
    >
      <div>{title}</div>
      <div>{storage}</div>
      <div>{ram}</div>
      <div>{mpx}</div>
    </div>
  );
};
