import { TaskModel } from './task-model';
import { TeamModel } from './team-model';

export class UnitModel {
  id: number;
  name: string;
  teams: TeamModel[];
  tasks: TaskModel[];
}
