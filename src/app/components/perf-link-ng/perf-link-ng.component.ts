import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Link {
  name: string;
  url: string;
  icon: string;
  isFeatured?: boolean; // Para links em destaque
}

@Component({
  selector: 'app-perf-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perf-link-ng.component.html',
  styleUrls: ['./perf-link-ng.component.css']
})
export class PerfLinkNgComponent implements OnInit {
  profileName: string = 'NG Conteúdo';
  profileBio: string = '✨ Criação de Conteúdo | 🌙 Videomaker Mobile | 💖 Storymaker | 💫 Social Media';
  profileAvatarUrl: string = 'assets/images/perfilNg.jpg';

  featuredLink: Link = {
    name: '🎁 Link em Destaque',
    url: 'https://link.com/destaque',
    icon: '⭐',
    isFeatured: true
  };

  links: Link[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    // Carregar os links
    this.links = [
      { name: "Instagram", url: "https://www.instagram.com/ngconteudo/", icon: "" },
      { name: "Portfólio 1", url: "https://canva.link/9ey6g6jmnwberen", icon: "" },
      { name: "Portfólio 2", url: "https://canva.link/vpdrts4cec8eg2y", icon: "" },

      //{ name: "TikTok", url: "https://tiktok.com/", icon: "" },
      //{ name: "YouTube", url: "https://youtube.com/", icon: "" },
      //{ name: "Spotify", url: "https://spotify.com/", icon: "" },
      { name: "Entre em contato", url: "https://wa.me/5511982710781", icon: "" },
      { name: "E-mail", url: "mailto:nataliagusmao25@gmail.com", icon: "" },
      //{ name: "Loja Online", url: "https://loja.com", icon: "" },

      { name: "Natália Gusmão", url: "https://www.instagram.com/nat.gusmao/", icon: "" },
    ];
    this.loading = false;
  }

  // Função para copiar o link
  copyLink(): void {
    navigator.clipboard.writeText(window.location.href);
    alert('✨ Link copiado com sucesso!');
  }

  // Função para compartilhar no Twitter
  shareOnTwitter(): void {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Confira meu PerfLink: ${this.profileName}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  }

  // Função para compartilhar no Facebook
  shareOnFacebook(): void {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  }
}
