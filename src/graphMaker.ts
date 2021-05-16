const folder = "./img";

export type Node<T= any> = {
    id: string;
    group: number;
    data?: T;
}

export type Link = {
    source: string;
    target: string;
    value: number;
}

export const getDefaultImg = (name: string) => {
    return require(`${folder}/${name}.png`).default;
}

export class Entity {
    img?: string;
    name: string;
    childrens: Entity[];
    parent?: Entity;
    groupId: number;
    constructor(name: string, groupId: number, img?: string) {
        this.name = name;
        this.childrens = [];
        this.groupId = groupId;
    }
    has(e: Entity | string) {
        if (typeof e === "string") {
            e = new Person(e, this.groupId);
        }
        this.childrens.push(e);
        e.setParent(this);
        return this;
    }
    toGraph() {
        const nodes: Node[] = this.getRecursiveChildren()
            .map(c => ({ id: c.name, group: c.getId(), data: { img: c.img } }));
        const links: Link[] = this.getRecursiveChildren()
            .flatMap(c => c.getLinks());

        return {
            nodes,
            links,
        }
    }
    setParent(parent: Entity) {
        this.parent = parent;
        this.groupId = this.parent.groupId + 1;
    }
    getId(): number {
        return this.groupId;
    }

    getRecursiveChildren(): Entity[] {
        const res = this.childrens.flatMap(c => c.getRecursiveChildren());
        res.push(this);
        return res;
    }

    getLinks(): Link[] {
        const links: Link[] = [];
        if (this.parent) {
            links.push({ source: this.name, target: this.parent.name, value: 1 });
            this.parent.childrens.forEach(c => {
                // we don't want to link subgroups
                if (this instanceof Group && c instanceof Group) {
                    return;
                }
                links.push({ source: this.name, target: c.name, value: 1 })
            })
        }
        return links;
    }
}


export class Group extends Entity {

}

export class Person extends Entity {
    constructor(name: string, groupId: number, img?: string) {
        super(name, groupId);
        this.img = img || getDefaultImg(name);
    }
}



