import { SelectedPage } from "@/shared/types"
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ProgramType } from "@/shared/types";
import Program from "./Program";


const programs: Array<ProgramType> = [
  {
    name: "Personal Effectiveness",
    description: "Unlock and unleash a greater journey for every individual in your organization by helping them tap into the powers of their greater self.",
    image: image1
  },
  {
    name: "Team Effectiveness",
    description: "Unlock and unleash a greater journey for your teams by helping them align, commit and gear up for greater team missions.",
    image: image2
  },
  {
    name: "Leadership Effectiveness",
    description: "Motivate, find, groom and select a line of successors to take your legacy forward as you prepare to take on your further life missions.",
    image: image3
  },
  {
    name: "Professional Effectiveness",
    description: "Step up your professional effectiveness by planning, building and demonstrating greater results and impact in your given role or job function.",
    image: image4
  },
  {
    name: "HR Effectiveness",
    image: image5
  },
  {
    name: "Sales Effectiveness",
    image: image6
  },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurPrograms = ({setSelectedPage}: Props) => {
  return (
    <section
        id="ourprograms"
        className="w-full bg-primary-100 py-40"
    >

    <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.OurPrograms)}
    >
      <motion.div
        className="mx-auto w-5/6"
        initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5 }}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-250},
                visible:{opacity: 1, x:0},
            }}
      >
        <div className='md:w-3/5'>
          <HText>OUR PROGRAMS</HText>
          <p className='py-5'>
          All our programs are designed to give you a personalized, introspective and learning space 
          to decode your life journey thus far and create a future playbook of self-transformation 
          led by a clearer self-vision and powered by your self-energy and self-organization.
          </p>
        </div>
      </motion.div>
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {programs.map(( item: ProgramType, index) => (
            <Program 
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            
            />
          ))}

        </ul>
      </div>
    </motion.div>

    </section>
  )
}

export default OurPrograms