import React, { Component, Fragment } from 'react';
import { reduxForm/*, change*/ } from 'redux-form';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import RenderField from './render_field';
import validate from './validate';

class FormTest extends Component {
    constructor(props) {
        super(props);

        this.changer = this.changer.bind(this);
    }

    componentDidMount() {
        this.props.initialize(this.props.docgen);
    }

    changer = e => {
        console.log(e.target.name, e.target.value);
        this.change('FormTest', e.target.name, e.target.value);
    }

    onSubmit(values) {
        console.log('onSubmit', values);
    }

    render() {
        const { docgen, handleSubmit } = this.props;
        const { contractEffectiveDetails } = docgen;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                Form Test
                {
                    contractEffectiveDetails.map((d, index) => (
                        <Fragment>
                            <Field
                                name={`contractEffectiveDetails[${index}]['contractEffectiveDate']`}
                                component={RenderField}
                                label={`Effective Date`}
                            />
                            <Field
                                name={`contractEffectiveDetails[${index}]['contractEndDate']`}
                                component={RenderField}
                                label={`End Date ${index + 1}`}
                            />
                        </Fragment>
                    ))
                    }
                <Field
                    name='data'
                    component={RenderField}
                    label='Data'
                />
                <button type="submit" className="btn btn-primary">Sumbit</button>
            </form>
        )
    }
}

function mapStateToProps({ docgen }) {
    return { docgen };
}

export default reduxForm({
    form: 'FormTest', validate
})(connect(mapStateToProps, null)(FormTest));


/*
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
*/