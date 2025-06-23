import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Music, Search, Filter, MapPin, Star, Users } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface Artist {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  priceRange: string;
  image: string;
  description: string;
  languages: string[];
}

const artistData: Artist[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    category: "Singer",
    location: "Mumbai, India",
    rating: 4.9,
    priceRange: "₹15,000 - ₹25,000",
    image: "/placeholder.svg",
    description: "Versatile vocalist with experience in Bollywood, jazz, and pop.",
    languages: ["Hindi", "English"]
  },
  {
    id: 2,
    name: "Dance Collective",
    category: "Dancers",
    location: "Delhi, India",
    rating: 4.8,
    priceRange: "₹20,000 - ₹35,000",
    image: "/placeholder.svg",
    description: "Dynamic dance group specializing in contemporary and classical Indian dance forms.",
    languages: ["Hindi", "English", "Punjabi"]
  },
  {
    id: 3,
    name: "The Jazz Band",
    category: "Musicians",
    location: "Bangalore, India",
    rating: 4.9,
    priceRange: "₹25,000 - ₹45,000",
    image: "/placeholder.svg",
    description: "A premier jazz ensemble perfect for upscale events and corporate functions.",
    languages: ["English"]
  },
  {
    id: 4,
    name: "DJ Rhythm",
    category: "DJs",
    location: "Mumbai, India",
    rating: 4.7,
    priceRange: "₹18,000 - ₹30,000",
    image: "/placeholder.svg",
    description: "Experienced DJ providing high-energy sets for weddings, parties, and clubs.",
    languages: ["Hindi", "English", "Marathi"]
  },
  {
    id: 5,
    name: "Comedy Central",
    category: "Comedians",
    location: "Pune, India",
    rating: 4.6,
    priceRange: "₹12,000 - ₹20,000",
    image: "/placeholder.svg",
    description: "Stand-up comedian delivering hilarious performances for corporate events and private parties.",
    languages: ["Hindi", "Marathi"]
  },
  {
    id: 6,
    name: "Acoustic Harmony",
    category: "Musicians",
    location: "Chennai, India",
    rating: 4.5,
    priceRange: "₹16,000 - ₹28,000",
    image: "/placeholder.svg",
    description: "Acoustic duo creating soothing melodies for intimate gatherings and restaurant settings.",
    languages: ["Tamil", "English"]
  },
  {
    id: 7,
    name: "Bollywood Beats",
    category: "Bands",
    location: "Kolkata, India",
    rating: 4.9,
    priceRange: "₹30,000 - ₹50,000",
    image: "/placeholder.svg",
    description: "High-energy Bollywood band performing the latest hits and classic favorites.",
    languages: ["Hindi", "Bengali"]
  },
  {
    id: 8,
    name: "Classical Rhythms",
    category: "Instrumentalists",
    location: "Jaipur, India",
    rating: 4.8,
    priceRange: "₹14,000 - ₹24,000",
    image: "/placeholder.svg",
    description: "Classical instrumentalist providing elegant music for weddings and formal events.",
    languages: ["Hindi", "English"]
  },
  {
    id: 9,
    name: "Fusion Fiesta",
    category: "Bands",
    location: "Hyderabad, India",
    rating: 4.7,
    priceRange: "₹22,000 - ₹38,000",
    image: "/placeholder.svg",
    description: "Fusion band blending Indian and Western musical styles for a unique performance.",
    languages: ["Telugu", "Hindi", "English"]
  },
  {
    id: 10,
    name: "Magic Mike",
    category: "Magicians",
    location: "Chandigarh, India",
    rating: 4.6,
    priceRange: "₹10,000 - ₹18,000",
    image: "/placeholder.svg",
    description: "Magician specializing in close-up magic and stage illusions for all ages.",
    languages: ["Hindi", "English", "Punjabi"]
  }
];

const ArtistListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [priceRange, setPriceRange] = useState([5000, 100000]);
  const [minRating, setMinRating] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const filteredArtists = artistData.filter((artist) => {
    const searchMatch = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedCategory === "all" || artist.category === selectedCategory;
    const locationMatch = selectedLocation === "all" || artist.location.includes(selectedLocation);
    const priceMatch = artist.priceRange
      .split(" - ")
      .map((price) => parseInt(price.replace(/[₹,]/g, "")))
      .every((price, index) =>
        index === 0 ? price >= priceRange[0] : price <= priceRange[1]
      );
    const ratingMatch = minRating === "all" || artist.rating >= parseFloat(minRating);

    return searchMatch && categoryMatch && locationMatch && priceMatch && ratingMatch;
  }).sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      case "price":
        const priceA = parseInt(a.priceRange.split(" - ")[0].replace(/[₹,]/g, ""));
        const priceB = parseInt(b.priceRange.split(" - ")[0].replace(/[₹,]/g, ""));
        return priceA - priceB;
      case "location":
        return a.location.localeCompare(b.location);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Artistly
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:scale-105">
                Home
              </Link>
              <Link to="/artists" className="text-purple-600 dark:text-purple-400 font-semibold">
                Browse Artists
              </Link>
              <Link to="/onboard" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:scale-105">
                Join as Artist
              </Link>
              <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:scale-105">
                Dashboard
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" className="hidden sm:inline-flex hover:scale-105 transition-transform duration-200">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-200">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Amazing Artists
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find the perfect performer for your next event
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 animate-slide-in-left">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Artist name or keyword..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Singer">Singers</SelectItem>
                      <SelectItem value="Dancers">Dancers</SelectItem>
                      <SelectItem value="Musicians">Musicians</SelectItem>
                      <SelectItem value="DJs">DJs</SelectItem>
                      <SelectItem value="Comedians">Comedians</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Mumbai">Mumbai</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Bangalore">Bangalore</SelectItem>
                      <SelectItem value="Chennai">Chennai</SelectItem>
                      <SelectItem value="Pune">Pune</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Fee Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100000}
                    min={5000}
                    step={5000}
                    className="w-full"
                  />
                </div>

                {/* Rating Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Minimum Rating</label>
                  <Select value={minRating} onValueChange={setMinRating}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Rating</SelectItem>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      <SelectItem value="4.0">4.0+ Stars</SelectItem>
                      <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artists Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6 animate-slide-in-right">
              <p className="text-gray-600 dark:text-gray-300">
                {filteredArtists.length} artists found
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredArtists.map((artist, index) => (
                <Card 
                  key={artist.id} 
                  className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden hover:scale-105 animate-fade-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 relative overflow-hidden">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 animate-slide-in-right">
                      <Badge className="bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300">
                        {artist.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl dark:text-white">{artist.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{artist.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold dark:text-white">{artist.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                        {artist.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {artist.languages.slice(0, 3).map((lang) => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                        {artist.languages.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{artist.languages.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="font-semibold text-purple-600 dark:text-purple-400">{artist.priceRange}</span>
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 transition-all duration-200">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 animate-fade-in">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-purple-600 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistListing;
