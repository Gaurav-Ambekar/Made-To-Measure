import useSWR from 'swr';
import { OptionsType } from '../util/form/SelectFormField';

export const useAuth = (url: string) => {
  const { data, error } = useSWR(url);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const useLoginAssets = (url: string) => {
  const { data, error } = useSWR(url, { refreshInterval: 0 });
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useSelectOption = (data: Array<string | number>) => {
  if (!data) return [{ label: 'NO DATA', value: 0 }];
  const options = data.map((label, value) => ({
    label,
    value,
  }));
  return options;
};
