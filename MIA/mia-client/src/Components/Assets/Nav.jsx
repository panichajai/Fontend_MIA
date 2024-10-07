import React from 'react';
import { Box, Stack, Link } from '@mui/material';
import { AiOutlineHome } from "react-icons/ai";


const Nav = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ fontSize: '20px' }}> 
      {/* Home icon */}
      <AiOutlineHome className="w-4 h-4"/>
      <Box sx={{ fontSize: 'inherit' }}>/</Box> 
      <Link href="#" color="black" underline="hover" sx={{ fontSize: 'inherit' }}>
        ลูกค้า
      </Link>
    </Stack>
  );
};

export default Nav;
