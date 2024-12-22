export interface PropertyOutputDto {
  property_id: string;
  property_name: string;
  address: string;
  description: string;
  rooms: number;
  bathrooms: number;
  ameneties: string;
  rules: string[];
  owner_id: number;
  status: { type: number; key: string };
}
