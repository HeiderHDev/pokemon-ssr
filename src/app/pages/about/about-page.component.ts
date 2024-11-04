import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About');
    this.meta.updateTag({
      name: 'description',
      content: 'About page description',
    });
    this.meta.addTag({
      name: 'description',
      content: 'About page description',
    });
    this.meta.addTag({
      name: 'og:title',
      content: 'About Page',
    });
    this.meta.addTag({
      name: 'keywords',
      content:
        'about, page, description, Heider, Angular, DevsCO, Angular Pro, HeiderDev',
    });
  }
}
