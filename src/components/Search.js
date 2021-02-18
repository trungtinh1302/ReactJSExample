import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSearch = () => {
        console.log(this.state);
        this.props.onSearch(this.state.keyword);
    }

    render() {
        var { keyword } = this.state;
        return (
            <div className="col-sm-12 col-md-6">
                <div className="input-group mb-3">
                    <input name="keyword" type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa"
                        value={keyword}
                        onChange={this.onChange} />
                    <div className="input-group-append">
                        <button className="btn btn-sm btn-primary" type="button" onClick={this.onSearch}>
                            <i className="fas fa-search-plus"></i>
                            Tìm
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;


