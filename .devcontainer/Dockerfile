# 使用する Node.js のバージョン
FROM node:18

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# アプリケーションのソースをコンテナ内にコピー
COPY . .

# 依存関係のインストール
RUN npm install

# ポート3000でアプリケーションを実行することを指定
EXPOSE 3000

# コンテナを起動する際に実行されるコマンド
CMD ["npm", "run", "dev"]
