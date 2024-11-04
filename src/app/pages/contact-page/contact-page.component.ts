import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact');
    this.meta.updateTag({
      name: 'description',
      content: 'Contact page description',
    });
    this.meta.addTag({
      name: 'description',
      content: 'Contact page description',
    });
    this.meta.addTag({
      name: 'og:title',
      content: 'Contact Page',
    });
    this.meta.addTag({
      name: 'keywords',
      content:
        'about, page, description, Heider, Angular, DevsCO, Angular Pro, HeiderDev',
    });
  }
}
