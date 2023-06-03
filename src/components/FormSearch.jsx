import { useRef } from "react"
import getRandomNumber from "../utils/getRandomNumber"
import { motion } from "framer-motion"

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
    <div className="flex items-center justify-center mt-12 -mb-16 w-full max-w-xl mx-auto">
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="px-4 py-1 border border-gray-300 rounded-md mr-4"
          placeholder="Enter id location"
          type="text"
          ref={idLocationValue}
        />
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="px-4 py-1.5 bg-blue-500 text-white rounded-md"
        >
          Search
        </motion.button>
      </form>
    </div>
  );
}

export default FormSearch