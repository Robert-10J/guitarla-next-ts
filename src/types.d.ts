export interface Guitars {
  guitars: Guitar[]
}

export interface Guitar {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  description: string
  price: number
  url: string
  image: Image
}

export interface Attribute {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Format;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata: Provider_metadata;
  createdAt: string;
  updatedAt: string;
}

export interface Format {
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: Provider_metadata;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: Provider_metadata;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: Provider_metadata;
}

export interface Provider_metadata {
	public_id: string;
	resource_type: string;
}