import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // console.log(this.platform);
    if (isPlatformBrowser(this.platform)) {
      document.title = 'Pricing Page';
    }
    this.title.setTitle('Pricing');
    this.meta.updateTag({
      name: 'description',
      content: 'Pricing page description',
    });
    this.meta.addTag({
      name: 'description',
      content: 'Pricing page description',
    });
    this.meta.addTag({
      name: 'og:title',
      content: 'Pricing Page',
    });
    this.meta.addTag({
      name: 'keywords',
      content:
        'about, page, description, Heider, Angular, DevsCO, Angular Pro, HeiderDev',
    });
  }
}
