import ApiClient from "./api-client";
import Container from "../container";

export default class PhrasalVerbsService {
    constructor(apiClient) {
        if (!apiClient instanceof ApiClient) {
            throw new Error('Expected instance of ApiClient');
        }
        this.apiClient = apiClient;
    }

    async list() {
        const list = await this.apiClient.getPhrasalVerbsList();
        if (!list) {
            throw new Error('Could not load data');
        }
        return list.map((item) => {
            item.link = Container.ROUTE_PHRASAL_VERBS_EXERCISE.replace(':exercise', item.dataset);
            return item;
        });
    }

    async getDataset(datasetName) {
        const dataset = await this.apiClient.getPhrasalVerbsDataset(datasetName);
        if (!dataset) {
            throw new Error('Could not get dataset');
        }
        return dataset;
    }
}
