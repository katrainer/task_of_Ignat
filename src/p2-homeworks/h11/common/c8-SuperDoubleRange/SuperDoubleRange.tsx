import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangeType = {
    value2: number[]
    setValue2: (value1: number[]) => void
}

export const SuperDoubleRange: React.FC<SuperDoubleRangeType> =
    ({setValue2,value2}) => {
    console.log('aaa')
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue2(newValue as number[]);
    }
    return (
        <>
            <Box sx={{width: 300}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value2}
                    onChange={handleChange}
                />
            </Box>
        </>
    )
}