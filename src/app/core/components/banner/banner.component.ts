import { Component, Input, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  @Input({required : true}) bannerTitle ='';
  @Input({required : true}) bannerOverview ="";
  @Input() key ='dNYgq3BfnsY';

  private sanitizer = inject(DomSanitizer)
  videoUrl =(this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`
  ))
}
