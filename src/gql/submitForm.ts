// LIBRARIES
import { gql } from "@apollo/client";

// Gravity Forms IDs
export const gFormIds = {
  form: 1,
  email: 4,
  message: 3,
};

// GQL
export const SUBMIT_FORM = gql`
  mutation SubmitForm(
    $emailValue: String!
    $messageValue: String!
  ) {
    submitGfForm(
      input: {
        id: ${gFormIds.form}
        fieldValues: [
          { id: ${gFormIds.email}, emailValues: { value: $emailValue } }
          { id: ${gFormIds.message}, value: $messageValue }
        ]
      }
    ) {
      errors {
        id
        message
      }
      entry {
        isSubmitted
      }
    }
  }
`;
