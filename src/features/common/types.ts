export interface OptionTypes {
  label: any;
  value: any;
  [key: string]: any;
}

export interface ResToast {
  message?: string;
  status: boolean;
  isToast: boolean;
  [key: string]: any;
}

export interface Filter {
  page_no: number;
  limit: number;
  [key:string]:any
}
