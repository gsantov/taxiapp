export class MenuModel {
    id?:number;
    name?:string;
    route?:string;
    active?:boolean;
    children?:Array<MenuModel>;

    constructor(id:number, name:string, route:string, active:boolean, children:Array<MenuModel>) {
        this.id = id;
        this.name = name;
        this.route = route;
        this.active = active;
        this.children = children;
    }
}