export const TaskCard = ({ task, input, setInput, taskList, setTaskList, setIsEditing }) => {

    function handleEdit(id) {
        setIsEditing(true);
        setInput(task.task, id);
    }

    function handleDelete(id) {
        const filteredTaskList = taskList.filter(task => task.id !== id);
        setTaskList(filteredTaskList)
    }
    return (
        <div className="card mb-3">
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
    )
}
