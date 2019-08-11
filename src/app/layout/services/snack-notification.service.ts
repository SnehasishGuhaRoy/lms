import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationMessage } from 'src/app/shared/model/notification.message';
import { MatSnackBar } from '@angular/material';
import { SnackNotificationComponent } from '../snack-notification/snack-notification.component';

@Injectable({
  providedIn: 'root'
})
export class SnackNotificationService {

  private snackNotificationEvent$ = new BehaviorSubject<NotificationMessage>(null);
  constructor(private snackBar: MatSnackBar) {
    this.snackNotificationEvent$.subscribe(nm => {
      if (nm) {
        this.snackBar.open(nm.message, null, {
          duration: nm.durationInSeconds | 5 * 1000,
        });
      }

      /* this.snackBar.openFromComponent(SnackNotificationComponent, {
          duration: nm.durationInSeconds | 1 * 1000,
      }); */
    });

  }

  fireNotification(nm: NotificationMessage): void {
    this.snackNotificationEvent$.next(nm);
  }
}
