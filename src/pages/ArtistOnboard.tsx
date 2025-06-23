
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Music, Upload, User, MapPin, DollarSign, Languages, Tag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OnboardingFormData {
  name: string;
  bio: string;
  location: string;
  feeRange: string;
  profileImage?: FileList;
  categories: string[];
  languages: string[];
}

const ArtistOnboard = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<OnboardingFormData>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const { toast } = useToast();

  const categories = [
    "Singer", "Dancers", "Musicians", "DJs", "Comedians", 
    "Speakers", "Magicians", "Bands", "Instrumentalists"
  ];

  const languages = [
    "Hindi", "English", "Tamil", "Telugu", "Marathi", 
    "Bengali", "Gujarati", "Kannada", "Malayalam", "Punjabi"
  ];

  const feeRanges = [
    "₹5,000 - ₹15,000",
    "₹15,000 - ₹25,000", 
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000+"
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    setSelectedCategories(updated);
    setValue('categories', updated);
  };

  const handleLanguageChange = (language: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedLanguages, language]
      : selectedLanguages.filter(l => l !== language);
    setSelectedLanguages(updated);
    setValue('languages', updated);
  };

  const onSubmit = (data: OnboardingFormData) => {
    console.log('Form submitted:', { ...data, categories: selectedCategories, languages: selectedLanguages });
    toast({
      title: "Application Submitted!",
      description: "Your artist profile has been submitted for review. We'll get back to you within 24 hours.",
    });
  };

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
              <Link to="/artists" className="text-gray-700 hover:text-purple-600 transition-colors">
                Browse Artists
              </Link>
              <Link to="/onboard" className="text-purple-600 font-semibold">
                Join as Artist
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Artist Community
          </h1>
          <p className="text-xl text-gray-600">
            Create your profile and start getting bookings for your performances
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Artist Registration Form</CardTitle>
            <CardDescription>
              Fill out the details below to create your artist profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Artist/Band Name *</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Enter your stage name"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      {...register("location", { required: "Location is required" })}
                      placeholder="City, State"
                    />
                    {errors.location && (
                      <p className="text-sm text-red-600">{errors.location.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio/Description *</Label>
                  <Textarea
                    id="bio"
                    {...register("bio", { required: "Bio is required" })}
                    placeholder="Tell us about your performance style, experience, and what makes you unique..."
                    rows={4}
                  />
                  {errors.bio && (
                    <p className="text-sm text-red-600">{errors.bio.message}</p>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Performance Categories</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
                      />
                      <Label htmlFor={category} className="text-sm font-medium">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
                {selectedCategories.length === 0 && (
                  <p className="text-sm text-gray-500">Please select at least one category</p>
                )}
              </div>

              {/* Languages */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Languages Spoken</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {languages.map((language) => (
                    <div key={language} className="flex items-center space-x-2">
                      <Checkbox
                        id={language}
                        checked={selectedLanguages.includes(language)}
                        onCheckedChange={(checked) => handleLanguageChange(language, !!checked)}
                      />
                      <Label htmlFor={language} className="text-sm font-medium">
                        {language}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Range */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Fee Range</h3>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="feeRange">Expected Fee Range per Performance *</Label>
                  <Select onValueChange={(value) => setValue('feeRange', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your fee range" />
                    </SelectTrigger>
                    <SelectContent>
                      {feeRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Profile Image */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Upload className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Profile Image (Optional)</h3>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="profileImage">Upload your profile photo</Label>
                  <Input
                    id="profileImage"
                    type="file"
                    accept="image/*"
                    {...register("profileImage")}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                  />
                  <p className="text-sm text-gray-500">
                    Accepted formats: JPG, PNG, GIF (Max size: 5MB)
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg"
                >
                  Submit Application
                </Button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArtistOnboard;
