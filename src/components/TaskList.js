import { TaskCard } from "./TaskCard"

export const TaskList = ({ taskList }) => {
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

            <div className="cards mt-5">
                {taskList && taskList.map((task) => (
                    <TaskCard task={task} />
                ))}
            </div>
        </div>
    )
}
