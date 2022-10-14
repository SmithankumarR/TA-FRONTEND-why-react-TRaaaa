import React from 'react';
import '../styles/App.css';
import Button from './Button';
import { buttonSizes ,buttonTypes } from '../btnInfo'

function App() {
  return (
    <>
      <div className="button">
        <Button label="Btn 1" />
        <Button label="Btn 2" type={buttonTypes.SECONDARY} size= {buttonSizes.SMALL} />
        <Button label="Btn 3" type={buttonTypes.TERTIARY} size= {buttonSizes.LARGE} />
        <Button
          title="Introduce"
          label = "Introduce "
          onClickHandler={() => alert('Welcome, to Button Design System')}
          disabled={false}
        />
      </div>
    </>
  );
}

export default App;
