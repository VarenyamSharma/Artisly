
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic2, Music, Users, Radio, ArrowRight, Star, MapPin, Calendar } from "lucide-react";

const Index = () => {
  const artistCategories = [
    {
      id: 1,
      name: "Singers",
      icon: Mic2,
      description: "Professional vocalists for all genres",
      count: "150+ Artists",
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 2,
      name: "Dancers",
      icon: Users,
      description: "Choreographers and dance performers",
      count: "200+ Artists",
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 3,
      name: "Musicians",
      icon: Music,
      description: "Instrumentalists and bands",
      count: "180+ Artists",
      color: "bg-green-100 text-green-600"
    },
    {
      id: 4,
      name: "DJs",
      icon: Radio,
      description: "Professional DJs for all occasions",
      count: "120+ Artists",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const featuredArtists = [
    {
      id: 1,
      name: "Sarah Johnson",
      category: "Singer",
      location: "Mumbai, India",
      rating: 4.9,
      priceRange: "₹15,000 - ₹25,000",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Dance Collective",
      category: "Dancers",
      location: "Delhi, India",
      rating: 4.8,
      priceRange: "₹20,000 - ₹35,000",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "The Jazz Band",
      category: "Musicians",
      location: "Bangalore, India",
      rating: 4.9,
      priceRange: "₹25,000 - ₹45,000",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Artistly
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link to="/artists" className="text-gray-700 hover:text-purple-600 transition-colors">
                Browse Artists
              </Link>
              <Link to="/onboard" className="text-gray-700 hover:text-purple-600 transition-colors">
                Join as Artist
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors">
                Dashboard
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
              🎭 India's Premier Artist Booking Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect with
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Amazing Artists
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Artistly brings together talented performers and event planners. 
              Discover incredible artists for your events or showcase your talent to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/artists">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3">
                  Explore Artists
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/onboard">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-purple-200 hover:bg-purple-50">
                  Join as Artist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Categories */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect artists for your event across various performance categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artistCategories.map((category) => (
              <Link key={category.id} to="/artists" className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group-hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="text-sm">
                      {category.count}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Artists
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover some of our top-rated performers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <Card key={artist.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 relative">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-700">
                      {artist.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{artist.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">{artist.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{artist.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-purple-600">{artist.priceRange}</span>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Ask for Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/artists">
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
                View All Artists
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Artist?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Join thousands of event planners who trust Artistly for their entertainment needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/artists">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3">
                Browse Artists Now
              </Button>
            </Link>
            <Link to="/onboard">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                List Your Talent
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Artistly</span>
              </div>
              <p className="text-gray-400">
                Connecting talented artists with amazing events across India.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Event Planners</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/artists" className="hover:text-white transition-colors">Browse Artists</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Artists</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/onboard" className="hover:text-white transition-colors">Join Platform</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Artist Dashboard</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Artistly. All rights reserved. Built for Frontend Developer Assignment.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
