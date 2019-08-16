import React, { Component, Fragment } from 'react'
import { Field } from 'redux-form';
import RenderField from './render_field';

export default class Form extends Component {
    render() {
        return (
            <Fragment>
                <Field 
                    name="title"
                    label="Title"
                    component={RenderField}
                />
                <Field 
                    name="categories"
                    label="Categories"
                    component={RenderField}
                />
                <Field 
                    name="content"
                    label="Post Content"
                    component={RenderField}
                />
            </Fragment>
        )
    }
}
