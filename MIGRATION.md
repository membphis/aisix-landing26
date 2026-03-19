# AISIX Landing - Next.js Edition

This is the AISIX landing page, rebuilt with Next.js 15, React 19, and TypeScript.

## Migration from Vite to Next.js

### What Changed
- **Build Tool**: Vite → Next.js (with App Router)
- **Routing**: Wouter → Next.js file-based routing
- **Server**: Express → Next.js built-in server
- **Styling**: Tailwind CSS 4 with @tailwindcss/vite → @tailwindcss plugin via Next.js

### Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── api/                # API routes (if using)
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Shadcn/ui components
│   ├── *Section.tsx        # Page sections
│   └── ...                 # Other components
├── contexts/
│   └── ThemeContext.tsx    # Dark theme provider
├── hooks/
│   └── ...                 # Custom hooks
└── lib/
    └── utils.ts           # Utility functions
```

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The development server will be available at `http://localhost:3000`.

## Configuration Files

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration for Next.js
- `tailwind.config.js` - Tailwind CSS v4 configuration (auto-generated)
- `.env.example` - Environment variables template

## Key Dependencies

- **React 19** - UI library
- **Next.js 15** - Meta-framework for React
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Radix UI** - Accessible components
- **Framer Motion** - Animation library
- **Recharts** - Data visualization

## Migration Notes

### Removed Dependencies
- `vite` - Build tool
- `wouter` - Routing
- `express` - Server
- `esbuild` - Build tool

### Removed Files
- `vite.config.ts`
- `client/` directory
- `server/index.ts` (functionality moved to Next.js)

## Development

### Adding New Pages

Pages are automatically created by adding files to `src/app/`:

```typescript
// src/app/about/page.tsx
export default function About() {
  return <div>About page</div>
}
```

### Adding API Routes

API routes are created in `src/app/api/`:

```typescript
// src/app/api/hello/route.ts
export async function GET() {
  return new Response('Hello, world!')
}
```

## Deployment

The project can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted with Node.js

## Support

For issues or questions about Next.js, visit:
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Discord](https://discord.gg/nextjs)
