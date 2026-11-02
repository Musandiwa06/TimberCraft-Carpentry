
# TimberCraft Carpentry Website

## About the Project

TimberCraft Carpentry is a fictional carpentry business based in Johannesburg, South Africa. The website provides information about the business, its services, locations, opening hours and contact details.

## Purpose of the Website

The website allows visitors to:
- Learn about TimberCraft Carpentry.
- View the carpentry and woodworking services offered.
- Request a quotation.
- Find business contact information.
- Submit enquiries and contact messages online.

## Website Pages

1. **Home (`index.html`)** - Introduces the business and links to the main website sections.
2. **About Us (`about.html`)** - Describes the business, its mission, vision, values and team.
3. **Services (`services.html`)** - Presents the carpentry services using an interactive accordion and search feature.
4. **Enquiry (`enquiry.html`)** - Allows visitors to provide project details and request a quotation.
5. **Contact (`contact.html`)** - Displays contact information, locations, opening hours and a contact form.

## Technologies Used

- **HTML5** - Structures the website content and forms.
- **CSS3** - Styles the website and supports responsive layouts.
- **JavaScript** - Provides interactive features, DOM manipulation, form validation and AJAX submission.
- **Formspree** - Receives form submissions from the website.
- **GitHub Pages** - Hosts and publishes the website.

## Project Structure

```text
PART1/
├── css/
│   └── style.css
├── images/
│   └── carpenter.jpg
├── about.html
├── contact.html
├── enquiry.html
├── index.html
├── services.html
├── script.js
├── sitemap.xml
├── robots.txt
├── README.md
├── CHANGELOG.md
└── REFERENCES.md
```

## Part 3 Improvements

### Search Engine Optimisation (SEO)
- Added page titles and meta descriptions.
- Improved heading structure across website pages.
- Added descriptive image alternative text.
- Created `sitemap.xml` listing the five website pages.
- Created `robots.txt` with crawler access instructions.
- Reviewed internal links and mobile responsiveness.

### Interactive Features
- Added an interactive accordion to the Services page.
- Added a search feature that filters services according to their headings.
- Added JavaScript messages when visitors select a service.
- Used DOM manipulation to update website content dynamically.

### Form Validation and AJAX
- Added required-field validation to the Enquiry and Contact forms.
- Added South African phone number validation.
- Added a minimum message length of 10 characters.
- Integrated Formspree to receive website form submissions.
- Used the JavaScript Fetch API to submit form data asynchronously.
- Used FormData to collect form information.
- Added success and error messages for form submissions.
- Tested both forms and confirmed that submissions work without reloading the webpage.

### Responsive Design and Performance
- Reviewed the website layout on desktop, tablet and mobile screen sizes.
- Improved image loading and accessibility.
- Tested the live website using Google Lighthouse.
- Achieved scores of 100 for Performance, Accessibility, Best Practices and SEO in the recorded Lighthouse test.

## How to Run the Website

1. Open the project folder in Visual Studio Code or another code editor.
2. Open `index.html` in a web browser, or use a local development server.
3. Use the navigation menu to visit the other pages.
4. Test the Services search and accordion.
5. Test the Enquiry and Contact forms using sample information.

## Deployment

The website is published using GitHub Pages.

**Live Website:**  
https://musandiwa06.github.io/TimberCraft-Carpentry/

**GitHub Repository:**  
https://github.com/Musandiwa06/TimberCraft-Carpentry

## Current Limitations

- Form submissions depend on the availability of the external Formspree service.
- The website is a static website and does not have its own database or custom backend.
- Visitors need an internet connection to submit forms through Formspree.
