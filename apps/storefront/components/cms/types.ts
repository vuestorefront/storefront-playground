
export interface AgnosticCmsComponent {
  _uid: string;
  component: string;
  styles: string;
  uniqueClass: string;
  [key: string]: any;
}

export interface AgnosticCmsImage {
  desktop?: string;
  thumbnail?: string;
  mobile?: string;
  alt?: string;
}

export interface AgnosticCmsButton {
  label?: string;
  link?: string;
}