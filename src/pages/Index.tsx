import React from "react";
import { Header } from "@/components/Header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Play, ChevronDown } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import profilePhoto from "@/assets/profile-photo.jpg";
// Import generated images
// Note: Only profile photo is used on this page currently

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
              Computer Engineering Student at Georgia Institute of Technology
            </p>
            
            <div className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed space-y-4">
              <p>
                Hello! I'm Dhruv Gupta, a second-year Computer Engineering student at Georgia Tech. 
                My threads are Sys Arch and Distributed Systems. I'm interested in AI, robotics, and cloud computing.
              </p>
              <p>
                This web portfolio is a showcase of one of my projects, the GT Movies Store web app made for CS2340. It is also to serve as a way to show my skills in web-development.
              </p>
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
        </div>

        <div className="mb-16">
          <div className="space-y-6 max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-foreground">
              The GT Movies Store project is a full-stack web app made using Python and a Django 5 framework. The goal of the web-app is to
              act as an online platform where anyone can browse a set of movies, create and read reviews, and be able to purchase movies through a purchasing and shopping-cart system.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground">
              The application was built with MVT architecture, which helped to separate the different models, business logic, and the user interface into different, but still manageable, components.
            </p>
          </div>
          
        </div>

        {/* Feature Breakdown */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-bold font-heading text-primary">Feature Breakdown</h3>
          <Accordion type="multiple" className="rounded-lg border bg-card">
            <AccordionItem value="informational">
              <AccordionTrigger className="px-4">Informational Pages & Application-Wide Features</AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Homepage & About Page</h4>
                    <p className="text-muted-foreground mb-2 font-semibold">
                      The Homepage is the landing page for the user, while the About Page offers context for the website's purpose and usage.
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #1: "As a user, I want to see information about the GT Movies Store so I can learn more about the app and its purpose."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Responsive GUI</h4>
                    <p className="text-muted-foreground mb-2 font-semibold">
                      The entire front end was built using the Bootstrap framework, this ensured that all the webpages were quick and responsive for a user.
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #16: "As a user, I want the GT Movies Store to feature a responsive Graphical User Interface (GUI) so I can access it through different devices with diverse screen sizes."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Web Deployment</h4>
                    <p className="text-muted-foreground mb-2 font-semibold">
                      The application is deployed to a public web server on PythonAnywhere.
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #15: "As a user, I want to be able to access the GT Movies Store from any desktop using a web browser, so I can use the app anywhere with an internet connection."
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="auth">
              <AccordionTrigger className="px-4">User Authentication</AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Signup & Login Pages</h4>
                  <p className="text-muted-foreground font-semibold">
                    The Signup Page allows new users to create an account. The Login Page allows registered users to authenticate, which lets them use features like purchasing and writing reviews.
                  </p>
                  <p className="text-sm text-primary font-light mt-2">
                    Fulfills User Story #2: "As a user, I want to register an account so that I can access the GT Movies Store."
                  </p>
                  <p className="text-sm text-primary font-light">
                    Fulfills User Story #3: "As a registered user, I want to log in so that I can access my account data."
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="catalog">
              <AccordionTrigger className="px-4">Movie Catalog</AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Movie Listings Page</h4>
                    <p className="text-muted-foreground mb-2 font-semibold">
                      This page functions as the main catalog, displaying all available movies from the database. It also has a search bar to filter the movies shown.
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #4: "As a user, I want to be able to view the list of movies available in the GT Movies Store so I can make my selections."
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #5: "As a user, I want to search movies per title so I can make my selections."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Movie Detail Page</h4>
                    <p className="text-muted-foreground mb-2 font-semibold">
                      Clicking a movie from the catalog leads to its detail page. It has information about the film such as price, description, image and displays all reviews.
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #13: "As a user, I want to see the details of a movie so I have the information to make my choices."
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #12: "As a user, I want to see the reviews of a movie so I can have information on whether I should purchase a movie or not."
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ecommerce">
              <AccordionTrigger className="px-4">E-commerce Workflow</AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Shopping Cart</h4>
                    <p className="text-muted-foreground mb-2 font-semibold">
                      On the movie detail page, users can add items to their personal Shopping Cart. The Cart Page lists all items intended for purchase and their total price, and even includes a button to clear the cart.
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #7: "As a user, I want to be able to add one or more items of a movie to my shopping cart so I can purchase them in the future."
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #6: "As a user, I want to be able to access a shopping cart so I can list all movie items I am willing to purchase."
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #9: "As a user, I want to be able to remove all movie items from my shopping cart so I can have flexibility on what I purchase or not."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-1">Order History Page</h4>
                    <p className="text-muted-foreground mb-2 font-semibold">
                      For logged-in users, the "Orders" page provides a complete history of all past purchases, allowing them to track their expenses and previous selections.
                    </p>
                    <p className="text-sm text-primary font-light">
                      Fulfills User Story #14: "As a user, I want to see a list of my orders so I can track what I have purchased and my expenses."
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reviews">
              <AccordionTrigger className="px-4">Reviews</AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Review CRUD Operations</h4>
                  <p className="text-muted-foreground mb-2 font-semibold">
                    On the movie detail page, logged-in users can create reviews. For reviews they've given, they can edit and delete.
                  </p>
                  <p className="text-sm text-primary font-light">
                    Fulfills User Story #8: "As a user, I want to create movie reviews so others can use my insights when searching for movies."
                  </p>
                  <p className="text-sm text-primary font-light">
                    Fulfills User Story #10: "As a user, I want to edit my reviews so I have the freedom to change my mind about my reviews."
                  </p>
                  <p className="text-sm text-primary font-light">
                    Fulfills User Story #11: "As a user, I want to delete my movie reviews so I have the freedom to change my mind about my reviews."
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="admin">
              <AccordionTrigger className="px-4">Administrator Backend</AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Django Admin Panel</h4>
                  <p className="text-muted-foreground mb-2 font-semibold">
                    The administrator backend interface allows an administrator to manage users, movies, reviews, and orders.
                  </p>
                  <p className="text-sm text-primary font-light">
                    Fulfills User Story #17: "As an administrator, I want to be able to manage (view, create, update, or delete) users..."
                  </p>
                  <p className="text-sm text-primary font-light">
                    Fulfills User Story #18: "As an administrator, I want to be able to manage (view, create, update, or delete) movies..."
                  </p>
                  <p className="text-sm text-primary font-light">
                    Fulfills User Story #19: "As an administrator, I want to be able to manage (view, create, update, or delete) reviews..."
                  </p>
                  <p className="text-sm text-primary font-light">
                    Fulfills User Story #20: "As an administrator, I want to be able to manage (view, create, update, or delete) orders..."
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>


      </Section>

      {/* Process Description */}
      <Section id="process" variant="muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              Development Process (following the Textbook)
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-accent">Foundation and Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  I began by setting up my Python virtual environment and installing Django. 
                  At first, I wokred on creating the project structure, configuring 
                  the settings, and building the static home and about pages. 
                  This phase was important because it set up parts of the project that would be used throughout the project.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-accent">Mock Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  To start prototyping the movie catalog, I first built the movie list and detail 
                  pages using hard-coded mock data using dictionaries. This let me work on the front-end layout and URL routing without needing to set up the database yet.
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
                  migration system (makemigrations and migrate) to turn that model into a 
                  database table. I restructured the views to query the database using the Django 
                  QuerySet API, using dynamic data instead of the hard-coded mock data. I also used the admin panel to add movies to the database.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-accent">Adding User Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Once the everything was database-driven, I started working on user interaction. 
                  I made the accounts app for authentication and then the review system and shopping cart. Finally, I created the 
                  Order and Item models to permanently save purchase information.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-accent/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent">Navigating Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  My main resource for navigating challenges was the textbook and ChatGPT. When I came across a concept 
                  that needed more depth, like customizing Django forms I used official Django documentation. For some situations, asking a peer in the class was helpful as well.
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
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://github.com/DhruvVishalGupta/moviesstore" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const newWindow = window.open('https://dvgupta.pythonanywhere.com', '_blank', 'noopener,noreferrer');
                  if (newWindow) newWindow.focus();
                }}
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
        </div>
      </footer>
    </div>
  );
};

export default Index;
