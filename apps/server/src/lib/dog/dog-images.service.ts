import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DogImagesService {
  private readonly url = 'https://random.dog/woof.json';

  async getRandomImage(): Promise<string> {
    const response = await axios.get(this.url);
    return response.data.url;
  }
}
