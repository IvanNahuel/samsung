export const SDescription = ({
  title = "",
  storage = "",
  ram = "",
  mpx = "",
}) => {
  return (
    <div
      className="flex flex-col space-y-4 absolute bottom-[125px]"
      style={{ transition: "1s", animation: 'move-down 1s' }}
    >
      <div className="self-center">{title}</div>
      <div>{storage}</div>
      <div>{ram}</div>
      <div>{mpx}</div>
    </div>
  );
};
