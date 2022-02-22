import "./styles.css";
import React, { useEffect, useState } from 'react';
import firebase from './utils/firebase';
import { getRemoteConfig, fetchAndActivate, getAll } from "firebase/remote-config";
const remoteConfig = getRemoteConfig(firebase);


// For development only
remoteConfig.settings = {
  minimumFetchIntervalMillis: 10000,
};
const defaults = {
  "backgroundColor": 'white',
  "textColor": '#ffffff',
  "buttonColor": 'white',
  "name": ''
}

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [configs, setConfigs] = useState({})
  useEffect(() => {
    remoteConfig.defaultConfig = defaults;
    fetchAndActivate(remoteConfig)
      .then(activated => {
        if (!activated) console.log('not activated')
        return getAll(remoteConfig)
      })
      .then(remoteConfigs => {
        setConfigs(remoteConfigs)
        setIsLoading(false)
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      {
        !isLoading ?
          <div className="App" style={{
            border: '2px solid',
            borderColor: configs['borderColor']?._value,
            color: configs['textColor']?._value,
            backgroundColor: configs['backgroundColor']?._value
          }} >
            <h1>{`Hello ${configs['name']?._value}`}</h1>
            <h2>Start editing to see some magic happen!</h2>

            <button className='incrementButton' style={{ backgroundColor: configs['buttonColor']?._value }} >Test</button>
          </div>
          : <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            Loading....
          </div>
      }
    </>
  );
};
