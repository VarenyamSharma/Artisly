
import { FieldErrors } from "react-hook-form";
import { Languages } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { OnboardingFormData } from "@/types/onboarding";

interface LanguagesSectionProps {
  selectedLanguages: string[];
  onLanguageChange: (language: string, checked: boolean) => void;
  errors: FieldErrors<OnboardingFormData>;
}

const languages = [
  "Hindi", "English", "Tamil", "Telugu", "Marathi", 
  "Bengali", "Gujarati", "Kannada", "Malayalam", "Punjabi"
];

export const LanguagesSection = ({ selectedLanguages, onLanguageChange, errors }: LanguagesSectionProps) => {
  return (
    <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center gap-2 mb-4">
        <Languages className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold dark:text-white">Languages Spoken</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {languages.map((language) => (
          <div key={language} className="flex items-center space-x-2">
            <Checkbox
              id={language}
              checked={selectedLanguages.includes(language)}
              onCheckedChange={(checked) => onLanguageChange(language, !!checked)}
            />
            <Label htmlFor={language} className="text-sm font-medium">
              {language}
            </Label>
          </div>
        ))}
      </div>
      {errors.languages && (
        <p className="text-sm text-red-600">{errors.languages.message}</p>
      )}
    </div>
  );
};
