import { MatIconRegistry } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // linkGithub = "https://github.com/AviKshirsagar";

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "angular",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/Icons/svg/angular2.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "git",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/Icons/svg/Github.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "chrome",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/Icons/svg/downloadBackup.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "gmail",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/Icons/svg/G-MAIL.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "insta",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/Icons/svg/INSTA.svg")
    );{
  };
}
    onClick(){
      window.open('https://github.com/AviKshirsagar');
  }
  ngOnInit(): void {
  }

}
