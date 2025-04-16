import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"
 
const Speech = () => {
  return (  
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Chat With Your Friend.",
            1000,
            "Introduce Yourself to others.",
            1000,
            "Learn From Other Developers.",
             1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/manhero.png" alt="" />
    </motion.div>
  );
};

export default Speech