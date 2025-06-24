
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { OnboardingFormData } from "@/types/onboarding";

interface BasicInfoSectionProps {
  register: UseFormRegister<OnboardingFormData>;
  errors: FieldErrors<OnboardingFormData>;
}

export const BasicInfoSection = ({ register, errors }: BasicInfoSectionProps) => {
  return (
    <div className="space-y-6 animate-slide-in-left">
      <div className="flex items-center gap-2 mb-4">
        <User className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold dark:text-white">Basic Information</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Artist/Band Name *</Label>
          <Input
            id="name"
            {...register("name")}
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
            {...register("location")}
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
          {...register("bio")}
          placeholder="Tell us about your performance style, experience, and what makes you unique..."
          rows={4}
        />
        {errors.bio && (
          <p className="text-sm text-red-600">{errors.bio.message}</p>
        )}
      </div>
    </div>
  );
};
