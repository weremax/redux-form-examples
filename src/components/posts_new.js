import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import Form from './form';
class PostsNew extends Component {

    state = {
        title: 'whoops',
        categories: '',
        content: ''
    }

    componentDidMount() {
        console.log(this.state);
        this.props.initialize(this.state);
    }

    onSubmit(values) {
        // console.log(values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }
    
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Form />
                <button type="submit" className="btn btn-primary">Sumbit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    // console.log(value) -> { title: '', categories: ''}
    const errors = {};
    // Validate the inputs from 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title!";
    }

    if (!values.categories) {
        errors.categories = "Enter some categories";
    }

    if (!values.content) {
        errors.content = "Enter some content please";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
)
;