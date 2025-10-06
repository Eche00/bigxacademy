
function Hero() {
  return (
    <div className=" w-full bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] overflow-hidden min-h-[100vh]">

    <section className="md:pt-[90px]">
    <div
            
            className="  max-w-[90%] mx-auto flex sm:flex-row md:flex-row flex-col justify-center sm:mb-[100px] mb-[125px] items-center ">
            {/* hero left section  */}
            <div
              className=" flex-1 gap-[200px] pt-[180px]"
             >
              <div className=" flex  flex-col gap-[24px]">
              <div className=" flex items-center border-[1px] border-green-700 rounded-full w-fit p-2">
                <p  className=" text-[14px]  font-[400] py-[10px] px-[20px] bg-green-700 text-white rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
                MENTORSHIP
                </p>
               </div>
                <h1 className=" text-[#1A1A1A] font-[700] sm:text-[60px] text-[40px]   smm:w-full w-[80%] smm:leading-[130%] smm:tracker-[1.28px] leading-[120%] tracker-[0.8px] mx-auto sm:mx-0">
                Guided by Experts, Growing into 
                  <span className=" text-green-700"> Traders</span>
                </h1>
                <p className=" text-[#1A1A1A] font-[300] sm:text-[20px] text-[16px]  sm:w-full w-[300px] mx-auto">
                From Basics to Breakthroughs, Learn Forex with mentors who’ve been in the markets, mastered the strategies, and are ready to guide you every step of the way.
                </p>
              </div>
              <div className=" flex sm:justify-start justify-center sm:flex-row sm:flex-nowrap flex-wrap sm:gap-[24px] gap-[10px] sm:py-[70px] py-[15px] w-fit">
                <p
                
                  className="flex items-center justify-center gap-[10px] rounded-[10px] bg-green-700 text-white sm:py-[20px]  sm:w-[200px] w-[170px] py-[12px]  text-[16px] sm:text-[18px] font-[500]">
                 ONLINE CLASS
                </p> 
                <p
                 
                  className=" sm:py-[10px] py-[12px] sm:w-[200px] w-[170px] text-[16px] text-green-700 sm:text-[18px] font-bold border-2 border-green-700  rounded-[10px] flex items-center justify-center ">
                  PHYSICAL CLASS
                </p>
                <p
                  
                  className=" sm:py-[10px] py-[12px] sm:w-[200px] w-[170px] text-[16px] text-green-700 sm:text-[18px] font-bold border-2 border-green-700  rounded-[10px] flex items-center justify-center ">
                  PRIVATE CLASS 
                </p>
               
              </div>
            </div>
            {/* hero right section  */}
            <div className=" flex-1 flex items-end  relative sm:pt-[50px] z-10">
               <img src="/mentorshiphero.webp" alt="hero-img" className="w-full rounded-[18px]" />
            </div>
          </div>
    </section>
   </div>
  )
}

export default Hero