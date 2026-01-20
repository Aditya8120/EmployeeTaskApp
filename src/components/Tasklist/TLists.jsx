import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TLists = ({data}) => {
    return (
        <div id='TL' className='lg:h-1/2 w-full p-5 flex flex-row items-stretch gap-5 flex-nowrap overflow-auto'>
            {data.tasks.map((e)=>{
                if(e.newTask){
                    return <NewTask data={e}/>
                }
                if(e.completed){
                    return <CompleteTask data={e}/>
                }
                if(e.active){
                    return <AcceptTask data={e}/>
                }
                if(e.failed){
                    return <FailedTask data={e}/>
                }
            })}
        </div>
    )
}

export default TLists
