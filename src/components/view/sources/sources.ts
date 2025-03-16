import './sources.css';
import { Source } from '../appView';

class Sources {
    draw(data: Source[]):void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement | null;
        if (!sourceItemTemp) {
            console.error('#sourceItemTemp not found');
            return;
        }
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceItemElementName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            sourceItemElementName.textContent = item.name;
            const spurseItemElement = sourceClone.querySelector('.source__item') as HTMLElement;
            spurseItemElement.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const newContainer = document.querySelector('.sources') as HTMLElement;
        newContainer.append(fragment);
    }
}

export default Sources;
