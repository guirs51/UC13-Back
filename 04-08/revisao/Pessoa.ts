export class Pessoa {
    private name: string;
    private age: number;


	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
    

	public getname(): string {
		return this.name;
	}

	public setname(value: string) {
		this.name = value;
	}

	public getage(): number {
		return this.age;
	}

	public setage(value: number) {
		this.age = value;
	}

}