import React from "react";
import { Header } from "@/components/Header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, ChevronDown } from "lucide-react";

// Import generated images
import profilePhoto from "@/assets/profile-photo.jpg";
import moviesHomepage from "@/assets/movies-homepage.jpg";
import movieDetails from "@/assets/movie-details.jpg";
import shoppingCart from "@/assets/shopping-cart.jpg";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-card hover:shadow-gold-glow/20 transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary">User Authentication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Complete signup, login, and logout system with session management. 
                Dynamic navigation updates based on authentication status.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-gold-glow/20 transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary">Movie Catalog & Search</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Browse comprehensive movie catalog with dynamic search functionality. 
                Filter movies by title with real-time results.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-gold-glow/20 transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary">Review System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Full CRUD operations for movie reviews. Users can create, edit, and 
                delete their own reviews with proper permissions.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-gold-glow/20 transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary">Shopping Cart</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Persistent shopping cart using Django sessions. Add quantities, 
                manage items, and proceed to checkout seamlessly.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-gold-glow/20 transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary">Order Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Complete order history tracking. Users can view all past purchases 
                with detailed item breakdown and timestamps.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-gold-glow/20 transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary">Admin Panel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Django's powerful built-in admin interface for full CRUD operations 
                on all models - users, movies, reviews, and orders.
              </p>
            </CardContent>
          </Card>
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
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
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
