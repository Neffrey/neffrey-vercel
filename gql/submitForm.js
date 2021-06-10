// Framework
import { gql } from '@apollo/client'


export const SUBMIT_FORM = gql`
    mutation SubmitForm( $email: String!, $message: String! ) {
        submitGravityFormsForm( input: { formId: 1, fieldValues: [{ id: 2, value: $email }, {id: 3, value: $message }]}) {
            entry {
                status
            }
        }
    }
`

