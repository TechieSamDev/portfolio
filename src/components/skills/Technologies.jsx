import VerifiedIcon from '@mui/icons-material/Verified';
import { TECHNOLOGIES } from '../../constants';

const Technologies = () => {
  return (
    <li>
      <h4>Technologies</h4>
      <div>
        <div className="row justify-content-evenly gap-4 mt-4 m-auto text-center">
          {TECHNOLOGIES.map((technology) => (
            <div
              style={{ fontSize: '0.9em' }}
              key={technology}
              className="col-5 m-auto text-start"
            >
              <VerifiedIcon style={{ fontSize: '1em' }} /> {technology}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Technologies;
