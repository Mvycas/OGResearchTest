import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 20023,
  title: 'bitterly mortgage deeply',
};

export const sampleWithPartialData: ITask = {
  id: 7068,
  title: 'ha',
  dueDate: dayjs('2024-08-22'),
};

export const sampleWithFullData: ITask = {
  id: 8718,
  title: 'brightly moderate at',
  description: 'off insidious egghead',
  dueDate: dayjs('2024-08-22'),
  completed: false,
};

export const sampleWithNewData: NewTask = {
  title: 'joyfully hence',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
