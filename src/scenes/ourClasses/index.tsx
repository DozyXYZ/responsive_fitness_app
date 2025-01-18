import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Ny'aloth kthara v'hlior g'nath, sha'fhal il'yag n'ktholl. Vra'yagh l'quarh sy'ngorr yl'haar fhtagn, i'rrakh n'hraa kly'noth ul'zarah",
        image: image1
    },
    {
        name: "Power Surge Classes",
        description: "Y'gha vhol nar'ith k'thelya, wgah'n il'thlor ph'nghuul yr'ghyath. Ka'thar il'quorr zhai'vra thul'nagn, sha'yr gnaihlor za'yvhal k'tagyth. ",
        image: image2
    },
    {
        name: "Core Revolution Classes",
        description: "Fhalma v'lyr gha'ntho! Th'gnai ch'yra shugg'qua wgah'nagl n'gha Y'hoth.",
        image: image3
    },
    {
        name: "Flex and Flow Classes",
        image: image4
    },
    {
        name: "HIIT Squad Classes",
        description: "Th'ron yl'ktha gnorril va'zyrgha thanglui, c'vyorrath sha'gn'ryeh. Ch'aal ithl'kar! Z'kaah thrangh n'gha l'vhlor r'lyeh wgah'nagl n'zoth kly'yagh!",
        image: image5
    },
    {
        name: "EnduroFit Classes",
        description: "Y'keth n'gha, fhalma gnaiih r'luhhor, wgah'n nazhraath ah'glurr. N'ka ph'lag, sy'haath n'ghft fhtagn, hrii'othn m'naglah ph'raa. ",
        image: image6
    },
];


type Props = {
    setSelectedPage: (value: SelectedPage) => void;

};

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">
                            Ny'aloth kthara v'hlior g'nath, sha'fhal il'yag n'ktholl. Vra'yagh l'quarh sy'ngorr yl'haar fhtagn, i'rrakh n'hraa kly'noth ul'zarah.
                            Y'gha vhol nar'ith k'thelya, wgah'n il'thlor ph'nghuul yr'ghyath.
                            Ka'thar il'quorr zhai'vra thul'nagn, sha'yr gnaihlor za'yvhal k'tagyth.
                            Fhalma v'lyr gha'ntho! Th'gnai ch'yra shugg'qua wgah'nagl n'gha Y'hoth.
                        </p>
                    </div>
                </motion.div>

                {/* Side Scroller */}
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
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
    );
};

export default OurClasses;