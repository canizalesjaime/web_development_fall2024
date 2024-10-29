# Project Title: Build a Responsive Personal Portfolio Website


## Objective:
Create a responsive **Personal Portfolio Webpage** that displays a developer’s name, a brief bio, a projects section, and contact information. The page should use HTML for structure, CSS for styling, Bootstrap for responsiveness. 

## Instructions:
Complete the following tasks. Use the given HTML, CSS, and JavaScript placeholders to finish the project. Your website should be visually appealing, responsive on various screen sizes, and functional.

## Part 1: HTML Structure (30 points)
Fill in the missing HTML code to structure the website.

### Create a basic HTML structure with the following sections:
* Navbar with navigation links (Home, About, Projects, Contact)
* Hero section with the developer’s name and a short tagline
* About section with a brief bio
* Projects section with a grid to display 3 sample projects
* Contact section with a form (name, email, message)


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Website</title>
    <!-- Link Bootstrap CSS here -->
    <link rel="stylesheet" href="______">
    <!-- Link your custom CSS here -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Navbar Section -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">My Portfolio</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>______</h1> <!-- Developer's Name -->
            <p>______</p> <!-- Short Tagline -->
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>About Me</h2>
            <p>______</p> <!-- Brief Bio -->
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Contact Me</h2>
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Your Name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Your Email">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>
    </section>

    <!-- Add JS file link here -->
    <script src="______"></script>

</body>
</html>
```


### Part 2: CSS Styling (25 points)
Add your custom CSS in the style.css file to style the page. You are required to do the following:

Style the navbar to have a background color and fix it to the top of the page.
Set the hero section background with an image and center-align the text.
Define a grid layout for the project items in the projects section.
Style the contact form to make it visually appealing.
```css
/* Add basic styles for the body */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

/* Style the navbar */
.navbar {
    background-color: ______;
    position: ______;
    width: 100%;
}

/* Style the hero section */
.hero {
    background-image: url('______');
    background-size: cover;
    text-align: center;
    padding: 100px 0;
}

.hero h1, .hero p {
    color: ______;
}

/* Grid layout for project items */
.projects .project-item {
    background-color: ______;
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 10px;
    text-align: center;
}

.projects img {
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
}

/* Style the contact form */
.contact form {
    background-color: ______;
    padding: 30px;
    border-radius: 10px;
}
```

### Part 3: Bootstrap Integration (25 points)
Use Bootstrap classes to ensure the webpage is responsive.

* Use Bootstrap’s grid system to make the projects section responsive on all devices.
* Add Bootstrap buttons to the form's submit button.
* Ensure the navbar collapses into a mobile-friendly hamburger menu.