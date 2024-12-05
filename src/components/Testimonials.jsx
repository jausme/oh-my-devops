import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Emily Thompson",
    customerTitle: "CTO of InnovateX",
    content:
      "Oh My DevOps has transformed how we manage our infrastructure. Their seamless integrations and automated workflows saved us countless hours, allowing us to focus on innovation instead of maintenance.",
    image: testimonial1,
  },
  {
    customerName: "Michael Rivera",
    customerTitle: "CEO of CodeCrafters",
    content:
      "The storage solutions offered by Oh My DevOps are top-notch. It’s reliable, scalable, and has significantly reduced our operational costs. Their support team is outstanding!",
    image: testimonial2,
  },
  {
    customerName: "Sarah Patel",
    customerTitle: "Lead Developer at NextGen Apps",
    content:
      "Managing DevOps used to be a headache for our team, but Oh My DevOps made it effortless. From deployments to monitoring, their tools are a game-changer for developers like me.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">What People Say</div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          Real Stories from Happy Customers
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 shadow-lg hover:shadow-xl transition-shadow flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white mb-4">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4 items-center">
                <div>
                  <img
                    src={testimonial.image.src}
                    alt={`${testimonial.customerName}'s Avatar`}
                    className="rounded-full"
                    width="45px"
                    height="45px"
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
