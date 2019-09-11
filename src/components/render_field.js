import React, { Component } from 'react';

export default class RenderField extends Component {
    render() {
        const { input, label, meta: { touched, error } } = this.props;
        console.warn('---',
            {
                label: label,
                input: input,
                touched: touched,
                error: error
            }
        );
        const className = `form-group ${touched || error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
            <label>{label}</label>
                <input
                    className="form-control"
                    type="text"
                    { ...input }
                />
                <div className="text-help">
                    { touched || error ? error : '' }
                </div>
            </div>
        );
    }
}
