import { ScoringManager } from './ScoringManager.js';
import { JsScoringManager } from './supported/JsScoringManager.js';
import { CScoringManager } from './supported/CScoringManager.js';
import { PythonScoringManager} from './supported/PythonScoringManager.js';

type Lang = "c_cpp"|"javascript"|"python";

export const ScoringProvider = (lang: Lang): ScoringManager|null => {
    switch(lang)
    {
        case "c_cpp":
            return new CScoringManager();
        case "javascript":
            return new JsScoringManager();
        case "python":
            return new PythonScoringManager();
        default:
            return null;
    }
}