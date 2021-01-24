import { Dispatch, SetStateAction } from 'react';

// Components
import Button from '../Button';
import MattressInfo from './MattressInfo';

// Interfaces
import { Mattresses, MattressType } from '../../interfaces';

interface Props {
  mattresses: Mattresses | any;
  selected: string;
  setSelected: Dispatch<SetStateAction<MattressType>>;
}

const Mattress: React.FC<Props> = ({ mattresses, selected, setSelected }) => {
  return (
    <>
      <h1 className="title">Choose Your Mattress</h1>
      <div className="pt-4">
        <p>SELECT MATTRESS TYPE</p>
        <div className="input-group">
          {
            Object.keys(mattresses).map(key =>
              <Button
                key={key}
                classes={`btn-sm border-secondary form-control py-3 ${key === selected ? 'bg-secondary text-white' : ''}`}
                text={mattresses[key].name}
                onClick={() => setSelected(key as MattressType)}
              />
            )
          }
        </div>
        <div className="pt-3">
          <MattressInfo mattress={mattresses[selected]} />
        </div>
      </div>
    </>
  );
}

export default Mattress;
