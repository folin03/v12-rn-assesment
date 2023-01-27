export interface Retailer {
  id: number;
  name: string;
  image: string;
  location: string;
}

export interface RetPreViewProps extends Retailer {
  onPressDisabled?: boolean;
}

export interface RetailerAction {
  type: string;
  payload: Retailer;
}
