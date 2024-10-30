import React from 'react'
import { motion } from 'framer-motion'

export default function ResumeScannerLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-64 h-96 bg-white rounded-lg shadow-lg overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-blue-500"
          initial={{ y: 0 }}
          animate={{ y: [0, 380, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="p-4 space-y-2">
          {[...Array(12)].map((_, index) => (
            <motion.div
              key={index}
              className="h-4 bg-gray-200 rounded"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            />
          ))}
        </div>
      </div>
      <motion.p
        className="mt-4 text-xl font-semibold text-gray-700"
        animate={{
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Scanning Resume...
      </motion.p>
    </div>
  )
}