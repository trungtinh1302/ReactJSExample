import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from 'react-redux'

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        );
        this.setState({
            [name]: value
        });
    }

    render() {
        var { tasks } = this.props;
        var { filterName, filterStatus } = this.state;
        var elemTasks = tasks.map((task, index) => {
            return <TaskItem key={task.id}
                index={index} task={task}
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate} />
        });

        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Trạng Thái</th>
                        <th scope="col">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <td>
                            <div className="input-group input-group-sm">
                                <input name="filterName"
                                    type="text"
                                    className="form-control rounded"
                                    value={filterName}
                                    onChange={this.onChange} />
                            </div>
                        </td>
                        <td>
                            <select name="filterStatus"
                                className="form-control form-control-sm rounded"
                                value={filterStatus}
                                onChange={this.onChange} >
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>

                    {elemTasks}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};

export default connect(mapStateToProps, null)(TaskList);