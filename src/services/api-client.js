import Axios from 'axios';
import to from '../utils/to';

export default class ApiClient {
    constructor(baseUrl, timeout) {
        this.httpClient = Axios.create({
            baseURL: baseUrl,
            timeout: timeout,
        });
    }

    static create({ baseUrl = '', timeout = 1000 }) {
        return new ApiClient(baseUrl, timeout);
    }

    async getIrregularVerbsStatus() {
        return this.getRequest('/irregular-verbs/status.json');
    }

    async getIrregularVerbsDataset() {
        return this.getRequest('/irregular-verbs/dataset.json');
    }

    async getPhrasalVerbsStatus() {
        return this.getRequest('/phrasal-verbs/status.json');
    }

    async getPhrasalVerbsList() {
        return this.getRequest('/phrasal-verbs/list.json');
    }

    async getPhrasalVerbsDataset(datasetName) {
        return this.getRequest(`/phrasal-verbs/dataset/${datasetName}.json`);
    }

    async getRequest(url) {
        const [err, response] = await to(this.httpClient.get(url));
        if (!response) {
            console.error(err);
            return null;
        }
        console.info(response);
        return response.data;
    }
}
