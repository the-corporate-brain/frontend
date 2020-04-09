import { AnswerModel } from './answer-model';
import { TaskModel } from './task-model';
import { UserModel } from './user-model';

export class QuestionModel {
    id: number;
    questionText: string;
    answers?: AnswerModel[];
    solvedByUsers?: UserModel[];
    task?: TaskModel;
}
