import React from 'react';
import { Box, useMediaQuery } from '@mui/material';

const GuestLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isDesktop = useMediaQuery('(min-width:961px)');

    let backgroundStyle = {
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to bottom, #282E34, #1A1F23), radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.2), transparent 50%)',
        backgroundBlendMode: 'overlay',
      };
  
    if (isMobile) {
        backgroundStyle = {
          ...backgroundStyle,
          background: 'linear-gradient(to bottom, #282E34, #1A1F23)', // Simplified background for mobile
        };
      } else if (isTablet) {
        backgroundStyle = {
          ...backgroundStyle,
          background: 'linear-gradient(to bottom, #282E34, #1A1F23), radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.1), transparent 50%)', // Adjusted radial gradient for tablet
          backgroundBlendMode: 'overlay',
        };
      } else if (isDesktop) {
        backgroundStyle = {
          ...backgroundStyle,
          background: 'linear-gradient(to bottom, #282E34, #1A1F23), radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.2), transparent 50%)',
          backgroundBlendMode: 'overlay',
        };
      } else {

      }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to bottom, #282E34, #1A1F23), radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.2), transparent 50%)',
        backgroundBlendMode: 'overlay',
      }}
    >
      {children}
    </Box>
  );
};

export default GuestLayout;
