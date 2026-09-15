import { menuData } from '@/data/menuData';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './mobile-menu';
import SearchPopup from './search-popup';

const Header = ({ className, logo }: { className?: string; logo?: string }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStickyHeader, setIsStickyHeader] = useState(false);
  const pathName = useLocation().pathname;

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 250) {
        setIsStickyHeader(true);
      } else {
        setIsStickyHeader(false);
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathName]);

  return (
    <>
      <MobileMenu
        offcanvaseOpen={isMobileMenuOpen}
        setOffcanvaseOpen={setIsMobileMenuOpen}
      />
      <header
        id='header-sticky'
        className={`header-1 ${isStickyHeader ? 'sticky' : ''} ${className}`}>
        <div className='container-fluid'>
          <div className='mega-menu-wrapper'>
            <div className='header-main'>
              <div className='header-left'>
                <div className='logo'>
                  <Link to='/' className='header-logo'>
                    {/* <img
                      src={logo || "/img/logo/black-logo.png"}
                      alt="logo-img"
                    /> */}
                    <img
                      src={logo || '/logo.jpeg'}
                      alt='logo-img'
                      width={80}
                      height={80}
                      className='rounded-circle'
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </Link>
                  <Link to='/' className='header-logo-2'>
                    <img src='/img/logo/black-logo.png' alt='logo-img' />
                  </Link>
                </div>
              </div>
              <div className='mean__menu-wrapper d-none d-xl-block'>
                <div className='main-menu'>
                  <nav id='mobile-menu'>
                    <ul>
                      {menuData.map((menu) => (
                        <li
                          key={menu.label}
                          className={
                            menu.hasDropdown
                              ? 'has-dropdown active menu-thumb'
                              : undefined
                          }>
                          <Link to={menu.path}>{menu.label}</Link>
                          {/* Home Thumb Menu */}
                          {/* {menu.thumbMenu && (
                            <ul className='submenu has-homemenu'>
                              <li>
                                <div className='homemenu-items'>
                                  {menu.thumbMenu.map((item) => (
                                    <div className='homemenu' key={item.title}>
                                      <div className='homemenu-thumb mb-15'>
                                        <img src={item.img} alt='img' />
                                        <div className='demo-button'>
                                          <Link
                                            to={item.btnPath}
                                            className='theme-btn'>
                                            Multi Page{' '}
                                            <i className='fa-solid fa-arrow-right' />
                                          </Link>
                                        </div>
                                      </div>
                                      <div className='homemenu-content text-center'>
                                        <h4 className='homemenu-title'>
                                          {item.title}
                                        </h4>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </li>
                            </ul>
                          )} */}
                          {/* Submenu */}
                          {!menu.thumbMenu && menu.submenu && (
                            <ul className='submenu'>
                              {menu.submenu.map((sub) => (
                                <li
                                  key={sub.label}
                                  className={
                                    sub.submenu ? 'has-dropdown' : undefined
                                  }>
                                  <Link to={sub.path}>
                                    {sub.label}
                                    {sub.submenu && (
                                      <i className='fas fa-angle-right' />
                                    )}
                                  </Link>
                                  {sub.submenu && (
                                    <ul className='submenu'>
                                      {sub.submenu.map((item) => (
                                        <li key={item.label}>
                                          <Link to={item.path}>
                                            {item.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='header-right d-flex justify-content-end align-items-center'>
                <Link
                  to='#'
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSearchActive(!isSearchActive);
                  }}
                  className='main-header__search search-toggler'>
                  <i className='fa-regular fa-magnifying-glass' />
                </Link>
                <div className='header-button'>
                  <Link to='/donation-details' className='theme-btn'>
                    Donate Now <i className='fa-solid fa-arrow-right' />
                  </Link>
                </div>
                <div className='header__hamburger d-xl-none my-auto'>
                  <div
                    onClick={() => setIsMobileMenuOpen(true)}
                    className='sidebar__toggle'>
                    <i className='fas fa-bars' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SearchPopup isActive={isSearchActive} setIsActive={setIsSearchActive} />
    </>
  );
};

export default Header;
