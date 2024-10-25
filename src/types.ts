export interface SalesDataInterface {
  weekEnding: string;
  retailSales: number;
  retailerMargin: number;
  unitsSold: number;
  wholesaleSales: number;
}

export interface ReviewInterface {
  customer: string;
  review: string;
}

export interface ProductInterface {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: ReviewInterface[];
  sales: SalesDataInterface[];
  tags: string[];
  details: string[];
}