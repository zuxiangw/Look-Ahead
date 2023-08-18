import { RowDataPacket } from "mysql2";

export interface User extends RowDataPacket {
  id: number;
  username: string;
  email: string;
  password_hash: string;
}

export interface Token extends RowDataPacket {
  id: number;
  user_id: number;
  token_type: string;
  token_value: string;
  created_at: Date;
  expires_at: Date;
}

export interface Review extends RowDataPacket {
  id: number;
  user_id: number;
  place_id: number;
  place_name: string;
  review_title: string;
  review_text: string;
  review_rating: number;
  posted_on: Date;
}
