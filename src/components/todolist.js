import React from "react";
import { Check, Trash2 } from "lucide-react";
import Footer from "./footer";

function List(props) {
    const { tasks, deleteTask,toggleTask } = props;
    let length = tasks.length;
    const listTasks =
        length ? tasks.map((task) => {
            return (
                <div key={task.id} isDone={task.status} className="group flex items-center gap-3 py-3 px-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-[#642b2b]/30">
                    <button 
                        className="flex items-center justify-center w-5 h-5 rounded-md border-2 transition-all duration-200 border-[#964d4d]"
                        onClick={(e) => {
                            const btn = e.currentTarget;
                            const text = btn.nextElementSibling
                            btn.classList.toggle('bg-[#7b5151]');
                            const icon = btn.querySelector('.check-icon');
                            toggleTask(task.id)
                            if (icon) {
                                icon.classList.toggle('hidden');
                            }
                            if (text) {
                                text.classList.toggle('line-through');
                                text.classList.toggle('text-[#7b5151]');
                                text.classList.toggle('text-white');
                            }
                        }}
                    >
                        <Check className="check-icon hidden w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </button>
                    <span className="flex-1 text-white transition-all duration-200">
                        {task.text}
                    </span>
                    <button
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 rounded-lg hover:bg-[#500000] text-[#7b5151] hover:text-[#964d4d]"
                        onClick={
                            ()=>deleteTask(task.id)
                        }
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            )
        }) :
        <div className="group flex items-center gap-3 py-3 px-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-[#642b2b]/30">
            <span className="flex-1 text-center text-xl text-white transition-all duration-200">
                There is no tasks here
            </span>
            </div>
    
    return (
        <>
            <div className="my-6 flex flex-col gap-2 space-y-1">
                {listTasks}
                <Footer tasks={ tasks } />
            </div>
        </>
    )
}

export default List;