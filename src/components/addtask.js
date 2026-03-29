import React, {Component} from "react";
import Label from "./lable";
class Add extends Component {
    state = {
        id:'',
        task: '',
        status:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.task.trim()) {
        return;
    }

    this.props.addTask(this.state);

    this.setState({
        task: ''
    });
}
    render() {
        return(
            <>
                <Label/>
                <form
                    className="w-[90%] flex flex-col xs:flex-row justify-center m-auto gap-2"
                    onSubmit={(e) => {
                        this.handleSubmit(e)
                    }}
                    disabled={!this.state.task.trim()}
                >
                    <input type="text" placeholder="Add new task..." id="task"
                        className="w-full xs:w-[73%] m-phone:w-[77%] sm:w-[81%] flex-1 bg-[#642b2b] text-white placeholder-[7b5151] px-4 py-3 rounded-2xl border-2 border-transparent outline-none transition-all duration-200 focus:border-[#964d4d] focus:shadow-lg focus:shadow-[#964d4d]/20"
                        onChange={(e) => {
                            this.handleChange(e)
                        }}
                        value={this.state.task}
                    ></input>
                    <button
                        className="w-[40%] xs:w-[27%] m-phone:w-[23%] sm:w-[19%] bg-[#964d4d] text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 hover:bg-[#a85a5a] hover:shadow-lg hover:shadow-[#964d4d]/30 hover:scale-105 active:scale-95"
                    >
                        Add Task
                    </button>
                </form>
            </>
        )
    }
}

export default Add;