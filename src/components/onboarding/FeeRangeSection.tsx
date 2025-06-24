
import { UseFormSetValue, FieldErrors } from "react-hook-form";
import { DollarSign } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { OnboardingFormData } from "@/types/onboarding";

interface FeeRangeSectionProps {
  setValue: UseFormSetValue<OnboardingFormData>;
  errors: FieldErrors<OnboardingFormData>;
}

const feeRanges = [
  "₹5,000 - ₹15,000",
  "₹15,000 - ₹25,000", 
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+"
];

export const FeeRangeSection = ({ setValue, errors }: FeeRangeSectionProps) => {
  return (
    <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold dark:text-white">Fee Range</h3>
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
        {errors.feeRange && (
          <p className="text-sm text-red-600">{errors.feeRange.message}</p>
        )}
      </div>
    </div>
  );
};
