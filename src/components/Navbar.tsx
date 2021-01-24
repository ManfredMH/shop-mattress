// Components
import Image from './Image';

// Context
import { useStateContext } from '../context';

// Images
import SaatvaLogo from '../assets/images/saatva.png';

const Header: React.FC = (): JSX.Element => {
  const { itemsCount } = useStateContext();
  return (
    <nav className="navbar bg-white shadow-lg border-bottom">
      <div className="nav-container w-100 h-100 d-flex align-items-center mx-5">
        <Image classes="saatva-logo" alt="saatva logo" src={SaatvaLogo} />
        <a href="/cart" className="cart ml-auto">
          <i className="fas fa-shopping-cart"></i>
          {itemsCount === 0 ? null : <span className='badge cart-count'>{itemsCount}</span>}
        </a>
      </div>
    </nav>
  );
}

export default Header;
