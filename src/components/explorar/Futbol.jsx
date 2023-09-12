import { Header2 } from "../Header2";
import { Pin2 } from "./Pin2";

export const Futbol = () => {
  return (
    <>
      <Header2 />
      <div className="w-full mt-16 flex justify-center items-center">
        <div className="container sm:columns-2 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8 gap-8 p-4">
          <Pin2 filter="futbol" />
        </div>
      </div>
    </>
  );
};
