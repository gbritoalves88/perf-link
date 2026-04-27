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
  templateUrl: './perf-link.component.html',
  styleUrls: ['./perf-link.component.css']
})
export class PerfLinkComponent implements OnInit {
  profileName: string = 'Natália Gusmão';
  profileBio: string = '✨ Criadora de conteúdo | 🌸 Lifestyle | 💖 Vivendo um sonho de cada vez';
  profileAvatarUrl: string = 'assets/images/perfil.jpg';

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
      { name: "📸 Instagram", url: "https://instagram.com/", icon: "📸" },
      { name: "🐦 TikTok", url: "https://tiktok.com/", icon: "🐦" },
      { name: "▶️ YouTube", url: "https://youtube.com/", icon: "▶️" },
      { name: "🎵 Spotify", url: "https://spotify.com/", icon: "🎵" },
      { name: "💬 WhatsApp", url: "https://wa.me/5511999999999", icon: "💬" },
      { name: "📧 E-mail", url: "mailto:contato@email.com", icon: "📧" },
      { name: "🛍️ Loja Online", url: "https://loja.com", icon: "🛍️" },
      { name: "📚 Meus Livros", url: "https://amazon.com/", icon: "📚" }
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
