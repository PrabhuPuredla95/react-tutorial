import React from "react";
import {Field, reduxForm} from "redux-form";

class StreamCreate extends React.Component{
    renderInput = ({input, label, meta})=> {
        // below syntax add the values key values pairs as attributes to input
        const className=`field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}/>
                {this.renderError(meta)}
            </div>
        );
        // return <input onChange={formProps.input.onChange}
        //               value={formProps.input.value}/>
    }
    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }
    onSubmit(formValues){

    }
    render() {
        return (
            //handlesubmit prevents the default and calls the onSubmit function with all formvalues
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field label="Enter Title" name="title" component={this.renderInput}/>
                <Field label="Enter Description" name="description" component={this.renderInput}/>

                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}
// if this function returns object with key values, redux form understands that there are some errors
const validate = (formValues) =>{
    const errors={};
    if(!formValues.title){
        errors.title = 'You must enter a title'
    }
    if(!formValues.description){
        errors.description = 'You must enter the description'
    }
    return errors;
}
//form: name of our formdata object in the redux store
//validate function will be called when any field value changes
export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);
