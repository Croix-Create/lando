import React from 'react';
import { Box, Container, Typography, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

interface HexagonBackgroundProps {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  }
  

const HighlightText = styled('span')({
  color: '#FFD700',
});

const SearchTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#282E34',
    borderRadius: '4px',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
  },
}));

const CategoryButton = styled(Button)({
    backgroundColor: '#555555',
    color: '#FFFFFF',
    borderRadius: '6px',
    marginRight: '8px',
    textTransform: 'none',
    padding: '8px 24px',
    fontSize: '14px',
    whiteSpace: 'nowrap', 
    '&:last-child': {
      marginRight: '0',
    },
  });

  const HexagonBackground: React.FC<HexagonBackgroundProps> = ({ isMobile, isTablet, isDesktop }) => {
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Container>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '20px' : '200px' }}>
        {/* Child 1: Text, Search, Buttons */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Box>
            <Typography variant={isMobile ? 'h5' : isTablet ? 'h4' : 'h2'} color="#FFFFFF" fontWeight="bold">
              Your Ultimate <br /> Destination for <br />
              <HighlightText>High-Quality Edits</HighlightText>
            </Typography>
          </Box>

          <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems="center">
            <Box display="flex" alignItems="center" marginRight={isMobile ? '0' : '8px'} marginBottom={isMobile ? '8px' : '0'}>
              <Box component="img" src="/svgs/Tick.svg" alt="Tick icon" width="20px" height="20px" marginRight="4px" />
              <Typography style={{ color: '#FFFFFF', textDecoration: 'underline' }}>Royalty-Free</Typography>
            </Box>

            <Box display="flex" alignItems="center" marginLeft={isMobile ? '0' : '4px'}>
              <Box component="img" src="/svgs/Tick.svg" alt="Tick icon" width="20px" height="20px" marginRight="4px" />
              <Typography style={{ color: '#FFFFFF', textDecoration: 'underline' }}>High Quality</Typography>
            </Box>
          </Box>

          <SearchTextField
            variant="outlined"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon style={{ color: '#FFFFFF' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ width: isMobile ? '100%' : 'calc(100% + 15px)' }}
          />

          <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} justifyContent="flex-start" gap="8px">
            <CategoryButton>Lifestyle</CategoryButton>
            <CategoryButton>Urban landscape</CategoryButton>
            <CategoryButton>Business</CategoryButton>
            <CategoryButton>People</CategoryButton>
            <CategoryButton>Technology</CategoryButton>
          </Box>
        </Box>

        {/* Child 2: Image */}
        <Box sx={{ marginTop: isMobile ? '-20px' : isTablet ? '-40px' : '-52px', width: isMobile ? '80%' : isTablet ? '90%' : '200%' }}>
            <Box component="img" src="/images/Hexagon.png" alt="Hive img" sx={{ width: '100%', height: 'auto' }} />
        </Box>
      </Box>
    </Container>
  </Box>
);
};

export default HexagonBackground;