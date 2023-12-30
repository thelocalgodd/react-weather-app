import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div
        animate={{ rotate: [0, 180, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className='text-7xl h-fit w-fit mx-auto p-16'
    >
        🔄️
    </motion.div>
  )
}

export default Loading