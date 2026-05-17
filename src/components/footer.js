import React from "react";

function Footer(props) {
    const { tasks } = props;
    let length = tasks.length;
    let tasksList = tasks.filter(task => task.status)
    let doneTasks = tasksList.length;
    let i = length - doneTasks;
    return (
        <>
            <div className="pt-4 border-t border-[#642b2b]">
                <p className="text-[#7b5151] text-center text-sm">
                    {i} of {length} tasks remaining
                </p>
            </div>
            <p className="text-center text-xs mt-4 text-[#7b5151]">Developed by Hady Jo</p>
        </>
    )
}

export default Footer;