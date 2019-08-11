import { ComponentType } from "@angular/cdk/portal";

export interface NotificationMessage{
    message:string;
    icon?:string;
    alert?:string;
    durationInSeconds?:number;
}