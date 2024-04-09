import {
  TotalSalesCountImage,
  TotalSalesImage,
  TotalUsersImage,
} from '../../ui/images/images';

export const dashboardSummaryInitialItems = [
  {
    key: 'total_amount',
    heading: 'Today total sales',
    image: TotalSalesImage,
  },
  {
    key: 'total_txn',
    heading: 'Today sales count',
    image: TotalSalesCountImage,
  },
  {
    key: 'total_user',
    heading: 'Total users',
    image: TotalUsersImage,
  },
];
