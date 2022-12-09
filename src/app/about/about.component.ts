import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface mailtoAsset {
  headline: string;
  subtexts: string[];
}

@Component({
  selector: 'pm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  pageHeader: string = 'Item List';
  imgWidth = 150;
  imgMargin = 6;
  mailtoHeader = "mailto:?";
  emailSubject = "subject=";
  emailBody = "body=";

  emailTextStrings = 'mailto:?subject=Email to company;body=Some sort of idea here.'

  subjectLine = "Subject line here for email"

  assets: mailtoAsset[] = [
    {
      headline: "Email to Itemize",
      subtexts: ["My email body here "]
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getEmailStrings(assets: mailtoAsset[], subject: string = "Email to Itemize company") {
      let myString = "";
      assets.forEach(asset => {
        myString = myString + asset.headline.toUpperCase() + asset.subtexts});
      const url = `${this.mailtoHeader}${this.emailSubject}${subject}&${this.emailBody}${myString}`;
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
