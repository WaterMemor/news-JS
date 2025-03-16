import News from './news/news';
import Sources from './sources/sources';

interface NewsData {
    articles: any[];
}
interface SourceData {
    sources: any[];
}
export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData): void {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data: SourceData): void {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
