import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver } from '@angular/cdk/layout';

interface Dish {
  id: number; // 一意の識別子を追加
  type: string;
  name: string;
  restaurant: string;
  location: string;
  detailLink: string;
  comment: string;
  imageUrl: string;
}

@Component({
  selector: 'app-my-full-course',
  standalone: true,
  templateUrl: './my-full-course.component.html',
  styleUrls: ['./my-full-course.component.css'],
  imports: [
    MatCardModule, // カードのデザイン用
    MatButtonModule, // ボタンのデザイン用
    MatGridListModule, // グリッドレイアウト用
  ],
})
export class MyFullCourseComponent {
  cols: number | undefined;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        '(max-width: 599px)', // Handsetサイズ
        '(min-width: 600px) and (max-width: 1023px)', // Tabletサイズ
        '(min-width: 1024px)', // Webサイズ
      ])
      .subscribe((result) => {
        if (result.breakpoints['(max-width: 599px)']) {
          this.cols = 1; // スマホサイズ時
        } else if (
          result.breakpoints['(min-width: 600px) and (max-width: 1023px)']
        ) {
          this.cols = 1; // タブレットサイズ時
        } else {
          this.cols = 2; // デスクトップサイズ時
        }
      });
  }

  dishes: Dish[] = [
    {
      id: 1,
      type: 'オードブル(前菜)',
      name: 'カプレーゼサラダ',
      restaurant: 'イタリアンレストラン',
      location: '東京都渋谷区',
      detailLink: 'https://example.com/caprese',
      comment: '新鮮なモッツァレラとトマトの組み合わせが最高！',
      imageUrl: 'path/to/caprese-image.jpg',
    },
    {
      id: 2, // 一意の識別子を設定
      type: 'スープ',
      name: 'とうもろこしとさつま芋の冷たいスープ',
      restaurant: 'Soup Stock Tokyo',
      location: '愛知県名古屋市千種区星が丘元町16-50星が丘テラスEAST1階',
      detailLink: 'https://www.soup-stock-tokyo.com/product/?item_cd=16',
      comment: '今までのとうもろこしスープにはない、食べた時に感動した！',
      imageUrl: 'path/to/soup-image.jpg',
    },
    {
      id: 3,
      type: '魚料理',
      name: 'グリルサーモン',
      restaurant: 'シーフードレストラン',
      location: '大阪府心斎橋',
      detailLink: 'https://example.com/grilled-salmon',
      comment: '外はカリッと、中はふっくらの絶品サーモン。',
      imageUrl: 'images/fish.jpg',
    },
    {
      id: 4,
      type: '肉料理',
      name: 'ビーフステーキ',
      restaurant: 'ステーキハウス',
      location: '北海道札幌市',
      detailLink: 'https://example.com/beef-steak',
      comment: '肉の旨味が凝縮されたジューシーなステーキ。',
      imageUrl: 'images/meat.jpg',
    },
    {
      id: 5,
      type: 'メイン',
      name: 'トリュフリゾット',
      restaurant: '高級イタリアン',
      location: '東京都港区',
      detailLink: 'https://example.com/truffle-risotto',
      comment: 'トリュフの香りが広がる贅沢なリゾット。',
      imageUrl: 'path/to/risotto-image.jpg',
    },
    {
      id: 6,
      type: 'サラダ',
      name: 'フルーツサラダ',
      restaurant: 'カフェ',
      location: '神奈川県横浜市',
      detailLink: 'https://example.com/fruit-salad',
      comment: '季節のフルーツをたっぷり使ったヘルシーな一品。',
      imageUrl: 'images/salad.jpg',
    },
    {
      id: 7,
      type: 'デザート',
      name: 'チョコレートムース',
      restaurant: 'デザート専門店',
      location: '東京都新宿区',
      detailLink: 'https://example.com/chocolate-mousse',
      comment: '濃厚でクリーミーなチョコレートムース。',
      imageUrl: 'path/to/mousse-image.jpg',
    },
    {
      id: 8,
      type: 'ドリンク',
      name: '自家製レモネード',
      restaurant: 'カフェ',
      location: '愛知県名古屋市',
      detailLink: 'https://example.com/lemonade',
      comment: 'さっぱりとした味わいの自家製レモネード。',
      imageUrl: 'path/to/lemonade-image.jpg',
    },
  ];
}
