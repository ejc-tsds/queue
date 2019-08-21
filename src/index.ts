/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
import {ArrayList} from "@ejc-tsds/arraylist";


export class Queue<T> implements Iterable<T> {

	private readonly list: ArrayList<T>;

	public constructor(...values: T[]) {

		this.list = new ArrayList<T>(...values);

	}

	public push(value: T): void {

		this.list.add(value);

	}

	public pop(): T | undefined {

		const value: T | undefined = this.list.get(0);
		this.list.remove(0);

		return value;

	}

	public peek(): T | undefined {

		return this.list.get(0);

	}

	public size(): number {

		return this.list.size();

	}

	public toArrayList(): ArrayList<T> {

		return this.list;

	}

	public [Symbol.iterator](): Iterator<T> {

		let index: number = 0;

		return {

			next: (): IteratorResult<T> => {

				const value: T = this.list.get(index) as T;

				index++;

				return {
					done: index === this.size() + 1,
					value
				};
			}

		};
	}

}