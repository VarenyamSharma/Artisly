
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-up">
          <Badge className="mb-6 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 animate-scale-in">
            🎭 India's Premier Artist Booking Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Connect with
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Amazing Artists
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-slide-in-left">
            Artistly brings together talented performers and event planners. 
            Discover incredible artists for your events or showcase your talent to the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <Link to="/artists">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Explore Artists
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/onboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-purple-200 hover:bg-purple-50 hover:scale-105 transition-all duration-200">
                Join as Artist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
