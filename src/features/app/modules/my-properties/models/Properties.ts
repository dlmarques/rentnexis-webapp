export type GetAllPropertiesInputDto = Array<{
  propertyId: string;
  propertyName: string;
  address: string;
  description: string;
  rooms: number;
  bathrooms: number;
  ameneties: string;
  rules: string[];
  owner_id: number;
  status: { type: number; key: string };
}>;

export interface PropertyOutputDto {
  propertyName: string;
  address: string;
  description: string;
  rooms: string;
  bathrooms: string;
  amenities: string;
  rules: string;
}
