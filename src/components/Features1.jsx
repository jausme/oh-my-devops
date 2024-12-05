import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
  className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0  md:pt-[12vw] lg:pt-40"
  id="features"
>
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
        <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
          <span className="block-subtitle">Unlock Unlimited Potential</span>
          <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
            Scale Beyond Limits with Confidence
          </h2>
          <p className="mb-10 text-secondaryText leading-loose">
            With **Oh My DevOps**, you get more than just a platform—you get a partner 
            in scalability. Whether you're launching a new app or managing enterprise-grade 
            infrastructure, our cutting-edge tools ensure your growth is seamless and 
            stress-free. Experience the power of effortless scaling with real-time 
            monitoring, robust cloud storage, and always-on support designed to keep 
            your business moving forward.
          </p>
          <ul className="mb-6 text-primaryText">
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Unmatched Cloud Scalability</span>
            </li>
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Always-On Infrastructure Monitoring</span>
            </li>
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>24/7 DevOps Expertise</span>
            </li>
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Seamless CI/CD Automation</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
        <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
          <div className="mb-4 py-3 pl-3 pr-2 rounded">
            <img
              src={feature1.src}
              alt="Unmatched Cloud Scalability"
              className="rounded-xl main-border-gray mx-auto sm:mx-unset"
              aria-label="Unmatched Cloud Scalability"
            />
          </div>
          <div className="py-3 pl-3 pr-2 rounded ">
            <img
              src={feature2.src}
              alt="Always-On Infrastructure Monitoring"
              className="rounded-xl main-border-gray mx-auto sm:mx-unset"
              aria-label="Always-On Infrastructure Monitoring"
            />
          </div>
        </div>
        <div className="w-1/2 lg:mt-20 pt-12 lg:pt-0 px-2 hidden sm:inline-block">
          <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
            <img
              src={feature3.src}
              alt="Seamless CI/CD Automation"
              className="rounded-xl main-border-gray"
              aria-label="Seamless CI/CD Automation"
            />
          </div>
          <div className="py-3 pl-3 pr-2 rounded-lg ">
            <img
              src={feature4.src}
              alt="24/7 DevOps Expertise"
              className="rounded-xl main-border-gray"
              aria-label="24/7 DevOps Expertise"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</section>

  );
};
