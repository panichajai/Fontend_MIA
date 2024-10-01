import React from 'react';
import { Box, Stack, Link } from '@mui/material';

const Nav = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ fontSize: '20px' }}> 
      {/* Home icon */}
      <Link href="#" color="gray" underline="hover" sx={{ fontSize: 'inherit' }}> 
        <Box component="svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width="14px"
          sx={{ color: 'gray' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l9-9 9 9M4.5 10.5V21a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5V10.5"
          />
        </Box>
      </Link>
      <Box sx={{ fontSize: 'inherit' }}>/</Box> 
      <Link href="#" color="black" underline="hover" sx={{ fontSize: 'inherit' }}>
        ลูกค้า
      </Link>
    </Stack>
  );
};

export default Nav;
