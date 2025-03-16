import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL;
        const apiKey = process.env.API_KEY;
        if (!apiUrl || !apiKey) {
            throw new Error("NO API_URL and NO API_KEY.");
        }
        super(apiUrl, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;
