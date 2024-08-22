import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9276e925-9536-4036-9522-665bea8c2804',
};

export const sampleWithPartialData: IAuthority = {
  name: 'b40d0ac8-3ef7-4347-ba39-dbf4bc3b3b89',
};

export const sampleWithFullData: IAuthority = {
  name: '8fc9931d-5e1c-4f75-b35a-0ec55bc7e2c7',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
