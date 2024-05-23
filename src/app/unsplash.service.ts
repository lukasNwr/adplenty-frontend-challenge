import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  searchValue: string = '';
  apiKey = 'mc022uV3PnBEenyHqnvPyCbvybr9q1FohSeLtqly80Q';
  // url = `https://api.unsplash.com/search/photos/?query=${this.searchValue}&client_id=${this.apiKey}`;
  url = `https://api.unsplash.com/search/photos/`;

  async getImages(value: string, page: number): Promise<any> {
    const response = await fetch(
      `${this.url}?per_page=30&query=${value}&page=${page}&client_id=${this.apiKey}`,
    );
    return await response.json();
  }

  getValue(): string {
    return this.searchValue;
  }

  setSearchValue(value: string): void {
    this.searchValue = value;
  }
}
