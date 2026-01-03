# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## 🎬 Otimização de Vídeo para Animações GSAP

### Por que otimizar vídeos para scroll-driven animations?

Vídeos não otimizados podem causar problemas em animações GSAP que controlam o `currentTime` baseado no scroll:

- ❌ Scrubbing impreciso (frames pulam)
- ❌ Carregamento lento
- ❌ Arquivo grande
- ❌ Reprodução só após download completo

### Comando FFmpeg para otimização

```bash
cd public/videos
ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
```

### 📊 Explicação dos Parâmetros

| Parâmetro             | O que faz                                                            | Por que usar                                                                    |
| --------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `-i input.mp4`        | **Input**: arquivo de entrada                                        | Especifica qual vídeo será processado                                           |
| `-vf scale=960:-1`    | **Video Filter**: redimensiona para largura 960px, altura automática | Reduz o tamanho do arquivo mantendo proporção                                   |
| `-movflags faststart` | Move metadados para o início do arquivo                              | **Crucial para web**: permite reprodução antes do download completo (streaming) |
| `-vcodec libx264`     | Codec de vídeo H.264                                                 | Melhor compressão e compatibilidade com navegadores                             |
| `-crf 20`             | **Constant Rate Factor**: qualidade 20 (0-51)                        | Equilíbrio entre qualidade e tamanho (20 = alta qualidade, 23 = padrão)         |
| `-g 1`                | **GOP size**: 1 frame entre keyframes                                | **⭐ ESSENCIAL**: permite scrubbing preciso frame-by-frame no GSAP              |
| `-pix_fmt yuv420p`    | Formato de pixel YUV 4:2:0                                           | Compatibilidade máxima com navegadores                                          |

### 🔑 Parâmetro mais importante: `-g 1`

O parâmetro **`-g 1` (GOP size = 1)** é crucial para animações GSAP:

- **GOP (Group of Pictures)**: define quantos frames entre cada keyframe
- **GOP = 1**: cada frame é um keyframe
- **Resultado**: quando o GSAP muda o `currentTime` durante o scroll, ele consegue ir para **qualquer frame exato**
- **Sem isso**: o vídeo "pula" frames ou fica travado durante o scrubbing

### 📈 Resultados da Otimização

**Antes** (`input.mp4`):

- Tamanho: 10 MB
- Scrubbing: Impreciso
- Carregamento: Lento
- GSAP: ⚠️ Pode travar

**Depois** (`output.mp4`):

- Tamanho: 4.8 MB (-52%)
- Scrubbing: Frame-by-frame perfeito
- Carregamento: Rápido + streaming
- GSAP: ✅ Suave e responsivo

### 🛠️ Instalação do FFmpeg

**Windows:**

```bash
# Via Winget (recomendado)
winget install ffmpeg

# Ou via Chocolatey
choco install ffmpeg
```

**macOS:**

```bash
brew install ffmpeg
```

**Linux:**

```bash
sudo apt install ffmpeg  # Debian/Ubuntu
sudo dnf install ffmpeg  # Fedora
```
