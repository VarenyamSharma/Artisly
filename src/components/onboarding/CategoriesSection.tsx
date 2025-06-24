
import { FieldErrors } from "react-hook-form";
import { Tag } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { OnboardingFormData } from "@/types/onboarding";

interface CategoriesSectionProps {
  selectedCategories: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
  errors: FieldErrors<OnboardingFormData>;
}

const categories = [
  "Singer", "Dancers", "Musicians", "DJs", "Comedians", 
  "Speakers", "Magicians", "Bands", "Instrumentalists"
];

export const CategoriesSection = ({ selectedCategories, onCategoryChange, errors }: CategoriesSectionProps) => {
  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold dark:text-white">Performance Categories</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={category}
              checked={selectedCategories.includes(category)}
              onCheckedChange={(checked) => onCategoryChange(category, !!checked)}
            />
            <Label htmlFor={category} className="text-sm font-medium">
              {category}
            </Label>
          </div>
        ))}
      </div>
      {errors.categories && (
        <p className="text-sm text-red-600">{errors.categories.message}</p>
      )}
    </div>
  );
};
