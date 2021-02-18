import React, { Component } from "react";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }

    componentWillMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status,
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status,
            });
        }
        else if (!nextProps.task) {
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;

        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }

        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    render() {
        var { id } = this.state;
        return (
            <div className="card border-success">
                <div className="card-header text-left font-weight-bold">
                    {id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}
                    <span className="float-right" onClick={this.onCloseForm}>
                        <i className="fas fa-times-circle"></i>
                    </span>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label col-form-label-sm text-left">Tên</label>
                            <div className="col-sm-9">
                                <input name="name" type="ProjectName" className="form-control form-control-sm" value={this.state.name} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label col-form-label-sm text-left">Trạng thái</label>
                            <div className="col-sm-9">
                                <select className="form-control form-control-sm rounded" name="status" value={this.state.status} onChange={this.onChange}>
                                    <option value={false}>Ẩn</option>
                                    <option value={true}>Kích hoạt</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 col-md-6">
                                <button type="submit" className="btn btn-sm btn-success">
                                    <i className="fas fa-save mr-2"></i>
                                        Lưu lại
                                    </button>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <span className="btn btn-sm btn-danger" onClick={this.onClear}>
                                    <i className="fas fa-window-close mr-2"></i>
                                        Hủy
                                    </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;