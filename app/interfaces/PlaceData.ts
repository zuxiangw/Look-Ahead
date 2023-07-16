export default interface PlaceData {
  place_name: string;
  address: string;
  phone: string;
  website: string;
  business_status: string;
  open_now: boolean | undefined;
  hours: string[];
  rating: number;
  rating_total: number;
  location: { lat: number | undefined; lon: number | undefined };
  photo_references: string[] | undefined;
  reviews: Review[] | undefined;
}

export interface Review {
  author_name: string;
  profile_url: string;
  rating: number;
  time_ago: string;
  text: string;
}
