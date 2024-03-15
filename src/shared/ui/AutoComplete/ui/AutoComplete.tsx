'use client'
import { Select, SelectItem } from '@nextui-org/select'
import React, { FC } from 'react'

interface AutoCompleteProps {
    datalist: Array<string | number>
    label: string
    name?: string
}

export const AutoComplete: FC<AutoCompleteProps> = ({ datalist, label, name }) => {
    return (
        <Select label="Number of items" name={name}>
            {datalist.map((value) => (
                <SelectItem key={label + value} value={value} textValue={`${value}`}>
                    {value}
                </SelectItem>
            ))}
        </Select>
    )
}
