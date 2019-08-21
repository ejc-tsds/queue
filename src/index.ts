/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import {Iter} from "@ejc-tsds/iter";
import {ArrayList} from "@ejc-tsds/arraylist";

export class Queue<T> extends Iter<T> {

	private readonly list: ArrayList<T>;

	public constructor(...values: T[]) {

		super();

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

	protected iterHandler(index: number): T {

		return this.list.get(index) as T;

	}

	protected iterSize(): number {

		return this.list.size();

	}

}