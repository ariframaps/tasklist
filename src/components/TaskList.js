export const TaskList = ({ setInput, taskList, setTaskList }) => {
    function handleEdit(id) {
        setInput(taskList.find(task => task.id === id));
    }

    function handleDelete(id) {
        const filteredTaskList = taskList.filter(task => task.id !== id);
        setTaskList(filteredTaskList)
    }

    return (
        <div className='tasklist-container border p-4 shadow-sm rounded'>
            <div className="info d-flex gap-5">
                <p className="fw-semibold fs-4">Todo</p>
                <p className='border border-black p-2 rounded fw-bolder'>{taskList ? taskList.length : 0}</p>
            </div>

            <div className="cards mt-5">
                {taskList.map((task) => (
                    <div className="card mb-3" key={task.id}>
                        <div className="card-body d-flex justify-content-between">
                            <div className="task-info">
                                <h5 className="card-title">{task.task}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary my-3">{task.time}</h6>
                            </div>
                            <div className="task-action align-items-center d-flex gap-5 fs-3 pe-4">
                                <i onClick={() => handleEdit(task.id)} className="bi bi-pen-fill card-link text-success"></i>
                                <i onClick={() => handleDelete(task.id)} className="bi bi-trash3-fill card-link text-danger"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
