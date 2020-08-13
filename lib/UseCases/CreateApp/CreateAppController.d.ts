import { CreateAppUseCase } from './CreateAppUseCase';
import { IAnswers } from '../QuestionAsker/QuestionAskerDTO';
export declare class CreateAppController {
    private createAppUseCase;
    constructor(createAppUseCase: CreateAppUseCase);
    handle(answers: IAnswers): Promise<void>;
}
//# sourceMappingURL=CreateAppController.d.ts.map