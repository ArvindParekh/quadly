# dockerfile to run this project in development mode

FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json components.json next.config.mjs eslint.config.mjs next-env.d.ts tsconfig.json pnpm-lock.yaml postcss.config.mjs tailwind.config.ts ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]