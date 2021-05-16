import data from './b6.json';

import {normalize} from 'normalizr';
import {missionSchema} from './data/mission/type';

export const normalizedData = normalize(data, missionSchema);
