
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic2, Music, Users, Radio } from "lucide-react";

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

export const ArtistCategoriesSection = () => {
  return (
    <section className="py-20 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the perfect artists for your event across various performance categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artistCategories.map((category, index) => (
            <Link key={category.id} to="/artists" className="group">
              <Card className={`h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group-hover:scale-105 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110`}>
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
  );
};
