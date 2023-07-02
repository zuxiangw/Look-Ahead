export default interface PlaceData {
  place_name: string;
  address: string;
  phone: string;
  website: string;
  business_status: string;
  open_now: boolean;
  hours: string[];
  rating: number;
  rating_total: number;
  photos: string[];
  reviews: Review[];
}

interface Review {
  author_name: string;
  profile_url: string;
  rating: number;
  time_ago: string;
  text: string;
}
