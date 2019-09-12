const validate = values => {
  //console.log('--values', values);
    const errors = {};
    
    
    
    
    /*let detailsError = [];

    if (values && !values.data) {
        errors.data = 'Required';
    }
    
    // single check
    if (values && values.contractEffectiveDetails) {
      values.contractEffectiveDetails.forEach((item , itemIndex)=> {
          /*let packError = {};
            Object.keys(item).forEach((key) => {
              console.log(item[key]);
                if (!item[key]) {
                    packError[key] = 'Required'
                }
            })
            detailsError[itemIndex] = packError;*/
        /*if (!item.contractEffectiveDetails) {
          detailsError[itemIndex] = 'Required';
        }* /
      })
    }
    errors.contractEffectiveDetails = detailsError;
    console.log('*********', errors);*/


    if (!values.data) {
      errors.data = 'Required'
    }

    
    if (!values.clubName) {
      errors.clubName = 'Required'
    }
    if (!values.members || !values.members.length) {
      errors.members = { _error: 'At least one member must be entered' }
    } else {
      const membersArrayErrors = []
      values.members.forEach((member, memberIndex) => {
        const memberErrors = {}
        if (!member || !member.firstName) {
          memberErrors.firstName = 'Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.lastName) {
          memberErrors.lastName = 'Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (member && member.hobbies && member.hobbies.length) {
          const hobbyArrayErrors = []
          member.hobbies.forEach((hobby, hobbyIndex) => {
            if (!hobby || !hobby.length) {
              hobbyArrayErrors[hobbyIndex] = 'Required'
            }
          })
          if (hobbyArrayErrors.length) {
            memberErrors.hobbies = hobbyArrayErrors
            membersArrayErrors[memberIndex] = memberErrors
          }
          if (member.hobbies.length > 5) {
            if (!memberErrors.hobbies) {
              memberErrors.hobbies = []
            }
            memberErrors.hobbies._error = 'No more than five hobbies allowed'
            membersArrayErrors[memberIndex] = memberErrors
          }
        }
      })
      if (membersArrayErrors.length) {
        errors.members = membersArrayErrors
      }
    }
    return errors
  }
  
  export default validate







/*const validate = values => {
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
export default validate;*/