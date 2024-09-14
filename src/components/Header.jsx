import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";

function Header() {
  const { pathname } = useLocation();

  const variant = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <div className="flex  justify-around py-5 text-md lg:text-2xl">
      <div className=" lg:w-2/3 text-center ">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variant}
          className="flex justify-center items-center gap-5">
          <img
            src="/images/newlogo.png"
            className="w-12 rounded-2xl  drop-shadow-[0px_0px_20px_rgba(255,255,255,0.7)]"
            alt=""
          />
        </motion.h1>
      </div>
    </div>
  );
}

export default Header;
