import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type RefItem = { text: string; author: string };

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrls: ['./references.scss'],
})
export class References {
  refs: RefItem[] = [
    { text: 'Julia ist die Ruhe in Person. Sie nimmt sich Zeit, um Probleme wirklich zu verstehen und sauber zu analysieren – was in diesem Bereich unglaublich wichtig ist.', author: 'E. Ertuk – Projektpartner' },
    { text: 'Wenn etwas nicht sofort funktioniert, bleibt Julia ruhig und sucht nach einer guten Lösung. Sie probiert aus, fragt nach und bringt am Ende Ordnung ins Chaos.', author: 'P. Weiss – Projektpartner' },
    { text: 'Julia ist sehr neugierig und bleibt dran, bis sie Dinge wirklich versteht. Man merkt, dass sie Lust hat, besser zu werden – und das steckt an.', author: 'K. Ekhart – Mentor' },
    { text: 'Die Zusammenarbeit war offen und unkompliziert. Julia kommuniziert klar, hört zu und macht es leicht, gemeinsam voranzukommen.', author: 'F. Szceric – Projektpartner' },
  ];

  currentIndex = 0;


  get leftIndex(): number {
    return (this.currentIndex - 1 + this.refs.length) % this.refs.length;
  }

  get rightIndex(): number {
    return (this.currentIndex + 1) % this.refs.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.refs.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.refs.length) % this.refs.length;
  }

  goTo(i: number): void {
    this.currentIndex = i;
  }

}