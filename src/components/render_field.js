import React, { Component } from 'react';

export default class RenderField extends Component {
    render() {
        const { meta: { touched, error } } = this.props;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
            <label>{this.props.label}</label>
                <input
                    className="form-control"
                    type="text"
                    { ...this.props.input }
                />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }
}
