import React from 'react';
import ReactDOM from 'react-dom/client';
import '@jetbrains/ring-ui-built/components/style.css';
import {ControlsHeightContext, ControlsHeight} from '@jetbrains/ring-ui-built/components/global/controls-height';
import MenuItemPage from "./app.tsx";

const host = await YTApp.register();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ControlsHeightContext.Provider value={ControlsHeight.S}>
      <MenuItemPage host={host}/>
    </ControlsHeightContext.Provider>
  </React.StrictMode>
);
