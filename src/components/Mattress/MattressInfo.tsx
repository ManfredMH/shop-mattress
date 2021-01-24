// Interfaces
import { Mattress } from '../../interfaces';

// Utils
import { formatNumber } from '../../utils';

interface Props {
  mattress: Mattress;
}

const MattressInfo: React.FC<Props> = ({ mattress }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="col-md-6 col-sm-12 text-left p-0">
        <p><strong>{mattress.name} Mattress</strong></p>
        <p><strong>Review Rating</strong></p>
      </div>
      <div className="col-md-6 col-sm-12 text-right p-0">
        <p>{formatNumber(mattress.price)}</p>
        <p>{mattress.reviewRating}</p>
      </div>
    </div>
  );
}

export default MattressInfo;
