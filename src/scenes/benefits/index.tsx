import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';


import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Personal Effectiveness",
        description: "Unlock and unleash a greater journey for every individual in your organization by helping them tap into the powers of their greater self.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Team Effectiveness",
        description: "Unlock and unleash a greater journey for your teams by helping them align, commit and gear up for greater team missions.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Leadership Effectiveness",
        description: "Motivate, find, groom and select a line of successors to take your legacy forward as you prepare to take on your further life missions.",
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* BENEFITS HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -250 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>UNLIKE ANY TRAINING!</HText>
          <p className="my-5 text-sm">
            A non-conventional approach driven by the power of positive
            thinking, empathy, self-empowerment, looking at longer term benefits
            as opposed to immediate or short-term results alone.
          </p>
        </motion.div>

        {/* BENEFITS */}

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}

        <div className="mt-16 items-center justify-between md:flex gap-20 md:mt-28 ">
          {/* GRAPHIC */}
          <img 
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                  <HText>
                    HUNDREDS OF SELF DISCOVERIES IN {" "}
                    <span className="text-primary-500">PROGRESS</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
            >
                <p className='my-5'>An integrated, inter-disciplinary and scientific process-based approach making self-discovery a “Science of the possible.</p>
                <p className='mb-5'>Here's a testimonial from one of the program participants - 
                    “The experience is phenomenal. The purpose leading actions have redefined in what way one can look at the problems. 
                    The approach is helping me to understand the context from what the problem could be for which I am providing the solution.”</p>
            </motion.div>

            {/* BUTTON */}

            <div className='relative mt-16'>
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                </div>


            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits