
export const AddTask = ({ input, setInput, taskList, setTaskList }) => {

    function handleSubmit(e) {
        e.preventDefault();
        const date = new Date();
        const time = date.toLocaleTimeString();
        const day = date.toLocaleDateString();

        const newTask = {
            id: date.getTime(),
            task: input,
            time: `${time} ${day}`
        }

        setTaskList([...taskList, newTask])
        setInput({ ...input, task: "" })
    }

    return (
        <form onSubmit={handleSubmit} className="input-group my-5 w-50">
            <input onChange={(e) => setInput(e.target.value)} value={input.task} type="text" className="form-control" placeholder="Add task" name="task" />
            <button className="btn btn-success" type="submit">Add</button>
        </form>
    )
}
