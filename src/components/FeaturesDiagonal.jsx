import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full flex flex-col justify-center items-center bg-bgDark1 lg:mb-16">
      {/* Shape Divider - Top */}
      <div className="shape-divider-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
          aria-hidden="true"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-11/12 md:w-4/5 xl:w-[1050px] 2xl:w-[1150px] mx-auto flex flex-col lg:flex-row items-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20"
      >
        {/* Text Section */}
        <div className="w-3/4 lg:w-1/2 flex flex-col text-center lg:text-left">
          <span className="block-subtitle">Accelerate Your Success</span>
          <h2 className="mt-6 mb-6 text-4xl lg:text-5xl block-big-title">
            Build and Scale with Confidence
          </h2>
          <p className="mb-10 text-secondaryText leading-loose">
            Empower your business with our all-in-one platform. From streamlined
            workflows to advanced analytics, we help you build, launch, and scale
            without the headaches of managing complex infrastructures.
          </p>
          <button
            className="w-[210px] h-12 contained-button mx-auto lg:mx-0"
            onClick={() => setIsModalOpen(true)}
            aria-label="Get started with Oh My DevOps"
          >
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mt-12 lg:mt-0">
          <img
            src={featuresdiagonal.src}
            alt="Oh My DevOps Platform Overview"
            className="rounded-xl main-border-gray"
          />
        </div>
      </motion.div>

      {/* Shape Divider - Bottom */}
      <div className="shape-divider-top w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
          aria-hidden="true"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
