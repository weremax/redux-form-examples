import React, { Component } from 'react';
import { reduxForm, FieldArray, Field /*, change*/ } from 'redux-form';
import { connect } from 'react-redux';
import RenderField from './render_field';
import validate from './validate';

let newFields = {
    contractEffectiveDate: '',
    contractEndDate: '',
};


class FormTest extends Component {
    constructor(props) {
        super(props);

        this.changer = this.changer.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        const { handleSubmit } = this.props;

        const renderFrame = ({ fields, meta: { touched, error } }) => (
            <div>
                <button type="button" onClick={() => {
                    if (fields.length < 5) {
                        fields.push(newFields) 
                    }
                }}>
                    Add Dates
                </button>

                {fields.map((d, index) => {
                        return (
                            <div>
                            <Field
                                name={`${d}.contractEffectiveDate`}
                                type="text"
                                component={RenderField}
                                label={`Effective Date #${index + 1}`}
                            />
                            <Field
                                name={`${d}.contractEndDate`}
                                type="text"
                                component={RenderField}
                                label={`End Date #${index + 1}`}
                            />
                            </div>
                        )
                })}
            </div>
        )

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                Form Test
                <Field
                    name='dataField'
                    component={RenderField}
                    label='Data'
                />
                {/*<FieldArray name="contractEffectiveDetails" component={renderFrame} />*/}

                
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