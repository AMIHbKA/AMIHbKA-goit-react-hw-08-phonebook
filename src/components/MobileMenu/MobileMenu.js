import { useEffect, useRef, useState } from 'react';
import { MobileMenuStyled } from './MobileMenu.styled';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleDocumentClick = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const handleButtonClick = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <MobileMenuStyled>
        <button type="button" onClick={handleButtonClick}>
          MobileMenu
        </button>

        {isOpen && (
          <ul className={`menu ${isClosing ? 'hide' : ''}`} ref={menuRef}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
      </MobileMenuStyled>
    </>
  );
};
