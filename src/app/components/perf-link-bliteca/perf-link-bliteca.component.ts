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
  templateUrl: './perf-link-bliteca.component.html',
  styleUrls: ['./perf-link-bliteca.component.css']
})
export class PerfLinkBlitecaComponent implements OnInit {
  profileName: string = 'Bliteca';
  profileBio: string = '✨Sua biblioteca. Sua História✨';
  profileAvatarUrl: string = 'assets/images/perfilBliteca.png';

  links: Link[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    // Carregar os links
  this.links = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/bli_teca/",
    icon: "photo_camera"
  },
  {
    name: "Baixe o Aplicativo",
    url: "https://play.google.com/store/apps/details?id=com.bliteca.app",
    icon: "download"
  },
  {
    name: "Acesse o Site",
    url: "https://bliteca.com.br/",
    icon: "language"
  },
  {
    name: "E-mail",
    url: "mailto:g.britoalves888@gmail.com",
    icon: "mail"
  },
  {
    name: "Política de Privacidade",
    url: "https://bliteca.com.br/privacy.html",
    icon: "shield"
  }
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
