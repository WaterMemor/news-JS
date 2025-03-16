import AppLoader from './appLoader';
import { SourceData, NewsData } from '../view/appView';

class AppController extends AppLoader {
    getSources(callback: (data: SourceData) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }
    getNews(e: MouseEvent, callback: (data: NewsData) => void): void {
        let target = e.target as HTMLElement | null;
        const newsContainer = e.currentTarget as HTMLElement;

        if (!target || !newsContainer) return;

        while (target !== newsContainer) {
            if (target instanceof HTMLElement && target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode instanceof HTMLElement ? target.parentNode : null;
            if (!target) break;
        }
    }
}

export default AppController;
