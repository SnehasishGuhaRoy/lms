export interface ModelForAll {
    id?: number;
    name?: string;
    children?: ModelForAll[];
    type?: string;
    expandable?: boolean;
    level?: number;
  }