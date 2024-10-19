import React from 'react';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TableWithPagination = ({ columns, data, currentPage, pageSize, handlePageChange, handlePageSizeChange }) => {

  const totalPages = Math.ceil(data.length / pageSize) || 1;

  return (
    <div className="table-container">
      <table className="table-auto w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2 text-center">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((row, index) => (
            <tr key={index} className="border-t">
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-center">{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} mb={2} className="pagination-container">
        <Box display="flex" alignItems="center">
          <Typography>เรียกดู</Typography>
          <Select
            value={pageSize || 5}
            onChange={handlePageSizeChange}
            style={{ 
                marginLeft: '8px', 
                marginRight: '8px', 
                height: '40px', 
                }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
          <Typography>รายการ</Typography>
        </Box>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
          variant="outlined"
        />
      </Box>
    </div>
  );
};

export default TableWithPagination;
