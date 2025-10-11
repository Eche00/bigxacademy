import { ArrowForward } from "@mui/icons-material"
import { Link } from "react-router"
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className=" w-full bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] overflow-hidden md:h-[100vh] h-[full] min-h-[100vh] relative">

    <section className="md:pt-[20px] z-0 relative">
    <div
            
            className="  max-w-[90%] mx-auto flex  flex-col justify-center mb-[100px]  items-center ">
            {/* hero left section  */}
            <motion.div
           
              className=" flex items-center justify-center flex-col flex-1 gap-5  pt-[120px]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}  
              viewport={{once:true}}
              
             >
              <div className=" flex flex-col items-center justify-center text-center gap-[24px]">
               <div className=" flex items-center border-[1px] border-green-700 rounded-full w-fit p-2">
               <p className=" text-[14px]  font-[400] py-[10px] px-[20px]  ">
                WHAT'S NEW ?
                </p>
                <Link to='/signals'  className=" text-[14px]  font-[400] py-[10px] px-[20px] bg-green-700 text-white rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
                TRADING SIGNALS
                </Link>
               </div>
                <h1 className=" text-[#1A1A1A] font-[700] sm:text-[64px] text-[32px]   smm:w-full w-[80%] smm:leading-[130%] smm:tracker-[1.28px] leading-[120%] tracker-[0.8px]">
                Learn how to master the markets <span className=" text-green-700"> &</span>  control your financial 
                  <span className=" text-green-700"> journey</span>
                </h1>
                <p className=" text-[#1A1A1A] font-[300] sm:text-[20px] text-[16px]  sm:w-full w-[300px]">
                Learn Forex trading from seasoned experts with step-by-step guidance, real-world strategies and tools to trade with confidence.
                </p>
              </div>
              <div className=" flex items-center justify-center gap-[24px]  py-10 w-fit">
                <Link
                 to='/mentorship'
                  className="flex items-center justify-center gap-[10px] rounded-full bg-green-700 text-white sm:py-[10px] py-[12px]  sm:w-[200px] w-[170px] text-[16px] sm:text-[18px] font-[400] cursor-pointer hover:scale-105 transition-all duration-300">
                 Mentorship <ArrowForward/>
                </Link>
               
                <Link
                  to="/courses"
                  className=" sm:py-[10px] py-[12px] sm:w-[200px] w-[170px] text-[16px] text-green-700 sm:text-[18px] border-[1px] border-green-700  rounded-full flex items-center justify-center font-[400] cursor-pointer hover:scale-105 transition-all duration-300">
                  Courses
                </Link>
               
              </div>
            </motion.div>
            {/* hero right section  */}
            <div className=" flex-1 flex items-end  relative z-10">
               <motion.img initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale:1,opacity: 1 }}
              transition={{ duration: 1}} viewport={{once:true}} src="/hero1.webp" alt="hero-img" className="md:w-[900px] w-full md:h-[500px] object-cover rounded-[18px] [mask-image:linear-gradient(to_bottom,black_1,transparent)] 
              [mask-repeat:no-repeat] [mask-size:100%]" />
                 {/*  Cloud blobs */}
  
</div>
          </div>
    </section>

    <section className="flex items-center justify-center sm:gap-20 gap-5 absolute bottom-0 left-0 w-full z-10 bg-gradient-to-b from-transparent to-white p-5">
      <img src="/exness.webp" alt="" className="md:w-[200px] w-[80px] h-[70px] object-cover rounded-full" />
      <img src="/deriv.webp" alt="" className="md:w-[200px] w-[80px] h-[70px] object-cover rounded-full" />
      <img src="/meta5.webp" alt="" className="md:w-[200px] w-[80px] h-[70px] object-cover rounded-full" />
      <img src="/fxcm.webp" alt="" className="md:w-[200px] w-[80px] h-[70px] object-cover rounded-full" />
    </section>
   </div>
  )
}

export default Hero