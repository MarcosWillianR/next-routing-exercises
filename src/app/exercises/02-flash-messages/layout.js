import React from 'react';

import { Providers } from '../../../app/providers';

import './styles.css';

function FlashMsgLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default FlashMsgLayout;
