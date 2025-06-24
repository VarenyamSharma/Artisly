
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  bio: yup.string().required("Bio is required").min(10, "Bio must be at least 10 characters"),
  location: yup.string().required("Location is required"),
  feeRange: yup.string().required("Fee range is required"),
  profileImage: yup.mixed().optional(),
  categories: yup.array().of(yup.string().required()).min(1, "Please select at least one category").required("Categories are required"),
  languages: yup.array().of(yup.string().required()).min(1, "Please select at least one language").required("Languages are required"),
});
