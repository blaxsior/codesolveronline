import { ISManagerInputParams, ScoringManager } from "../ScoringManager.js";

export class PythonScoringManager extends ScoringManager {
    constructor() {
        const extension = 'py';
        const params: ISManagerInputParams = {
            extension,
            run: (path, id) => `node ${path}/${id}.${extension}`,
        };

        super({ ...params })
    }
}