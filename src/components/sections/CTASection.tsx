
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 animate-fade-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-in-left">
          Ready to Find Your Perfect Artist?
        </h2>
        <p className="text-xl text-purple-100 mb-10 animate-slide-in-right">
          Join thousands of event planners who trust Artistly for their entertainment needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Link to="/artists">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Browse Artists Now
            </Button>
          </Link>
          <Link to="/onboard">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 hover:scale-105 transition-all duration-200">
              List Your Talent
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
