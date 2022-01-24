import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangeType = {
    value2: number[]
    setValue2: (value1: number[]) => void
    setValue1: (value1: number) => void
}

export const SuperDoubleRange: React.FC<SuperDoubleRangeType> =
    ({setValue2, value2, setValue1}) => {
        const handleChange = (event: Event, newValue: number | number[]) => {
            const arrayValue2 = newValue as number[]
            setValue1(arrayValue2[0])
            setValue2(newValue as number[]);
        }
        console.log('aaa')
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