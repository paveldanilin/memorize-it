import ApiClient from "./api-client";

export default class IrregularVerbsService {
    constructor(apiClient) {
        if (!apiClient instanceof ApiClient) {
            throw new Error('Expected instance of ApiClient');
        }
        this.apiClient = apiClient;
    }

    async getRandom() {
        const dataset = await this.apiClient.getIrregularVerbsDataset();
        if (!dataset) {
            throw new Error('Could not load data');
        }
        console.log(dataset);
        return dataset[Math.floor(Math.random() * dataset.length)];
    }
}
