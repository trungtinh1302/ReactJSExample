import React, { Component } from "react";

class Sort extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    onClick = (sortBy, sortValue) => {
        console.log(this.state);
        this.props.onSort(sortBy, sortValue);
    }

    render() {
        return (
            <div className="col-sm-12 col-md-6">
                <div className="dropdown float-left">
                    <button className="btn btn-sm btn-primary p-2" type="button" data-toggle="dropdown">
                        <i className="fas fa-sort"></i>
                        Sắp xếp
                    </button>
                    <div className="dropdown-menu">
                        <a  className={(this.props.sortBy === 'name' && this.props.sortValue === 1) ? 'dropdown-item sort-selected' : 'dropdown-item' } 
                            href="#" 
                            onClick={() => this.onClick('name', 1)}>
                            <i className="fas fa-sort-alpha-down mr-2"></i>
                            Tên từ A-Z
                        </a>
                        <a  className={(this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'dropdown-item sort-selected' : 'dropdown-item' } 
                            href="#" 
                            onClick={() => this.onClick('name', -1)}>
                            <i className="fas fa-sort-alpha-down-alt mr-2"></i>
                            Tên từ Z-A
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className={(this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'dropdown-item sort-selected' : 'dropdown-item' } 
                            href="#" 
                            onClick={() => this.onClick('status', 1)}>Trạng thái kích hoạt
                        </a>
                        <a className={(this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'dropdown-item sort-selected' : 'dropdown-item' } 
                            href="#" 
                            onClick={() => this.onClick('status', -1)}>Trạng thái ẩn</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;


