import {IrregularVerbs} from '../data/irregular-verbs';

export default class IrregularWordService {
    getRandom() {
        return IrregularVerbs[Math.floor(Math.random() * IrregularVerbs.length)];
    }
}
