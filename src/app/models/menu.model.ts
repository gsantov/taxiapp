export class MenuModel {
    id?:number;
    name?:string;
    route?:string;
    active?:boolean;
    children?:Array<MenuModel>;
    opened?:boolean;

    constructor(id:number, name:string, route:string, active:boolean, children:Array<MenuModel>, opened:boolean) {
        this.id = id;
        this.name = name;
        this.route = route;
        this.active = active;
        this.children = children;
        this.opened = opened;
    }
}