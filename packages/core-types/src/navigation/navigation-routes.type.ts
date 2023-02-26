export namespace NavigationTypeService {
    export interface INavigationRoutesItem {
        title: string;
        component: Element;
        name: string;
    }
    export type INavigationRoutes = INavigationRoutesItem[];
}
