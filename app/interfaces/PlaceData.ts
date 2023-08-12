export default interface PlaceData {
  place_name: string | undefined;
  address: string | undefined;
  phone: string | undefined;
  website: string | undefined;
  business_status: string | undefined;
  open_now: boolean | undefined;
  hours: string[] | undefined;
  rating: number | undefined;
  rating_total: number | undefined;
  location: { lat: number; lon: number } | undefined;
  photo_references: string[] | undefined;
  reviews: Review[] | undefined;
}

export interface Review {
  author_name: string;
  profile_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}
