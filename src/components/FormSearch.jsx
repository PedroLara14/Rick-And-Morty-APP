import { useRef } from "react"
import getRandomNumber from "../utils/getRandomNumber"

const FormSearch = ({ setIdLocation }) => {

  const idLocationValue = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = idLocationValue.current.value.trim()
    if (inputValue === "") {
      setIdLocation(getRandomNumber(126))
    } else {
      setIdLocation(inputValue)
    }
  }

  return (
    <form className="flex items-center justify-center" onSubmit={handleSubmit}>
      <input
        className="px-4 py-1 border border-gray-300 rounded-md mr-2"
        placeholder="Enter id location"
        type="text"
        ref={idLocationValue}
      />
      <button className="px-4 py-1.5 bg-blue-500 text-white rounded-md">
        Search
      </button>
    </form>
  );
}

export default FormSearch