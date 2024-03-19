import { Spinner } from '@nextui-org/spinner'
import React from 'react'

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Spinner size="lg" />
        </div>
    )
}

export default Loading
