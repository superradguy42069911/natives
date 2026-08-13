import raw from "./installations.json";

export interface InstallationLocation {
  neighborhood: string;
  council_district: string;
  lat: number;
  lng: number;
  precision: string;
}

export interface Installation {
  id: string;
  name: string;
  type: string;
  techniques: string[];
  location: InstallationLocation;
  description: string;
  water_zone_notes: string;
  source_type: string;
  installed_year: number;
  visible_from_street: boolean;
  photos: string[];
  visitor_notes: string;
  attribution: string;
  consent_confirmed: boolean;
}

export const installations: Installation[] = raw.installations as Installation[];
