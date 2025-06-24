
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, MapPin } from "lucide-react";

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

export const FeaturedArtistsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Artists
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover some of our top-rated performers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArtists.map((artist, index) => (
            <Card key={artist.id} className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden hover:scale-105 animate-fade-up`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 animate-slide-in-right">
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
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-200">
                    Ask for Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in">
          <Link to="/artists">
            <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 hover:scale-105 transition-all duration-200">
              View All Artists
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
