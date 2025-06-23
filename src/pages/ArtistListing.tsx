
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Music, MapPin, Star, Filter, Grid, List } from "lucide-react";

interface Artist {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  priceRange: string;
  priceMin: number;
  priceMax: number;
  image: string;
  bio: string;
}

const ArtistListing = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const mockArtists: Artist[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      category: "Singer",
      location: "Mumbai",
      rating: 4.9,
      priceRange: "₹15,000 - ₹25,000",
      priceMin: 15000,
      priceMax: 25000,
      image: "/placeholder.svg",
      bio: "Professional vocalist with 10+ years experience"
    },
    {
      id: 2,
      name: "Dance Collective",
      category: "Dancers",
      location: "Delhi",
      rating: 4.8,
      priceRange: "₹20,000 - ₹35,000",
      priceMin: 20000,
      priceMax: 35000,
      image: "/placeholder.svg",
      bio: "Contemporary dance group specializing in corporate events"
    },
    {
      id: 3,
      name: "The Jazz Band",
      category: "Musicians",
      location: "Bangalore",
      rating: 4.9,
      priceRange: "₹25,000 - ₹45,000",
      priceMin: 25000,
      priceMax: 45000,
      image: "/placeholder.svg",
      bio: "Jazz ensemble perfect for intimate venues"
    },
    {
      id: 4,
      name: "DJ Rhythm",
      category: "DJs",
      location: "Mumbai",
      rating: 4.7,
      priceRange: "₹18,000 - ₹30,000",
      priceMin: 18000,
      priceMax: 30000,
      image: "/placeholder.svg",
      bio: "Electronic music specialist for parties and events"
    },
    {
      id: 5,
      name: "Classical Quartet",
      category: "Musicians",
      location: "Chennai",
      rating: 4.8,
      priceRange: "₹22,000 - ₹40,000",
      priceMin: 22000,
      priceMax: 40000,
      image: "/placeholder.svg",
      bio: "Traditional and contemporary classical music"
    },
    {
      id: 6,
      name: "Bollywood Beats",
      category: "Dancers",
      location: "Delhi",
      rating: 4.6,
      priceRange: "₹16,000 - ₹28,000",
      priceMin: 16000,
      priceMax: 28000,
      image: "/placeholder.svg",
      bio: "Energetic Bollywood dance performances"
    }
  ];

  const categories = ['all', 'Singer', 'Dancers', 'Musicians', 'DJs'];
  const locations = ['all', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai'];
  const priceRanges = [
    { value: 'all', label: 'All Price Ranges' },
    { value: '0-20000', label: 'Under ₹20,000' },
    { value: '20000-30000', label: '₹20,000 - ₹30,000' },
    { value: '30000-50000', label: '₹30,000 - ₹50,000' },
    { value: '50000+', label: 'Above ₹50,000' }
  ];

  const filteredArtists = mockArtists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || artist.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || artist.location === selectedLocation;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(p => p.replace('+', ''));
      const priceMin = parseInt(min);
      const priceMax = max ? parseInt(max) : Infinity;
      matchesPrice = artist.priceMin >= priceMin && (priceMax === Infinity || artist.priceMax <= priceMax);
    }

    return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Artistly
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link to="/artists" className="text-purple-600 font-semibold">
                Browse Artists
              </Link>
              <Link to="/onboard" className="text-gray-700 hover:text-purple-600 transition-colors">
                Join as Artist
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Artists
          </h1>
          <p className="text-xl text-gray-600">
            Find the perfect performer for your next event
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <Input
                placeholder="Search artists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="All Price Ranges" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map(range => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Showing {filteredArtists.length} of {mockArtists.length} artists
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Artists Grid/List */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-4"
        }>
          {filteredArtists.map((artist) => (
            <Card key={artist.id} className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden ${
              viewMode === 'list' ? 'flex flex-row' : ''
            }`}>
              <div className={`${viewMode === 'list' ? 'w-48 h-32' : 'aspect-video'} bg-gradient-to-br from-purple-100 to-blue-100 relative`}>
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
              <div className={viewMode === 'list' ? 'flex-1' : ''}>
                <CardHeader className={viewMode === 'list' ? 'pb-2' : ''}>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{artist.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">{artist.location}</span>
                      </div>
                      {viewMode === 'list' && (
                        <CardDescription className="mt-2">{artist.bio}</CardDescription>
                      )}
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
              </div>
            </Card>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No artists found matching your criteria</p>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedLocation('all');
              setSelectedPriceRange('all');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistListing;
