import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CPagination = () => {
    return (
        <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
    );
};

export default CPagination;