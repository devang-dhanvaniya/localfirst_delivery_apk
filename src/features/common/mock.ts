import {Common} from '../../constant';
import {Filter, ResToast} from './types';

export const initialResToast: ResToast = {
  message: '',
  status: true,
  isToast: false,
};

export const initialFilter: Filter = {
  page_no: Common.PAGE_NO,
  limit: Common.LIMIT,
};
