import React from "react";
import { Header } from "@/components/Header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, ChevronDown } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// Import generated images
import profilePhoto from "@/assets/profile-photo.jpg";
import moviesHomepage from "@/assets/movies-homepage.jpg";
import movieDetails from "@/assets/movie-details.jpg.png";
import shoppingCart from "@/assets/shopping-cart.png";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero/Introduction Section */}
      <Section id="introduction" className="pt-24 pb-20 text-center bg-hero-gradient text-white">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent shadow-gold-glow">
            <img 
              src={profilePhoto} 
              alt="Dhruv Gupta - Georgia Tech Computer Science Student"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-heading">
              Dhruv Gupta
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Computer Science Student at Georgia Institute of Technology
            </p>
            
            <div className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed space-y-4">
              <p>
                Hello! I'm a second-year Computer Science student at the Georgia Institute of Technology. 
                I'm passionate about building elegant and efficient software solutions, with a particular 
                interest in full-stack web development and cloud technologies.
              </p>
              <p>
                This web portfolio serves as a showcase of my journey as a developer, highlighting key 
                projects from my coursework and personal explorations. The project detailed here, the 
                GT Movies Store, was a major assignment for my Objects and Design course (CS 2340) and 
                represents a comprehensive application of my skills in Python, Django, and foundational 
                web principles.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm">Python</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">Django</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">Web Development</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">Full-Stack</Badge>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection("gt-movies")}
            className="mt-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
          >
            View My Project <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* GT Movies Store Description */}
      <Section id="gt-movies" variant="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            GT Movies Store
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive Django web application for movie browsing, reviewing, and purchasing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              The GT Movies Store is a full-stack web application designed and developed using Python 
              and the Django 5 framework. The primary goal of this application is to provide a seamless 
              online platform where users can browse a catalog of movies, read and write reviews, and 
              ultimately purchase movies through a persistent shopping cart system. 🛍️
            </p>
            
            <p className="text-lg leading-relaxed text-foreground">
              The application was built following the Model-View-Template (MVT) architecture, which 
              separates the data models, business logic, and user interface into distinct, manageable 
              components.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-accent text-accent-foreground">Django 5</Badge>
              <Badge className="bg-accent text-accent-foreground">Python</Badge>
              <Badge className="bg-accent text-accent-foreground">Bootstrap</Badge>
              <Badge className="bg-accent text-accent-foreground">SQLite</Badge>
              <Badge className="bg-accent text-accent-foreground">MVT Architecture</Badge>
            </div>
          </div>
          
          <Card className="shadow-card">
            <CardContent className="p-0">
              <img 
                src={moviesHomepage} 
                alt="GT Movies Store Homepage - Movie catalog with search functionality"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </div>

        {/* Feature Breakdown */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-bold font-heading text-primary">Feature Breakdown</h3>
          <p className="text-muted-foreground">Explore detailed capabilities by expanding each category.</p>
          <Accordion type="multiple" className="rounded-lg border bg-card">
            <AccordionItem value="informational">
              <AccordionTrigger className="px-4">Informational Pages & Application-Wide Features</AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-foreground mb-4">
                  The application provides a welcoming experience for new users and is built on a responsive, accessible foundation.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Homepage & About Page</h4>
                    <p className="text-muted-foreground mb-2">
                      The Homepage serves as the main entry point, while the About Page offers a clear summary of the application's purpose and functionality.
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This fulfills User Story #1: "As a user, I want to see information about the GT Movies Store so I can learn more about the app and its purpose."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Responsive GUI</h4>
                    <p className="text-muted-foreground mb-2">
                      The entire front end was built using the Bootstrap framework, ensuring that all pages and features are fully responsive and provide an optimal viewing experience across a wide range of devices.
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This fulfills User Story #16: "As a user, I want the GT Movies Store to feature a responsive Graphical User Interface (GUI) so I can access it through different devices with diverse screen sizes."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Web Deployment</h4>
                    <p className="text-muted-foreground mb-2">
                      The application has been deployed to a public web server on PythonAnywhere.
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This fulfills User Story #15: "As a user, I want to be able to access the GT Movies Store from any desktop using a web browser, so I can use the app anywhere with an internet connection."
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="auth">
              <AccordionTrigger className="px-4">User Authentication</AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-foreground mb-4">A complete authentication system handles user registration and access control.</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Signup & Login Pages</h4>
                  <p className="text-muted-foreground">
                    The Signup Page allows new users to create an account. The Login Page allows registered users to securely authenticate, which in turn grants them access to personalized features like purchasing and writing reviews.
                  </p>
                  <p className="text-sm text-primary font-medium mt-2">
                    This fulfills User Story #2: "As a user, I want to register an account so that I can access the GT Movies Store."
                  </p>
                  <p className="text-sm text-primary font-medium">
                    This also fulfills User Story #3: "As a registered user, I want to log in so that I can access my account data."
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="catalog">
              <AccordionTrigger className="px-4">Movie Catalog & Discovery</AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-foreground mb-4">The core of the application is the user's ability to browse and learn about movies. 🎬</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Movie Listings Page</h4>
                    <p className="text-muted-foreground mb-2">
                      This page functions as the main catalog, displaying all available movies from the database. It includes a prominent search bar that allows users to filter the catalog by movie title.
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This fulfills User Story #4: "As a user, I want to be able to view the list of movies available in the GT Movies Store so I can make my selections."
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This also fulfills User Story #5: "As a user, I want to search movies per title so I can make my selections."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Movie Detail Page</h4>
                    <p className="text-muted-foreground mb-2">
                      Clicking a movie from the catalog leads to its detail page. This page presents comprehensive information about the film (price, description, image) and displays all user-submitted reviews.
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This fulfills User Story #13: "As a user, I want to see the details of a movie so I have the information to make my choices."
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This also fulfills User Story #12: "As a user, I want to see the reviews of a movie so I can have information on whether I should purchase a movie or not."
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ecommerce">
              <AccordionTrigger className="px-4">E-commerce Workflow</AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-foreground mb-4">The application features a complete e-commerce experience, from cart management to purchase history.</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Shopping Cart Functionality</h4>
                    <p className="text-muted-foreground mb-2">
                      On the movie detail page, users can add items to their personal Shopping Cart. The dedicated Cart Page lists all selected items and their total price, and includes a button to clear the cart's contents.
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This fulfills User Story #7: "As a user, I want to be able to add one or more items of a movie to my shopping cart so I can purchase them in the future."
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This also fulfills User Story #6: "As a user, I want to be able to access a shopping cart so I can list all movie items I am willing to purchase."
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This also fulfills User Story #9: "As a user, I want to be able to remove all movie items from my shopping cart so I can have flexibility on what I purchase or not."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Order History Page</h4>
                    <p className="text-muted-foreground mb-2">
                      For logged-in users, the "Orders" page provides a complete history of all past purchases, allowing them to track their expenses and previous selections.
                    </p>
                    <p className="text-sm text-primary font-medium">
                      This fulfills User Story #14: "As a user, I want to see a list of my orders so I can track what I have purchased and my expenses."
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reviews">
              <AccordionTrigger className="px-4">User Content Management (Reviews)</AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-foreground mb-4">Logged-in users can contribute their own content to the site through a full review management system.</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Review CRUD Operations</h4>
                  <p className="text-muted-foreground mb-2">
                    On the movie detail page, authenticated users can create reviews using a dedicated form. For reviews they have personally written, "Edit" and "Delete" buttons are conditionally rendered, giving them full control over their content.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    This fulfills User Story #8: "As a user, I want to create movie reviews so others can use my insights when searching for movies."
                  </p>
                  <p className="text-sm text-primary font-medium">
                    This also fulfills User Story #10: "As a user, I want to edit my reviews so I have the freedom to change my mind about my reviews."
                  </p>
                  <p className="text-sm text-primary font-medium">
                    This also fulfills User Story #11: "As a user, I want to delete my movie reviews so I have the freedom to change my mind about my reviews."
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="admin">
              <AccordionTrigger className="px-4">Administrator Backend</AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-foreground mb-4">A secure and powerful backend provides full administrative control over the application's data.</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Django Admin Panel</h4>
                  <p className="text-muted-foreground mb-2">
                    This single, comprehensive interface allows a logged-in administrator to perform all necessary management tasks to keep the site's information up to date.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    This fulfills User Story #17: "As an administrator, I want to be able to manage (view, create, update, or delete) users..."
                  </p>
                  <p className="text-sm text-primary font-medium">
                    This fulfills User Story #18: "As an administrator, I want to be able to manage (view, create, update, or delete) movies..."
                  </p>
                  <p className="text-sm text-primary font-medium">
                    This fulfills User Story #19: "As an administrator, I want to be able to manage (view, create, update, or delete) reviews..."
                  </p>
                  <p className="text-sm text-primary font-medium">
                    This fulfills User Story #20: "As an administrator, I want to be able to manage (view, create, update, or delete) orders..."
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Screenshots Gallery */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-center">Movie Details & Reviews</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <img 
                src={movieDetails} 
                alt="Movie detail page showing reviews and purchase options"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-center">Shopping Cart Interface</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <img 
                src={shoppingCart} 
                alt="Shopping cart page with selected items and total"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Process Description */}
      <Section id="process" variant="muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Development Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Iterative development approach following Django best practices
            </p>
          </div>

          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-accent">Foundation and Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  I began by setting up my Python virtual environment and installing Django. 
                  My initial focus was on creating the basic project structure, configuring 
                  the settings, and building the static informational pages (Home and About). 
                  This phase established the base template and static file handling that would 
                  be used throughout the project.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-accent">Building the Core with Dummy Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  To quickly prototype the movie catalog, I first built the movie list and detail 
                  pages using hard-coded "dummy data" (a Python list of dictionaries). This allowed 
                  me to focus on the front-end layout and URL routing without immediate database 
                  complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-accent">Database Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  With the front end established, I created the Movie model. I then used Django's 
                  migration system (makemigrations and migrate) to translate that model into a 
                  database table. I refactored the views to query the database using the Django 
                  QuerySet API, replacing the dummy data with dynamic content. I used the admin 
                  panel extensively during this phase to populate the database with movie information.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-accent">Implementing User Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Once the core content was database-driven, I shifted focus to user interaction. 
                  I built the accounts app for authentication, followed by the review system. 
                  The shopping cart was a key challenge, which I solved by using Django's session 
                  framework to temporarily store cart data for each user. Finally, I created the 
                  Order and Item models to permanently save purchase information.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-accent/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent">Navigating Questions and Doubts 🤔</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  My primary resource for navigating challenges was a combination of the course 
                  textbook and the official Django documentation. When I encountered a concept 
                  that needed more depth—such as customizing Django forms or understanding specific 
                  QuerySet lookups like <code className="bg-muted px-2 py-1 rounded text-sm">id__in</code>—I 
                  turned to the official documentation, which I found to be an authoritative and 
                  comprehensive resource. For debugging, Django's detailed error pages (with 
                  <code className="bg-muted px-2 py-1 rounded text-sm">DEBUG = True</code>) were 
                  invaluable. By carefully reading the tracebacks, I could quickly identify the 
                  source of an error, whether it was a logic issue in a view or a syntax error 
                  in a template.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Video Demonstration */}
      <Section id="demo" variant="default">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Video Demonstration
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Watch a comprehensive walkthrough of the GT Movies Store application
          </p>
          
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Play className="w-16 h-16 text-accent mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Video Demo Placeholder
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    This section is ready for your YouTube or Vimeo video embed. 
                    The responsive container will perfectly showcase your Django 
                    application demo with optimal video and audio quality.
                  </p>
                  <Button variant="outline" className="mt-4">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Add Video Link
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Want to see the code behind this project?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://github.com/DhruvVishalGupta/moviesstore', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open('https://dvgupta.pythonanywhere.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Live Site
              </Button>
            </div>
          </div>
        </div>
      </Section>

      

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold font-heading mb-4">Dhruv Gupta</h3>
          <p className="text-primary-foreground/80 mb-6">
            Computer Science Student | Georgia Institute of Technology
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
