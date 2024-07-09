import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Box } from '@mui/material';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const AboutCards = () => {
  return (
    <div>
      <ul className="grid gap-5">
        <li className="col-span-6  bg-secondary hover:bg-secondary/20 border border-slate-600 p-5 rounded-lg text-center transition-all duration-150">
          <div>
            <WorkspacePremiumIcon fontSize="large" />
          </div>

          <h6>Experience</h6>
          <small className="mt-5 p-3">2+ years</small>
        </li>

        <li className="col-span-6 bg-secondary hover:bg-secondary/20 border border-slate-600 p-5 rounded-lg text-center transition-all duration-150">
          <div>
            <WorkHistoryIcon fontSize="large" />
          </div>

          <h6>Projects</h6>
          <small>10+ Completed</small>
        </li>
      </ul>
    </div>
  );
};

export default AboutCards;
