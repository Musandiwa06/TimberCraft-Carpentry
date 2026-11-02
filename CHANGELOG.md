# Changelog - TimberCraft Carpentry Website

This file records the updates made to the website during development.

## Version 1.1 - Part 3 Improvements

### SEO and Accessibility
- Added page titles and meta descriptions to improve search engine visibility.
- Improved heading structure on updated pages.
- Added descriptive labels and autocomplete attributes to the contact form.

### JavaScript and Form Validation
- Added interactive messages when a visitor selects a carpentry service.
- Added required-field validation to the enquiry and contact forms.
- Added a minimum message length of 10 characters.
- Added status messages to provide feedback after form submission.

### Form Functionality Updates
- Added email submission links to the Enquiry and Contact forms using `mailto:`.
- Enquiry emails include the customer's contact details, selected service, budget and project description.
- Contact emails include the customer's contact details, message type and message.
- Tested both forms on the live GitHub Pages website.
- Confirmed that the email application opens with the form information pre-filled. Customers must still press Send to submit the email.

### Interactive Website Features
- Added an interactive accordion to the Services page using HTML `<details>` and `<summary>` elements.
- Visitors can expand and collapse each of the six carpentry services to view descriptions and starting prices.
- Added CSS styling to improve the appearance and usability of the accordion.
- Tested the accordion to confirm that all service sections open and close correctly.

### Search and Filter Functionality
- Added a search box to the Services page.
- Used JavaScript DOM manipulation to filter services according to their headings.
- Added a message showing the number of matching services.
- Added a message when no matching services are found.
- Tested the search feature using different service names and confirmed that clearing the search displays all six services.
  
### Website Files and Documentation
- Created `sitemap.xml` to list the five website pages.
- Created `robots.txt` to specify crawler access instructions.
- Updated `README.md` with the project description, technologies, website pages and Part 3 improvements.
- Created this changelog to document project updates.

### Performance
- Added alternative text and dimensions to the homepage hero image.
- Prioritised the homepage hero image for loading.
- Reviewed lazy loading for images where appropriate.
- Ran Google Lighthouse tests on the live website.
- Achieved a score of 100 for Performance, Accessibility, Best Practices and SEO.
- Confirmed that the website meets the tested Lighthouse quality checks.
  
## Previous Version
The original website contained five HTML pages, a CSS stylesheet, JavaScript and an images folder.
