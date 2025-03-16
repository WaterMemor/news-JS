import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesElement = document.querySelector('.sources') as HTMLElement | null; // need to make sure element exist
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: MouseEvent) => {
                this.controller.getNews(e, (data: any) => this.view.drawNews(data));
            });
        }
        
        this.controller.getSources((data: any) => this.view.drawSources(data));
    }
}

export default App;