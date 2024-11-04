# Project Title: Build a Restaurant Landing Page

### Objective:
Design and develop a responsive Restaurant Landing Page using HTML for structure, CSS for styling, and Bootstrap for responsiveness. The page should feature the restaurant’s introduction, menu highlights, customer testimonials, and a contact form.

### Instructions:
Complete the following tasks using the provided HTML and CSS placeholders. The page should be visually appealing, functional, and fully responsive with Bootstrap.

## Part 1: HTML Structure (30 points)
Fill in the missing HTML to structure the Restaurant Landing Page.

Create a basic HTML structure with the following sections:
1. Navigation bar with links to Home, Menu, Testimonials, and Contact
2. A hero section with a restaurant introduction
3. A "Menu Highlights" section showcasing 3 featured dishes
4. A "Customer Testimonials" section with 3 customer quotes
5. A "Contact" section with a reservation form (name, email, date, and message)
6. Fill in all the blanks with whatever you like.


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Landing Page</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="______">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="______">
</head>
<body>

    <!-- Navbar code HERE -->


    <!-- Hero Section -->
    <section id="home" class="hero text-center">
        <div class="container">
            <h1>______</h1> <!-- Restaurant Name or Introduction -->
            <p>______</p> <!-- Short tagline or welcome message -->
            <a href="#menu" class="btn btn-primary">View Menu</a>
        </div>
    </section>

    <!-- Menu Highlights Section -->
    <section id="menu" class="menu">
        <div class="container">
            <h2>Menu Highlights</h2>
            <div class="row">
                <div class="col-md-4">
                    <h3>______</h3> <!-- Dish 1 Name -->
                    <p>______</p> <!-- Dish 1 Description -->
                    <p><strong>Price:</strong> $______</p>
                </div>
                <div class="col-md-4">
                    <h3>______</h3> <!-- Dish 2 Name -->
                    <p>______</p> <!-- Dish 2 Description -->
                    <p><strong>Price:</strong> $______</p>
                </div>
                <div class="col-md-4">
                    <h3>______</h3> <!-- Dish 3 Name -->
                    <p>______</p> <!-- Dish 3 Description -->
                    <p><strong>Price:</strong> $______</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Customer Testimonials Section -->
    <section id="testimonials" class="testimonials">
        <div class="container">
            <h2>What Our Customers Say</h2>
            <div class="row">
                <div class="col-md-4">
                    <blockquote>
                        "______" <!-- Testimonial 1 -->
                        <footer>- ______</footer> <!-- Customer 1 Name -->
                    </blockquote>
                </div>
                <div class="col-md-4">
                    <blockquote>
                        "______" <!-- Testimonial 2 -->
                        <footer>- ______</footer> <!-- Customer 2 Name -->
                    </blockquote>
                </div>
                <div class="col-md-4">
                    <blockquote>
                        "______" <!-- Testimonial 3 -->
                        <footer>- ______</footer> <!-- Customer 3 Name -->
                    </blockquote>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Contact Us</h2>
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
                    <label for="date">Reservation Date</label>
                    <input type="date" class="form-control" id="date">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea class="form-control" id="message" rows="4" placeholder="Special Requests"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>

    <!-- Include Bootstrap JS -->
    <script src="______"></script>

</body>
</html>
```

## Part 2: CSS Styling (25 points)
Write custom CSS to style the page and make it visually appealing.

1. Add background images or colors to the hero section to make it stand out.
2. In the testimonials section change the font style to italic.
3. In the hero section change the font size of h1 to 3rem, and p to 1.2rem.
4. Fill in all the blanks with whatever you like.
5. Add a margin bottom to the hero section of 20px.


```css
/* Basic body styling */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
}

/* Navbar styling */
.navbar {
    background-color: ______;
}

/* Hero section styling */
.hero {
    background-color: ______;
    background-image: url('______');
    background-size: cover;
    padding: 100px 0;
    color: white;
    text-align: center;
}

/* Menu section styling */
.menu {
    padding: 60px 0;
    background-color: ______;
}

.menu .col-md-4 {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

/* Testimonials section styling */
.testimonials blockquote {
    background-color: ______;
    padding: 20px;
    border-radius: 10px;
}
```


## Part 3: Bootstrap Integration (25 points)
Use Bootstrap classes to make the page responsive and easy to use across all devices.

1. Use the Bootstrap grid system to ensure the "Menu" and "Testimonials" sections are responsive, stacking on smaller screens.
2. Style the contact form using Bootstrap form classes for input elements and buttons.(do this in css file)
3. Ensure the navbar collapses into a mobile-friendly hamburger menu.


## Part 4: Bootstrap Components (20 points)
Use the following Bootstrap components to enhance the design:

1. Jumbotron: Use Bootstrap’s Jumbotron component for the hero section to make it prominent.
2. Cards: Apply Bootstrap cards to the menu section for each dish, including the name, description, and price.
3. Buttons: Use Bootstrap buttons for the "View Menu" button in the hero section and the "Submit" button in the contact form.


```html
<!-- Example of Bootstrap Card Component for Dishes -->
<div class="card">
    <img src="______" class="card-img-top" alt="Dish Image">
    <div class="card-body">
        <h5 class="card-title">______</h5> <!-- Dish Name -->
        <p class="card-text">______</p> <!-- Dish Description -->
        <p><strong>Price:</strong> $______</p>
    </div>
</div>
```

## Grading Criteria:
* HTML structure (30 points): Use of semantic HTML and complete structure.
* CSS styling (25 points): Custom styling, including backgrounds, fonts, and layout.
* Bootstrap integration (25 points): Proper use of Bootstrap grid and classes for responsiveness.
* Bootstrap components (20 points): Effective use of cards, buttons, and other Bootstrap components.