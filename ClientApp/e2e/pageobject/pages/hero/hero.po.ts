import { browser, element, by, ElementFinder } from 'protractor';

class HeroPage {
    id: number;
    name: string;

    // Factory methods

    // Get hero from s formatted as '<id> <name>'.
    static fromString(s: string): Hero {
        return {
            id: +s.substr(0, s.indexOf(' ')),
            name: s.substr(s.indexOf(' ') + 1),
        };
    }

    // Get hero id and name from the given detail element.
    static async fromDetail(detail: ElementFinder): Promise<Hero> {
        // Get hero id from the first <div>
        let _id = await detail.all(by.css('div')).first().getText();
        // Get name from the h2
        let _name = await detail.element(by.css('h2')).getText();
        return {
            id: +_id.substr(_id.indexOf(' ') + 1),
            name: _name.substr(0, _name.lastIndexOf(' '))
        };
    }
}

export.class Hero {
  addToHeroName(text: string): promise.Promise<void> {
    let input = element(by.css('input'));
    return input.sendKeys(text);
  }

  expectHeading(hLevel: number, expectedText: string): void {
      let hTag = `h${hLevel}`;
      let hText = element(by.css(hTag)).getText();
      expect(hText).toEqual(expectedText, hTag);
  };

  getHeroLiEltById(id: number) {
    let spanForId = element(by.cssContainingText('li span.badge', id.toString()));
    return spanForId.element(by.xpath('..'));
  }
}
