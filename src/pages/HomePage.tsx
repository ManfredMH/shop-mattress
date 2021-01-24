import { useState } from 'react';

// Components
import Navbar from '../components/Navbar';
import Mattress from '../components/Mattress';
import Image from '../components/Image';

// Context
import { useStateContext } from '../context';

// Interfaces
import { Mattresses, MattressType } from '../interfaces';

// Images
import ClassicImage from '../assets/images/classic-carousel.jpg';
import LoomImage from '../assets/images/loom-carousel.jpg';
import ZenImage from '../assets/images/zen-carousel.jpg';

const Home: React.FC = () => {
  const { mattresses, addMattress } = useStateContext();
  const [selected, setSelected] = useState(MattressType.CLASSIC);

  const addToCart = () => {
    addMattress(mattresses[selected]);
  }

  return (
    <>
      <Navbar />
      <div className="row p-4 mx-5">
        <div className="col-md-6 col-sm-12">
          <Image
            classes="rounded image"
            alt="mattress"
            src={selected === 'classic' ? ClassicImage : selected === 'loom' ? LoomImage : ZenImage}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <Mattress
            mattresses={mattresses as Mattresses}
            selected={selected}
            setSelected={setSelected}
          />
          <button className="btn btn-block text-white p-3 mt-5 add-to-cart" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Home;
