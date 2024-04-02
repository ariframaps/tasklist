import React from 'react'

export const TaskList = () => {
    return (
        <div className='tasklist-container border p-4'>
            <div className="head row">
                <div className="info col d-flex gap-5">
                    <p className="fw-semibold fs-4">Todo</p>
                    <p className='border border-black p-2 rounded-circle fw-bolder'>10</p>
                </div>
                <div className="clear col text-end">
                    <button className="btn btn-primary">Clear All</button>
                </div>
            </div>

            <div className="cards mt-5 d-flex gap-2">
                <div className="card w-50">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary my-3">Card subtitle</h6>
                        <i class="bi bi-pen-fill card-link fs-5"></i>
                        <i class="bi bi-trash3-fill card-link fs-5"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
