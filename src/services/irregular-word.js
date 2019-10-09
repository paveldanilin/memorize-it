import {IrregularVerbs} from '../data/irregular-verbs';

export default class IrregularWord {
    getRandom() {
        return IrregularVerbs[Math.floor(Math.random() * IrregularVerbs.length)];
    }
}
