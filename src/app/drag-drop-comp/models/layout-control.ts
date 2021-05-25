export interface ILayout {
  top?: number;
  left?: number;
  height?: number;
  width?: number;
  background?: string;
}

export interface IDragData {
  type?: 'control' | 'param';
  valueName?: string;
}
