import { AnswerModel } from "./answer-model";
import { UserModel } from "./user-model";
import { TaskModel } from './task-model';

export class QuestionDetailsModel {
  id: number;
  questionText: string;
  answers: AnswerModel[];
  solvedByUsers: UserModel[];
  task: TaskModel;
}
