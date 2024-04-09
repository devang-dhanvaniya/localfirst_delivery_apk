// PROJECT IMPORT
import type {RootState, AppDispatch} from './store';

// THIRD - PARTY IMPORT
import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
