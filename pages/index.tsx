// interfaces/index.ts

export interface CardProps {
  // Placeholder for card-specific properties
  title?: string;
  description?: string;
  imageUrl?: string;
  // Add more properties as needed
}

export interface ButtonProps {
  // Placeholder for button-specific properties
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  // Add more properties as needed
}


//Constants for API end points
// constants/index.ts

export const API_URL = 'https://your-api-endpoint.com';

export const UI_TEXT = {
  CARD_TITLE: 'Property Details',
  BOOK_NOW_BUTTON: 'Book Now',
  DETAILS_BUTTON: 'Details',
};