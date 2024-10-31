# Node.jsの公式イメージを使用
FROM node:18

# 作業ディレクトリの設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# Tailwind CSS、PostCSS、Autoprefixerをインストール
RUN npm install -D tailwindcss postcss autoprefixer

# Angular CLIと依存関係のインストール
RUN npm install -g @angular/cli@18 \
    && npm install @angular/material @angular/cdk

# プロジェクトファイルをコピー
COPY . .

# Tailwind CSS設定ファイルを生成（必要に応じて）
RUN npx tailwindcss init -p

# アプリケーションが使用するポートを公開
EXPOSE 4200

# コンテナ起動時にAngularアプリケーションを開発モードで実行
CMD ["ng", "serve", "--host", "0.0.0.0"]
