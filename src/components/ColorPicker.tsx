'use client'
import { useState } from 'react'
import { ChromePicker } from 'react-color'

function ColorPicker() {
    const [color, setColor] = useState('#fff')

    return (
        <ChromePicker
            color={color}
            disableAlpha
            onChange={(e) => {
                setColor(e.hex)
            }}
        />
    )
}

export default ColorPicker
