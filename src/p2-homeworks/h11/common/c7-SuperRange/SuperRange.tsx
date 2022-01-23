import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import React from 'react'

type SuperRangeType = {
    value1: number
    setValue1: (value1:number)=>void
}

const SuperRange:React.FC<SuperRangeType> = ({value1,setValue1}) => {
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue1(newValue as number);
    };
    return (
        <>
            <Box sx={{ width: 300 }}>
                {/*<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">*/}
                    <Slider aria-label="Volume" value={value1} onChange={handleChange} />
                {/*</Stack>*/}
            </Box>
        </>
    )
}

export default SuperRange
