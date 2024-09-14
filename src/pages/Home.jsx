import { useState, useEffect, useRef } from "react";
import Layout from "../Layout";
import { toast } from "react-toastify";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

function Home() {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);

  const isInView = useInView(ref);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        if (counter < 50) {
          setCounter(counter + 1);
        }
      }, 20);
    }
  }, [counter, isInView]);

  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.7,
      },
    },
  };

  const str =
    "كرست العشر السنوات الماضية لتصميم هويات مشاريع رواد الأعمال أمثالك أنا وفريقي سأتعاون معك لإنشاء هوية فريدة تعكس جوهر علامتك التجارية بدءاً من البحث والاستراتيجية إلى التصميمالجذاب والمتفرد لمشروعك";

  const arr = str.split(" ");
  console.log(arr);

  const parent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const child = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
      },
    },
  };
  return (
    <Layout>
      <div className="min-h-screen">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-2 rounded-full bg-rose-500 z-10"></motion.div>
        <div className="flex flex-col gap-20 justify-center items-center px-0  mt-28">
          <motion.h1
            variants={variant}
            initial="hidden"
            animate="visible"
            className="font-[Hafhaf] font-bold text-gradient text-5xl  lg:text-6xl text-center lg:leading-[80px]">
            نقيم ..نُصمم.. ننُفِـذ <br />
            ونحــّـول مشروعك الـــَـى حقيــقَّة <br />
            تخطـفُ الإنظار
          </motion.h1>
          {/*  <button className="bg-[#FF5758] relative [&>span]:hover:opacity-100  px-5 py-2 rounded-full text-white/90 font-bold text-2xl">
            تواصل معنا
            <span className="absolute inset-0 opacity-0 bg-black/50"></span>
          </button> */}
          <button className="button font-[Mohanad] ">
            <div class="blob1"></div>
            <div class="blob2"></div>
            <div class="inner text-2xl">تواصل معنا</div>
          </button>
          <div className="w-2/3 bg-zinc-700/50 h-1 "></div>
          <div className="flex lg:w-[800px] px-5 flex-col justify-center items-center text-3xl lg:text-5xl gap-5 text-center">
            <h1 className="text-[#FF5758] font-[Hafhaf]">من نحن</h1>
            {/* <p className="text-zinc-500">
              <span className="text-zinc-300">كرست العشر السنوات الماضية </span> لتصميم هويات مشاريع
              رواد الأعمال أمثالك أنا وفريقي سأتعاون معك لإنشاء هوية فريدة تعكس جوهر علامتك التجارية
              بدءاً من البحث والاستراتيجية إلى التصميم
              <span className="text-zinc-300">الجذاب والمتفرد لمشروعك </span>
            </p> */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={parent}
              className="flex flex-wrap flex-row-reverse gap-x-3  justify-center">
              {arr.map((word, index) => (
                <motion.span
                  variants={child}
                  style={{ color: index % 3 === 0 && "white" }}
                  className="text-zinc-400 font-[Mohanad]">
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div className="w-2/3 bg-zinc-700/50 h-1 "></div>
          <div className="flex lg:w-[800px] flex-col    justify-center items-center  gap-5 text-center">
            <h1 className="text-[#FF5758] text-5xl font-[Hafhaf]">أعمالنا</h1>
            <div className="flex  flex-wrap justify-between w-full gap-10 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                className="w-[450px]  ml-[-50px] lg:ml-0 lg:w-full transition-all duration-300  h-[400px] lg:h-full rounded-xl relative [&>div]:hover:opacity-100  shadow-[0_0_10px_rgb(255,255,255)]">
                <img
                  src="/images/x.png"
                  className="object-cover w-full h-full rounded-xl  "
                  alt=""
                />
                <div className="absolute  transition-all duration-300 font-bold rounded-xl text-zinc-100 inset-0 opacity-0 flex bg-black/60 flex-col justify-center gap-5 text-2xl">
                  <p>تصميم متجر الكتروني</p>
                  <p>XElectronics</p>
                  <p>2024</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                className="w-[450px] ml-[-50px] lg:ml-0 lg:w-full bg-blue-500  h-[400px] lg:h-full rounded-xl relative [&>div]:hover:opacity-100 ">
                <img
                  src="/images/y.png"
                  className="object-cover w-full h-full rounded-xl shadow-[0_0_10px_rgb(255,255,255)]"
                  alt=""
                />
                <div className="absolute transition-all duration-300 rounded-xl font-bold text-zinc-100 flex inset-0 opacity-0 bg-black/60 flex-col justify-center gap-5 text-2xl">
                  <p>تصميم متجر تسوق</p>
                  <p>Gopuff</p>
                  <p>2023</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                className="w-[450px] ml-[-50px] lg:ml-0 lg:w-full bg-blue-500  h-[400px] lg:h-full rounded-xl relative [&>div]:hover:opacity-100 ">
                <img
                  src="/images/z.png"
                  className="object-cover object-right-top w-full h-full rounded-xl shadow-[0_0_10px_rgb(255,255,255)]"
                  alt=""
                />
                <div className="absolute  transition-all duration-300 rounded-xl font-bold text-zinc-100 flex inset-0 opacity-0 bg-black/60 flex-col justify-center gap-5 text-2xl">
                  <p>تصميم متجر نباتات</p>
                  <p>Terrarium world</p>
                  <p>2022</p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className=" lg:w-1/2  mt-20 mx-5 rounded-lg">
            <div className="flex justify-between text-2xl gap-6 lg:text-4xl px-5 py-10">
              <AnimatePresence>
                <div className="" ref={ref}>
                  <motion.span
                    key={counter}
                    initial={{ opacity: 0.7, y: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, y: 50 }}>
                    {counter}
                  </motion.span>
                  + Users
                </div>
              </AnimatePresence>
              <AnimatePresence>
                <div className="" ref={ref}>
                  <motion.span
                    key={counter}
                    initial={{ opacity: 0.7, y: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, y: 50 }}>
                    {counter + 10}
                  </motion.span>
                  + Designs
                </div>
              </AnimatePresence>
              <AnimatePresence>
                <div className="" ref={ref}>
                  <motion.span
                    key={counter}
                    initial={{ opacity: 0.7, y: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, y: 50 }}>
                    {counter + 2}
                  </motion.span>
                  + Projects
                </div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
