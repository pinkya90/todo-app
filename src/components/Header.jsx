export function Header(props){
    const {todos}=props
    const todoslength=todos.length
    const isTasksPlural=todos.length!=1
    const taskortasks=isTasksPlural?'tasks':'task'
    return(
        <header>
            <h1 className="text-gradient"> You have {todoslength} open {taskortasks}.</h1>
        </header>
    )
}