# PHP 8.2とFPMの公式イメージを使用
FROM php:8.2-fpm

# Composerをインストール
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 必要なPHP拡張機能をインストール
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql gd

# Node.jsとnpmをインストール（必要に応じて前端のビルドが可能）
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# 作業ディレクトリを設定
WORKDIR /var/www

# Laravelプロジェクトファイルをコピー
COPY . .

# ComposerでLaravelの依存関係をインストール
RUN composer install

# 必要なパーミッションを設定
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage

# Laravelの設定ファイルキャッシュとルートキャッシュ（本番環境用）
RUN php artisan config:cache
RUN php artisan route:cache

# アプリケーションが使用するポートを公開
EXPOSE 8000

# コンテナ起動時にLaravel開発サーバーを実行
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
