// Page.js[home]
import { browser, $, $$, expect } from '@wdio/globals';

export default class Page {

    public title: { [key: string]: string};

    constructor( title, navMenu) {
        this.title = title;
    }

    async open (path) {
        await browser.url(path)
    }
}
