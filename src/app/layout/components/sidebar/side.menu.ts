export interface SideMenu{
    iconName?:string;
    displayName:string;
    usertype : string[];
    routeLink?: string
    nestedMenus?:SideMenu[]
}



export const SIDE_MENU_ITEMS:SideMenu[]=[{
displayName:'Dashboard',usertype:['ADMIN','STUDENT','TEACHER'],routeLink:'/home/dashboard'},
{displayName:'Student',usertype:['STUDENT']},
{displayName:'Teacher', usertype:['TEACHER']}
];























