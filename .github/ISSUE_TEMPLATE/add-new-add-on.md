---
name: Add new add-on
about: Template for new add-ons
title: ""
labels: add-ons
assignees: ''
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this form!
  - type: dropdown
    id: type
    attributes:
      label: Type
      description: Add-on type?
      options:
        - Plugin
        - Script
        - Userscript
        - Utility
        - Third-party Integration
    validations:
      required: true
  - type: input
    id: aname
    attributes:
      label: Add-on name
      description: Provide the add-on name to use in the documentation
    validations:
      required: true
  - type: input
    id: alink
    attributes:
      label: Add-on link
      description: Provide the add-on link to use in the documentation
    validations:
      required: true
  - type: textarea
    id: adescription
    attributes:
      label: Add-on description
      description: Provide the add-on description to use in the documentation
      placeholder: A sentence or two about your add-on
    validations:
      required: true
  - type: input
    id: aauthor
    attributes:
      label: Author name
      description: Provide the author name to use in the documentation
    validations:
      required: true
  - type: input
    id: aauthor-link
    attributes:
      label: Author link
      description: Provide the author link to use in the documentation
    validations:
      required: false
  - type: textarea
    id: ascreenshot
    attributes:
      label: Add-on screenshots
      description: Provide the add-on screenshots to use in the documentation
    validations:
      required: false
---