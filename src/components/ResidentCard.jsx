import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const ResidentCard = ({ url }) => {

  const [resident, getApiResident] = useFetch(url)

  useEffect(() => {
    getApiResident()
  }, [])

  
  return (
    <article className="w-full max-w-[350px] bg-card-color text-white rounded-t-[0.3em] rounded-b-[0.3em] overflow-hidden flex flex-col mt-12 mb-4">
      <header className="relative">
        <img className="w-full bg-cover" src={resident?.image} alt="" />
        <div className="absolute top-[8%] w-[40%] min-w-[120px] rounded-r-[0.55rem] bg-card-color pt-[0.3em] pb-[0.5em] flex items-center gap-[1.5em]">
          <span
            className={`w-[30px] -mr-3 ml-2 rounded-[50%] inline-block aspect-square ${
              resident?.status === "Alive"
                ? "bg-Alive"
                : resident?.status === "Dead"
                ? "bg-Dead"
                : resident?.status === "Unknown"
                ? "bg-Unknown"
                : "bg-Unknown"
            }`}
          ></span>
          <span className="mr-4 capitalize inline-block">
            {resident?.status}
          </span>
        </div>
      </header>
      <section className="flex flex-col p-2.5">
        <h3 className="text-span-text-color capitalize text-xl whitespace-nowrap text-center">
          {resident?.name}
        </h3>
        <hr className="border-1 border-hr-color mt-1.5 w-full" />
        <ul className="flex flex-col">
          <li className="flex flex-col mt-2">
            <span className="text-span-title-color text-sm uppercase">
              Species
            </span>
            <span className="text-span-text-color font-medium text-lg capitalize -mt-1.5 whitespace-nowrap">
              {resident?.species}
            </span>
          </li>
          <li className="flex flex-col mt-2">
            <span className="text-span-title-color text-sm uppercase">
              Origin
            </span>
            <span className="text-span-text-color font-medium text-lg capitalize -mt-1.5 whitespace-nowrap">
              {resident?.origin.name}
            </span>
          </li>
          <li className="flex flex-col mt-2">
            <span className="text-span-title-color text-sm uppercase">
              Eppisodes Where Appear
            </span>
            <span className="text-span-text-color font-medium text-lg capitalize -mt-1.5 whitespace-nowrap">
              {resident?.episode.length}
            </span>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default ResidentCard