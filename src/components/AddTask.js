export const AddTask = ({ input, setInput, taskList, setTaskList, isEditing, setIsEditing, Index }) => {

    function handleSubmit(e) {
        e.preventDefault();
        const date = new Date();
        const time = date.toLocaleTimeString();
        const day = date.toLocaleDateString();

        if (!isEditing) {
            const newTask = {
                id: date.getTime(),
                task: input,
                time: `${time} ${day}`
            }

            setTaskList([...taskList, newTask])
        } else {
            taskList[Index] = {
                ...taskList[Index],
                task: input,
                time: `${time} ${day}`
            }
        }
        setIsEditing(false)
        setInput("")
    }

    function handleCancel() {
        setIsEditing(false)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit} className="input-group input-group-lg my-5">
            <input onChange={(e) => setInput(e.target.value)} value={input || ""} type="text" className="form-control" placeholder="Add task" name="task" required />
            <button className="btn btn-success" type="submit" > {isEditing ? "Edit" : "Add"}</button>
            {
                isEditing &&
                <span onClick={() => handleCancel()} className="btn btn-outline-success">Cancel</span>
            }
        </form >
    )
}
