import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Main = () => {
  const [data, setData] = useState('No result');

  return (
    <div style={{height: '100vh'}}>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: 'environment' }}
        videoStyle={{width: '500px'}}
        containerStyle={{height: '500px'}}
        videoContainerStyle={{height: '500px', paddingTop: '0%'}}
      />
      <p>Результат: {data}</p>
    </div>
  );
};

export default Main;
