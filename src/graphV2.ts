import { isPointer, REPO_TOKEN } from "./graph";
import { Link, Node } from "./graphMaker";


export default class Graph {
    graph: any
    nodes: Node[];
    links: Link[];
    private rules: any;

    private groups: { [key: string]: number };
    constructor(rules: any) {
        this.graph = {};
        this.nodes = [];
        this.links = [];
        this.groups = {};
        this.rules = rules;
    }

    public getData() {
        return {
            links: this.links,
            nodes: this.nodes
        };
    }

    public static of(data: any, rules?: any){
        const g = new Graph(rules || {});
        g.addData(data)
        return g;
    }

    private getGroupNumberForName(name: string) {
        const keys = Object.keys(this.groups);
        if (keys.includes(name)) {
            return this.groups[name];
        } else {
            const newNumber = keys.length + 1;
            this.groups[name] = newNumber;
            return newNumber;
        }
    }

    private newLink(source: string, target: string) {
        this.links.push({ source, target, value: 1 });
    }

    private newNode(name: string, group: string, data: any) {
        this.nodes.push({ id: name, group: this.getGroupNumberForName(group), data });
    }


    public addData(objs: any) {
        const nodeToRemove: string[] = [];
        Object.keys(objs).forEach(k1 => {
            const obj = objs[k1];
            const currentType = obj[REPO_TOKEN];
            Object.keys(obj).forEach(k => {
                const val = obj[k];

                if (isPointer(k)) {
                    const newKey = k.slice(1);

                    if (typeof val === 'string') {
                        const target = objs[val];
                        const targetType = target[REPO_TOKEN];
                        if (Object.keys(this.rules).includes(currentType)) {
                            const settingsForThis = this.rules[currentType];
                            // console.log('current', obj, currentType, val);
                            // console.log('target', target, targetType);
                            if (Object.keys(settingsForThis).includes(targetType)) {
                                const func = settingsForThis[targetType];
                                if (func === "combine") {
                                    obj[newKey] = target;
                                    nodeToRemove.push(val);
                                    // console.log('pushing');
                                    delete obj[k];
                                }
                            } else {
                                obj[newKey] = val;
                                this.newLink(k1, val);
                                delete obj[k];
                            }
                        } else {
                            obj[newKey] = target;
                            this.newLink(k1, val);
                            delete obj[k];
                        }
                        return;
                    }

                    if (val === null) {
                        obj[newKey] = val;
                        delete obj[k];
                        return;
                    }

                    if (Array.isArray(val) && val.length) {
                        val.forEach(i => this.newLink(k1, i));
                        delete obj[k];
                        return;
                    }
                }
                // add node to nodes
            });
            this.newNode(k1, obj[REPO_TOKEN], obj);
        });
        this.nodes = this.nodes.filter(n => !nodeToRemove.includes(n.id));
    }
}

