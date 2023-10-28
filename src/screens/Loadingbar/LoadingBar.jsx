import { useEffect, useState } from "react";

export const LoadingBar = ({ setLoading }) => {
  const [time, setTime] = useState(0);
  const [opactity, setOpacity] = useState(1);
  console.log("asd");

  useEffect(() => {
    setTimeout(() => {
      setTime(100);
    }, 100);
    setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 3000);
  }, []);

  return (
    <div
      className="back-container bg-black h-[100vh] w-full flex items-center justify-center"
      style={{
        opacity: `${opactity}`,
      }}
    >
      <div className="w-8/12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="loadingbar bg-green-600 h-2.5 rounded-full"
          style={{ width: `${time}%` }}
        ></div>
      </div>
    </div>
  );
};
