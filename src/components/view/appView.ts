import News from './news/news';
import Sources from './sources/sources';

export interface Article {
    title: string;
    description: string;
    author: string;
    urlToImage?: string;
    publishedAt: string;
    source: { name: string };
    url: string;
}
export interface NewsData {
    articles: Article[];
}

export interface Source {
    id: string;
    name: string;
    url: string;
}
export interface SourceData {
    sources: Source[];
}

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData): void {
        if (!data || !data.articles || data.articles.length === 0) return;
        this.news.draw(data.articles);
    }

    drawSources(data: SourceData): void {
        if (!data || !data.sources || data.sources.length === 0) return;
        this.sources.draw(data.sources);
    }
}

export default AppView;
