import ApiClient from "./services/api-client";
import IrregularVerbsService from "./services/irregular-verbs-service";
import PhrasalVerbsService from "./services/phrasal-verbs-service";

const API_BASE_URL = 'https://paveldanilin.github.io/memorize-it-data';

const APP_ROUTES = Object.freeze({
    IRREGULAR_VERBS: '/memorize-it/irregular-verbs',
    PHRASAL_VERBS: '/memorize-it/phrasal-verbs',
    PHRASAL_VERBS_EXERCISE: '/memorize-it/phrasal-verbs/:exercise'
});

let apiClient = null;
let irregularVerbsService = null;
let phrasalVerbsService = null;

export default class Container {
    static get API_BASE_URL() {
        return API_BASE_URL;
    }

    static get ROUTE_IRREGULAR_VERBS() {
        return APP_ROUTES.IRREGULAR_VERBS;
    }

    static get ROUTE_PHRASAL_VERBS() {
        return APP_ROUTES.PHRASAL_VERBS;
    }

    static get ROUTE_PHRASAL_VERBS_EXERCISE() {
        return APP_ROUTES.PHRASAL_VERBS_EXERCISE;
    }

    static get ApiClient() {
        if (!apiClient) {
            apiClient = ApiClient.create({ baseUrl: API_BASE_URL });
        }
        return apiClient;
    }

    static get IrregularVerbsService() {
        if (!irregularVerbsService) {
            irregularVerbsService = new IrregularVerbsService(Container.ApiClient);
        }
        return irregularVerbsService;
    }

    static get PhrasalVerbsService() {
        if (!phrasalVerbsService) {
            phrasalVerbsService = new PhrasalVerbsService(Container.ApiClient);
        }
        return phrasalVerbsService;
    }
}
