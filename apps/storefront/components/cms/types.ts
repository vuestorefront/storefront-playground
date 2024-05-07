export interface AgnosticCmsComponent {
  _uid: string;
  component: string;
  styles: string;
  uniqueClass: string;
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
