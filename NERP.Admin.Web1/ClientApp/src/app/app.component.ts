import { Component, OnInit } from '@angular/core';

import { AuthService } from './common/auth/auth.service';
import { LoginUser } from './common/models/loginUser';
import { Helper } from './common/helper';

const STORE_KEY = 'NERP_Admin_LastAction';
const MINUTES_UNITL_AUTO_LOGOUT = 60 // in mins
const CHECK_INTERVAL = 15000 // in ms

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    loginUser: LoginUser;

    constructor(
        private authService: AuthService,
        private helperService: Helper) {
    }

    ngOnInit() {

        this.loginUser = new LoginUser();

        this.getFormData();

        this.initListener();
        this.initInterval();
    }

    getFormData() {

        this.loginUser = new LoginUser();

    this.authService.getLoginUserProfile().subscribe(
      res => {
        if (res.data && res.status.toLowerCase() == "ok") {
          this.loginUser = res.data;
                    this.authService.loginUser = this.loginUser;
        }
                else {
          this.helperService.showAlertMessage(res.message, "error");
                    this.onLogout();
                }
            },
            err => {
                this.helperService.showAlertMessage(err.message, 'error');
                this.onLogout();
            },
        );
    }

    initListener() {
        document.body.addEventListener('click', () => this.reset());
        document.body.addEventListener('mouseover', () => this.reset());
        document.body.addEventListener('mouseout', () => this.reset());
        document.body.addEventListener('keydown', () => this.reset());
        document.body.addEventListener('keyup', () => this.reset());
        document.body.addEventListener('keypress', () => this.reset());
    }

    reset() {
        this.setLastAction(Date.now());
    }

    public getLastAction() {
        return parseInt(localStorage.getItem(STORE_KEY));
    }

    public setLastAction(lastAction: number) {
        localStorage.setItem(STORE_KEY, lastAction.toString());
    }

    initInterval() {
        setInterval(() => {
            this.check();
        }, CHECK_INTERVAL);
    }

    check() {
        const now = Date.now();
        const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
        const diff = timeleft - now;
        const isTimeout = diff < 0;

        if (isTimeout) {
            localStorage.clear();
            this.onLogout();
        }
    }

    onLogout() {
        localStorage.removeItem('NERP-Admin-token');
        //this.router.navigate(['/login']);
        window.location.href = '/Auth/Logout';
  }
  
    getFeatureAccess(featureCode: string): boolean {
        return this.authService.getFeatureAccess(featureCode);
    }
}
