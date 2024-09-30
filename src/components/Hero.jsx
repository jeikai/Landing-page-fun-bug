import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#a03039]' />
          <div className='w-1 sm:h-80 h-40' style={{ background: 'linear-gradient(#a03039, #050816)' }} />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className='text-[#a03039]'>Phuc Tran</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Co-founder and Manager of FunBug <br className='sm:block hidden' />
            Application Developer, Freelancer
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
