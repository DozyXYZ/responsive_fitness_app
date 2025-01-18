import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from '@/shared/HText';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Nyarlathotep y'khal vulgtm'ri wgah'nagl. Ng'ghft nafl'yar hrii vulgt shagg wgah'n nafl m'ri. Ehye ftaghu l'vulgt ymg'ah y'yar n'gha zhro'k fhtagn."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "1000's of Members",
        description: "Cthulhu l'mnai vulgt nafl'shugg hrii. Ph'nglui wgah'nagl k'yarnak shagg nafl'ri vulgtlagln. Ia Ia! Cthulhu vulgtm'ri fhtagn y'zhro."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Experts and Pro Trainers",
        description: "Zhro-nglui R'lyeh wgah'nagl l'vulgt ph'nglui. N'gha vulgt shagg n'yok-sothoth hrii nafl k'yarnak. Ftaghu nafl'vulgt ehye ymg'phai fhtagn."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.3 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;

};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* Header */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        Zhro k’yarnak mnalgh'fhtagn, Nyarl Cthulhu’ah, l'vulgtlagln! N'gai n'gha'ghaa hrii, o l'ghftyar!
                        Ehye hrii vulgtm'gephai, R'lyeh, ah'nglui, wgah'nagl! U'khthel druy'eh N'ghft! Ia Ia, fhtagn n'ghai.
                        Zhro, wgah'n'guhl, ulk Nyarlathotep.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
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

                {/* Graphic and Description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphic */}
                    <img
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />
                    {/* Description */}
                    <div>
                        {/* Title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves"></div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>

                        {/* Description */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <p className="my-5">
                                Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Zhai'ha l'kthanorh, yr'gothoth n'kylor thuleh na'karra, sha'guth vorn'ith ka'thrazz.
                                Y'keth n'gha, fhalma gnaiih r'luhhor, wgah'n nazhraath ah'glurr. N'ka ph'lag, sy'haath n'ghft fhtagn, hrii'othn m'naglah ph'raa.
                                Chathgnar k'vhal, l'yog thn'ngai, na'ha g'noth Y'ha-nthlei ul'ghoioth!
                            </p>
                            <p className="mb-5">
                                I'kthyar il'quorr na'zhuth ph'lagn. Thar'khal yr'gron n'ygnai cthollor v'ghath, sha'yhra ul'ghoth fhtagn.
                                K'na l'yoth mag'razz n'yhoth ry'galthra, ph'ngai ul'gnaar sy'zhothra. Th'ron yl'ktha gnorril va'zyrgha thanglui, c'vyorrath sha'gn'ryeh.
                                Ch'aal ithl'kar! Z'kaah thrangh n'gha l'vhlor r'lyeh wgah'nagl n'zoth kly'yagh!
                            </p>
                        </motion.div>

                        {/* Button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-buttom-20 before:right-40 before:z-[-1] before:content-sparkles">
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
};

export default Benefits;