import { ISManagerInputParams, ScoringManager } from "../ScoringManager.js";

export class CScoringManager extends ScoringManager {
    constructor() {
        const params: ISManagerInputParams = {
            extension: 'c',
            run: (path, id) => `${path}/${id}`,
            onCompile: (path, id) => `gcc -o ${path}/${id} ${path}/${id}.c`,
            onExit: (path, id) => `rm ${path}/${id}`
        };

        super({ ...params })
    }
}