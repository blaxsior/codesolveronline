import { ISManagerInputParams, ScoringManager } from "../ScoringManager.js";

export class JsScoringManager extends ScoringManager {
    constructor() {
        const extension = 'js';
        const params: ISManagerInputParams = {
            extension,
            run: (path, id) => `node ${path}/${id}.${extension}`,
        };

        super({ ...params })
    }
}