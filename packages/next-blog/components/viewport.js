import { useState } from 'react'
import utilStyles from '../styles/utils.module.css'
import styles from './viewport.module.css'
import Button from './button'

const devices = {
  DESKTOP: 'Desktop',
  MOBILE: 'Mobile',
  TABLET: 'Tablet',
};

const viewports = [
  {
    width: 1920,
    height: 1080,
    screen: devices.DESKTOP,
  },
  {
    width: 1366,
    height: 768,
    screen: devices.DESKTOP,
  },
  {
    width: 1280,
    height: 720,
    screen: devices.DESKTOP,
  },
  {
    width: 360,
    height: 640,
    screen: devices.MOBILE,
  },
  {
    width: 360,
    height: 800,
    screen: devices.MOBILE,
  },
  {
    width: 768,
    height: 1024,
    screen: devices.TABLET,
  },
];

const mapClasses = {};
Object.keys(devices).forEach(key => {
  mapClasses[devices[key]] = devices[key].toLowerCase();
})


const defaultState = {
  currentViewport: {...viewports[0]},
}

export default function Viewport({ children }) {
  const [state, setState] = useState(defaultState);
  return (
    <div className={styles.container}>
      <ul className={`${utilStyles.list} ${utilStyles.inline}`}>
        {viewports.map(({width, height, screen}, index) => (
          <li className={utilStyles.listItem} key={index}>
            <Button
              type="button"
              buttonType="primary"
              text={`${screen} ${width}x${height}`}
              onClick={() => setState({
                currentViewport: {
                  width,
                  height,
                  screen,
                }
              })}>
            </Button>
          </li>
        ))}
      </ul>
      <div
      className={`${styles.frame} ${styles[mapClasses[state.currentViewport.screen]]}`}
      style={
        {
          width: state.currentViewport.width,
          height: state.currentViewport.height,
        }
      }
      >
        {children}
      </div>
    </div>
  )
}