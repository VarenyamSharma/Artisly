
export interface OnboardingFormData {
  name: string;
  bio: string;
  location: string;
  feeRange: string;
  profileImage?: FileList;
  categories: string[];
  languages: string[];
}
