---
name: Request a Copy of XPLOIT
about: Request to purchase a copy of XPLOIT from our team.
title: ''
labels: ''
assignees: ''

---


body:
  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: How can we get in touch with you to send you the files?
      placeholder: ex. email@example.com
    validations:
      required: true
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our Terms of Service and Acceptable Use Policy
      options:
        - label: I agree to the Terms
          required: true
