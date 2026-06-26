export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  metric?: {
    value: string;
    label: string;
  };
}