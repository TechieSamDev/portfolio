import VerifiedIcon from '@mui/icons-material/Verified';
import { motion } from 'framer-motion';
import { cardVariants } from '../../styles/ScrollEffectAnimationVariant';
const TECHNOLOGIES = [
    "Bootstrap",
    "Tailwind",
    "React",
    "MUI",
    "Redux",
    "Next JS",
]

const Technologies = () => {
    return (
        <motion.li 
        className='col'
        initial="offscreen"
        whileInView="onscreen"
        variants={cardVariants}
        viewport={{ once: true }}
         >
            <h4>Technologies</h4>
            <div>
                <div className='row justify-content-evenly m-auto'>
                    {
                        TECHNOLOGIES.map(technology =>
                            <small style={{ fontSize: '0.79em' }} key={technology} className='col-5 mt-4 m-auto text-start'><VerifiedIcon style={{ fontSize: '0.9em' }} /> {technology}</small>
                        )
                    }
                </div>
            </div>
        </motion.li>
    )
}

export default Technologies