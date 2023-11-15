import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from 'redux';

import { userSlice } from '../store/user/user.slice';

const rootActions = {
  ...userSlice.actions,
};

export default function useActions() {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}
