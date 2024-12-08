export function Tabs(props){
    const {todos} = props
    const Tabs = [ 'All', 'Open','completed']
    return(
        <nav className="tab-container">
{Tabs.map((tab,tabIndex)=>{
    const numOfTasks = tab ==='All'?
    todos.length:
    tab==='open'?
    todos.filter(val=>!val.complete).length:todos.filter(val=>val.complete).length
    return(
        <button key={tabIndex} className="tab-button">
            <h4>{tab}<span>({numOfTasks})</span></h4>
        </button>
    )
})  }
        </nav>
    )
}