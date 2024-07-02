import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Box } from '@mui/material';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const AboutCards = () => {
  return (
    <div className="md:ma-w-lg">
      <ul className="grid gap-5">
        <li className="col-span-6  border rounded p-5 text-center bg-primary hover:bg-secondary transition-all duration-150">
          <div>
            <WorkspacePremiumIcon fontSize="large" />
          </div>

          <h6>Experience</h6>
          <small className="mt-5 p-3">2+ years</small>
        </li>

        <li className="col-span-6 border rounded p-5 text-center bg-primary hover:bg-secondary transition-all duration-150">
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
