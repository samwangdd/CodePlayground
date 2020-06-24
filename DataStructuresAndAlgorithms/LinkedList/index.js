import { defaultEquals } from '../utils';
import { Node } from './models/LinkedListModels';

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
}
