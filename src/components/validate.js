const validate = values => {
    const errors = {};
    let details = values.details;
    console.log('-- vali', values);
    if (details && details[0]) {
        if (!details[0]['contractEffective']) {
            errors["details[0]['contractEffective']"] = 'Required';
        }
    }
    if (details && details[1]) {
        if (!details[1]['contractEffective']) {
            errors["details[1]['contractEffective']"] = 'Required';
        }
    }

    if (!values.data) {
        errors.data = 'Required';
    }
    console.log('---- errors', errors);
    return errors;
}
export default validate;