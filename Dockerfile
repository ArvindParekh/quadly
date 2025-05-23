# dockerfile to run this project in development mode

FROM node:24.0.0-alpine3.19

WORKDIR /app

COPY package.json package-lock.json components.json next.config.mjs eslint.config.mjs next-env.d.ts tsconfig.json pnpm-lock.yaml postcss.config.mjs tailwind.config.ts ./
COPY prisma ./prisma

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev:docker"]