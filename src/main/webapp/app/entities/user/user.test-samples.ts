import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 1190,
  login: '3w+Jk@9O7\\WKn-\\,VsnLLN\\cl\\YmJX',
};

export const sampleWithPartialData: IUser = {
  id: 6940,
  login: '4zv@Rds\\=xN\\p3\\x40\\BvhD\\bsy5Y',
};

export const sampleWithFullData: IUser = {
  id: 23253,
  login: 'iS',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
