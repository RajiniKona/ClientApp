export default function Validation({ values }) {
    console.log(values);
    const errors = {};
    const email_pattern = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/;

    if (values.name === "")
        errors.name = "Name is Required";

    if (values.website === "")
        errors.website = "WebSite is Required";

    if (values.directorName === "")
        errors.directorName = "Director Name is Required";

    if (values.emailAddress === "")
        errors.emailAddress = "Email is Required";
    else if(!email_pattern.test(values.emailAddress))
    errors.emailAddress = "Email is Not Valid";

    return errors;
}