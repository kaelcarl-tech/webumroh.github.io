/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import bg from './assets/images/bg.png';

import Navbar from './Components/Navbar';
import WrapperBody from './Components/Wrapper';
import DefaultView from './Components/DefaultView';
import WinnerView from './Components/WinnerView';
import ClearButton from './Components/ClearButton';

function App() {
  const [isRaffleStart, setIsRaffleStart] = useState(false);
  const [isRaffleDone, setIsRaffleDone] = useState(false);
  const clearButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      setIsRaffleStart(true);
    }
  }

  function handleDocumentClick() {
    if (clearButtonRef.current) {
      clearButtonRef.current.blur();
    }
  }

  function clearWinner() {
    setIsRaffleStart(false);
  }

  return (
    <main className="h-screen w-full p-5 font-sans">
      <figure className="absolute left-0 top-0 -z-10 h-screen w-full overflow-hidden">
        <img src={bg} alt="background" className="h-full w-full scale-125 object-cover" />
      </figure>
      <Navbar />
      <WrapperBody>
        {isRaffleStart ? <WinnerView setIsRaffleDone={setIsRaffleDone} /> : <DefaultView />}
        {isRaffleStart && (
          <ClearButton
            clearButtonRef={clearButtonRef}
            isRaffleDone={isRaffleDone}
            clearWinner={clearWinner}
          />
        )}
      </WrapperBody>
    </main>
  );
}

export default App;
