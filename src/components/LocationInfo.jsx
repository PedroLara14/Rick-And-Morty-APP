const LocationInfo = ({ location }) => {
  return (
    <article className="bg-card-color max-w-2xl h-40 p-10 mx-auto flex items-center justify-around mt-20">
      <ul className="flex flex-row gap-14 text-white mt-0">
        <li className="flex flex-col">
          <span className="font-bold font-xl">Nombre:</span>
          <span className="font-medium mt-1.5">{location?.name}</span>
        </li>
        <li className="flex flex-col">
          <span className="font-bold">Type:</span>
          <span className="font-medium mt-1.5">{location?.type}</span>
        </li>
        <li className="flex flex-col">
          <span className="font-bold font-xl">Dimension:</span>
          <span className="font-medium mt-1.5">{location?.dimension}</span>
        </li>
        <li className="flex flex-col">
          <span className="font-bold font-xl">Population:</span>
          <span className="font-medium mt-1.5">{location?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
}

export default LocationInfo