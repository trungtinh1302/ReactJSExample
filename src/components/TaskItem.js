import React, { Component } from "react";

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }

    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td className="text-left">{task.name}</td>
                <td>
                    <span className={task.status === true ? 'text-capitalize badge badge-success' : 'text-capitalize badge badge-danger'} 
                        onDoubleClick={this.onUpdateStatus}>
                        {task.status === true ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td>
                    <button className="btn btn-sm btn-warning pl-4 pr-4 mr-2" onClick={this.onUpdate}>
                        <i className="far fa-edit"></i>
                        &nbsp; Sửa
                        </button>

                    <button className="btn btn-sm btn-danger pl-4 pr-4 ml-2" onClick={this.onDelete}>
                        <i className="far fa-edit"></i>
                        &nbsp; Xóa
                        </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;