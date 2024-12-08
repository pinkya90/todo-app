export function Tabs(){
    const Tabs = [ 'All', 'Open','completed']
    return(
        <nav>
{Tabs.map((tab,tabIndex)=>{
    return(
        <button key={tabIndex}>
            <h4>{tab}</h4>
        </button>
    )
})  }
        </nav>
    )
}