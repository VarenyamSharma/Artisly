import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/ThemeToggle";
import { OnboardingFormData } from "@/types/onboarding";
import { BasicInfoSection } from "@/components/onboarding/BasicInfoSection";
import { CategoriesSection } from "@/components/onboarding/CategoriesSection";
import { LanguagesSection } from "@/components/onboarding/LanguagesSection";
import { FeeRangeSection } from "@/components/onboarding/FeeRangeSection";
import { ProfileImageSection } from "@/components/onboarding/ProfileImageSection";
import { validationSchema } from "@/utils/onboardingValidation";

const ArtistOnboard = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<OnboardingFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      feeRange: "",
      categories: [],
      languages: [],
    }
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const { toast } = useToast();

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

  const onSubmit: SubmitHandler<OnboardingFormData> = (data) => {
    console.log('Form submitted:', { ...data, categories: selectedCategories, languages: selectedLanguages });
    toast({
      title: "Application Submitted!",
      description: "Your artist profile has been submitted for review. We'll get back to you within 24 hours.",
    });
  };

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
              <Link to="/artists" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:scale-105">
                Browse Artists
              </Link>
              <Link to="/onboard" className="text-purple-600 dark:text-purple-400 font-semibold">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Artist Community
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Create your profile and start getting bookings for your performances
          </p>
        </div>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl animate-scale-in">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl dark:text-white">Artist Registration Form</CardTitle>
            <CardDescription className="dark:text-gray-300">
              Fill out the details below to create your artist profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <BasicInfoSection register={register} errors={errors} />
              
              <CategoriesSection 
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                errors={errors}
              />
              
              <LanguagesSection 
                selectedLanguages={selectedLanguages}
                onLanguageChange={handleLanguageChange}
                errors={errors}
              />
              
              <FeeRangeSection setValue={setValue} errors={errors} />
              
              <ProfileImageSection register={register} />

              {/* Submit Button */}
              <div className="pt-6 animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg hover:scale-105 transition-all duration-200"
                >
                  Submit Application
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
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
