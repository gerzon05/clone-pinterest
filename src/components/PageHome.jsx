import { useAuth } from "../context/authContext";
import { Header2 } from "./Header2";
import { Pin } from "./Pin";



export const PageHome = () => {
  const { loading } = useAuth();

  if (loading) return <h2>loading</h2>;


  return (
    <>
      <Header2 />
      <div className="w-full mt-16 flex justify-center items-center">
        <div className="sm:columns-2 md:columns-3 lg:columns-5 xl:columns-6 2xl:columns-9 gap-8 p-4">
          <Pin />
        </div>
      </div>
    </>
  );
};
