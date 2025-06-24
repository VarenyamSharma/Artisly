
import { UseFormRegister } from "react-hook-form";
import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OnboardingFormData } from "@/types/onboarding";

interface ProfileImageSectionProps {
  register: UseFormRegister<OnboardingFormData>;
}

export const ProfileImageSection = ({ register }: ProfileImageSectionProps) => {
  return (
    <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-2 mb-4">
        <Upload className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold dark:text-white">Profile Image (Optional)</h3>
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
  );
};
