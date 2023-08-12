export default interface Review {
  id: number;
  review_title: string;
  review_text: string;
  place_id: string;
  place_name: string;
  review_rating: number;
  username: string;
  posted_on: Date;
}
