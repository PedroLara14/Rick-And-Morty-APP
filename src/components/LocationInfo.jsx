const LocationInfo = ({ location }) => {
  return (
    <article className="bg-card-color max-w-3xl h-[12rem] p-10 mx-auto flex flex-col mt-20">
      <div className="flex items-center justify-center">
        <span className="flex items-center justify-center text-4xl -mt-3 capitalize whitespace-nowrap text-Alive">
          {location?.name}
        </span>
      </div>
      <div className="w-full flex items-center justify-center">
        <ul className="flex mt-8">
          <li className="flex flex-col">
            <span className="font-bold text-span-text-color text-center">
              Type:
            </span>
            <span className="font-medium mt-1.5 whitespace-nowrap text-span-title-color capitalize">
              {location?.type}
            </span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold font-xl ml-5 text-span-text-color text-center">
              Dimension:
            </span>
            <span className="font-medium mt-1.5 ml-5 whitespace-nowrap text-span-title-color text-center capitalize">
              {location?.dimension}
            </span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold font-xl ml-5 text-span-text-color text-center">
              Population:
            </span>
            <span className="font-medium mt-1.5 ml-5 whitespace-nowrap text-span-title-color text-center">
              {location?.residents.length}
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default LocationInfo