import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'
import { addHours } from 'date-fns'

export const FabDelete = () => {




    const { startDeletingEcent,hasEventSelected } = useCalendarStore()

    const handleDelete = () => {
        startDeletingEcent();

    }

    return (
        <button
            className='btn btn-danger fab-danger'
            onClick={handleDelete}
            style= {{
                display:hasEventSelected?'':'none'
            }}
        >
            <i className='fas fa-trash-alt'></i>
        </button>
    )
}
