import './news.css';

class News {
    draw(data:any[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement | null;
        if (!newsItemTemp) {
            console.error('#newsItemTemp not found');
            return;
        }
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            const newsItemElement = newsClone.querySelector('.news__item') as HTMLElement;
            if (idx % 2) newsItemElement.classList.add('alt');

            const photoElement = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            photoElement.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
    
            const authorElement = newsClone.querySelector('.news__meta-author') as HTMLElement;
            authorElement.textContent = item.author || item.source.name;
            
            const dateElement = newsClone.querySelector('.news__meta-date') as HTMLElement;
            dateElement.textContent = item.publishedAt
              .slice(0, 10)
              .split('-')
              .reverse()
              .join('-');
      
            const titleElement = newsClone.querySelector('.news__description-title') as HTMLElement;
            titleElement.textContent = item.title;
      
            const sourceElement = newsClone.querySelector('.news__description-source') as HTMLElement;
            sourceElement.textContent = item.source.name;
      
            const descriptionElement = newsClone.querySelector('.news__description-content') as HTMLElement;
            descriptionElement.textContent = item.description;
      
            const readMoreLink = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;
            readMoreLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });


        const newsContainer = document.querySelector('.news') as HTMLElement;
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
