export const AddTask = ({ input, setInput, taskList, setTaskList, storageKey }) => {

    function handleSubmit(e) {
        e.preventDefault();
        const date = new Date();
        const time = date.toLocaleTimeString();
        const day = date.toLocaleDateString();

        if (!input.id) {
            const newTask = {
                id: date.getTime(),
                task: input.task,
                time: `${time} ${day}`
            }

            setTaskList([...taskList, newTask])
        } else {
            const index = taskList.findIndex(task => task.id === input.id);
            taskList[index] = {
                ...taskList[index],
                task: input.task,
                time: `${time} ${day}`
            }
            localStorage.setItem(storageKey.tasks, JSON.stringify(taskList));
        }
        setInput({})
    }

    function handleCancel() {
        setInput({})
    }

    return (
        <form onSubmit={handleSubmit} className="input-group input-group-lg my-3 shadow-sm">
            <input onChange={(e) => setInput({ ...input, task: e.target.value })} value={input.task || ""} type="text" className="form-control" placeholder="Add task" name="task" required />
            <button className="btn btn-success" type="submit" > {input.id ? "Edit" : "Add"}</button>
            {
                input.id &&
                <span onClick={() => handleCancel()} className="btn btn-outline-success">Cancel</span>
            }
        </form >
    )
}
