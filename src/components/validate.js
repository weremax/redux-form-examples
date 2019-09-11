const validate = values => {
    const errors = {};
    let detailsError = [];

    console.log('--values', values);

    if (values.contractEffectiveDetails) {
        values.contractEffectiveDetails.forEach((detail, detailIndex) => {
            let packError = {};
            Object.keys(detail).forEach((key) => {
                if (!detail[key]) {
                    packError[key] = 'Required'
                }
            })
            detailsError[detailIndex] = packError;
        })
        
    }

    if (!values.data) {
        errors.data = 'Required';
    }

    errors.contractEffectiveDetails = detailsError;
    console.log('---- errors', errors);
    return errors;
}
export default validate;